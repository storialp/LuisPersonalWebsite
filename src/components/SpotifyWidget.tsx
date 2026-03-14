import { useEffect, useState } from 'react';

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumArt?: string;
  songUrl?: string;
}

const AudioBars = () => (
  <div className="flex items-center gap-[1.5px] h-3 px-0.5 shrink-0 ml-1">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="w-[1px] bg-[#20D5B3] animate-music-bar-subtle"
        style={{
          animationDelay: `-${(i * 0.3) % 1.5}s`,
          animationDuration: `${1 + i * 0.2}s`,
        }}
      />
    ))}
  </div>
);

export default function SpotifyWidget() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [visible, setVisible] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/spotify');
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
        className={`absolute right-6 top-[12px] hidden md:flex items-center gap-2.5 py-1.5 pl-1.5 pr-3.5 rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-md transition-all duration-700 hover:bg-white/[0.04] hover:border-white/10 active:scale-95 ${
          visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        } group`}
        style={{
          maxWidth: '240px',
        }}
      >
        <div className="relative shrink-0 flex items-center justify-center">
          {data.albumArt ? (
            <img
              src={data.albumArt}
              alt={data.title}
              className={`w-7 h-7 rounded-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 ${
                data.isPlaying ? 'animate-slow-spin' : ''
              }`}
            />
          ) : (
            <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#20D5B3]/20 rounded-full" />
            </div>
          )}
          
          {data.isPlaying && (
            <div className="absolute -inset-[1px] border border-[#20D5B3]/10 rounded-full" />
          )}
        </div>

        <div className="flex flex-col min-w-0">
          <span className="text-[10px] font-medium text-white/80 truncate leading-tight group-hover:text-white transition-colors duration-500">
            {data.title}
          </span>
          <span className="text-[9px] font-normal text-white/30 truncate leading-tight mt-0.5 group-hover:text-white/50 transition-colors duration-500">
            {data.artist}
          </span>
        </div>

        {data.isPlaying && <AudioBars />}

        {/* Minimal Glow Effect */}
        <div className="absolute inset-0 -z-10 bg-[#20D5B3]/0 group-hover:bg-[#20D5B3]/[0.02] rounded-full blur-md transition-all duration-700" />
      </a>
    </>
  );
}
