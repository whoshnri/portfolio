import { NextResponse } from "next/server";

const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

type SpotifyTrack = {
  name: string;
  external_urls?: { spotify?: string };
  album?: {
    images?: Array<{ url: string }>;
  };
  artists?: Array<{ name: string }>;
};

async function getSpotifyAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Spotify environment variables.");
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to refresh Spotify access token.");
  }

  const json = await response.json();
  return json.access_token as string;
}

export async function GET() {
  try {
    const accessToken = await getSpotifyAccessToken();
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    if (response.status === 204) {
      return NextResponse.json({ isPlaying: false });
    }

    if (!response.ok) {
      return NextResponse.json({ isPlaying: false });
    }

    const song = await response.json();
    const item = song?.item as SpotifyTrack | undefined;

    if (!item) {
      return NextResponse.json({ isPlaying: false });
    }

    return NextResponse.json({
      isPlaying: Boolean(song?.is_playing),
      track: {
        name: item.name,
        artists: item.artists?.map((artist) => artist.name).join(", ") ?? "Unknown artist",
        albumArt: item.album?.images?.[0]?.url ?? "",
        songUrl: item.external_urls?.spotify ?? "",
      },
    });
  } catch {
    return NextResponse.json(
      { isPlaying: false, error: "Unable to fetch Spotify status right now." },
      { status: 500 }
    );
  }
}
