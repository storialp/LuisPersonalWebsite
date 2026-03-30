import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumArt?: string;
  songUrl?: string;
  playedAt?: string;
}

interface SpotifyWidgetProps {
  className?: string;
}

const AudioBars = () => (
  <div className="ml-1 flex h-3 shrink-0 items-center gap-[1.5px] px-0.5">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="h-full w-[1px] bg-[#20D5B3] animate-music-bar-subtle"
        style={{
          animationDelay: `-${(i * 0.3) % 1.5}s`,
          animationDuration: `${1 + i * 0.2}s`,
        }}
      />
    ))}
  </div>
);

export default function SpotifyWidget({ className }: SpotifyWidgetProps) {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [visible, setVisible] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/spotify");
      if (res.ok) setData(await res.json());
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30_000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (data?.title) {
      const t = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(t);
    }
  }, [data?.title]);

  if (!data?.title) return null;

  const statusLabel = data.isPlaying ? "Currently playing" : "Last song played";

  return (
    <>
      <style>{`
        @keyframes music-bar-subtle {
          0%, 100% { height: 25%; }
          50% { height: 75%; }
        }
        .animate-music-bar-subtle {
          animation: music-bar-subtle 1.5s ease-in-out infinite;
        }
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-slow-spin {
          animation: slow-spin 12s linear infinite;
        }
      `}</style>
      <a
        href={data.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group relative inline-flex min-w-0 items-center gap-2.5 rounded-full border border-white/5 bg-[rgba(8,8,8,0.72)] py-1.5 pl-1.5 pr-3.5 backdrop-blur-md transition-all duration-700 hover:border-white/10 hover:bg-white/[0.04] active:scale-95",
          visible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
          className,
        )}
      >
        <div className="relative flex shrink-0 items-center justify-center">
          {data.albumArt ? (
            <img
              src={data.albumArt}
              alt={data.title}
              className={`h-7 w-7 rounded-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 ${
                data.isPlaying ? "animate-slow-spin" : ""
              }`}
            />
          ) : (
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5">
              <div className="h-3 w-3 rounded-full bg-[#20D5B3]/20" />
            </div>
          )}

          {data.isPlaying && (
            <div className="absolute -inset-[1px] rounded-full border border-[#20D5B3]/10" />
          )}
        </div>

        <div className="flex min-w-0 flex-col">
          <span className="truncate text-[8px] font-medium uppercase leading-tight tracking-[0.08em] text-white/45">
            {statusLabel}
          </span>
          <span className="mt-0.5 truncate text-[10px] font-medium leading-tight text-white/80 transition-colors duration-500 group-hover:text-white">
            {data.title}
            {data.artist ? (
              <span className="font-normal text-white/40 transition-colors duration-500 group-hover:text-white/50">
                {" "}
                • {data.artist}
              </span>
            ) : null}
          </span>
        </div>

        {data.isPlaying && <AudioBars />}

        <div className="absolute inset-0 -z-10 rounded-full bg-[#20D5B3]/0 blur-md transition-all duration-700 group-hover:bg-[#20D5B3]/[0.02]" />
      </a>
    </>
  );
}
