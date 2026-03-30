export const prerender = false;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

async function getAccessToken() {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = import.meta.env;
  const basic = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);
  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });
  const data = await res.json();
  return data.access_token as string;
}

function trackResponse(track: any, isPlaying: boolean, playedAt?: string) {
  return new Response(
    JSON.stringify({
      isPlaying,
      title: track.name,
      artist: track.artists.map((a: any) => a.name).join(", "),
      albumArt: track.album.images?.[2]?.url ?? track.album.images?.[0]?.url,
      songUrl: track.external_urls.spotify,
      playedAt,
    }),
    { status: 200, headers: { "Content-Type": "application/json" } },
  );
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    const nowRes = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (nowRes.status === 200) {
      const data = await nowRes.json();
      if (data?.item) return trackResponse(data.item, data.is_playing);
    }

    const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const recentData = await recentRes.json();
    const item = recentData?.items?.[0];
    const track = item?.track;
    if (track) return trackResponse(track, false, item.played_at);
  } catch {}

  return new Response(JSON.stringify({ isPlaying: false }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
