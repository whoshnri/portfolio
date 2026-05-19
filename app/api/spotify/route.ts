import { NextResponse } from "next/server";

const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

class SpotifyTokenError extends Error {
  constructor(
    message: string,
    readonly status?: number,
    readonly details?: string
  ) {
    super(message);
    this.name = "SpotifyTokenError";
  }
}

function isNetworkError(error: unknown) {
  if (!(error instanceof TypeError)) {
    return false;
  }

  const cause = (error as { cause?: unknown }).cause;
  if (!cause || typeof cause !== "object") {
    return false;
  }

  const code = (cause as { code?: unknown }).code;
  return code === "ETIMEDOUT" || code === "EAI_AGAIN" || code === "ECONNRESET";
}

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
    throw new SpotifyTokenError("Missing Spotify environment variables.");
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
    const errorDetails = await response.text();
    throw new SpotifyTokenError(
      "Failed to refresh Spotify access token.",
      response.status,
      errorDetails
    );
  }

  const json = await response.json();
  if (!json?.access_token) {
    throw new SpotifyTokenError("Spotify access token is missing in refresh response.");
  }

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
      const errorDetails = await response.text();
      console.error(
        `Spotify currently-playing request failed. Status: ${response.status}. ${errorDetails}`
      );
      return NextResponse.json({ isPlaying: false });
    }

    const song = await response.json();
    const item = song?.item as SpotifyTrack | undefined;

    if (!item) {
      return NextResponse.json({ isPlaying: false });
    }

    const artists = item.artists?.map((artist) => artist.name).join(", ");

    return NextResponse.json({
      isPlaying: Boolean(song?.is_playing),
      track: {
        name: item.name,
        artists: artists || "Unknown artist",
        albumArt: item.album?.images?.[0]?.url ?? "",
        songUrl: item.external_urls?.spotify ?? "",
      },
    });
  } catch (error) {
    if (error instanceof SpotifyTokenError) {
      console.error("Spotify token refresh failed:", {
        message: error.message,
        status: error.status,
        details: error.details,
      });

      return NextResponse.json({ isPlaying: false });
    }

    if (isNetworkError(error)) {
      console.error("Spotify request failed due to a network error:", error);
      return NextResponse.json({ isPlaying: false });
    }

    console.error("Spotify API route failed:", error);
    return NextResponse.json(
      { isPlaying: false, error: "Unable to fetch Spotify status right now." },
      { status: 500 }
    );
  }
}
