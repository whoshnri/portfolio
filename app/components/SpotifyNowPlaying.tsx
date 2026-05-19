"use client";

import { PlayIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSpinner, FaSpotify } from "react-icons/fa";
import { InlineCode } from "@/components/InlineCode";

type SpotifyResponse = {
  isPlaying: boolean;
  track?: {
    name: string;
    artists: string;
    albumArt: string;
    songUrl: string;
  };
};

function isTrustedSpotifyImage(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" && parsed.hostname === "i.scdn.co";
  } catch {
    return false;
  }
}

export default function SpotifyNowPlaying() {
  const [data, setData] = useState<SpotifyResponse>({ isPlaying: false });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let interval: ReturnType<typeof setInterval> | null = null;

    const fetchNowPlaying = async () => {
      if (document.visibilityState === "hidden") {
        return;
      }

      try {
        const response = await fetch("/api/spotify");
        if (!response.ok) {
          throw new Error("Failed to load Spotify status.");
        }

        const json = (await response.json()) as SpotifyResponse;
        if (isMounted) {
          setData(json);
        }
      } catch {
        if (isMounted) {
          setData({ isPlaying: false });
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    const startPolling = () => {
      if (interval) return;
      interval = setInterval(fetchNowPlaying, 20000);
    };

    const stopPolling = () => {
      if (!interval) return;
      clearInterval(interval);
      interval = null;
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchNowPlaying();
        startPolling();
      } else {
        stopPolling();
      }
    };

    fetchNowPlaying();
    if (document.visibilityState === "visible") {
      startPolling();
    }
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      isMounted = false;
      stopPolling();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <section className="mt-10 border border-[#d4d3ce]/20 bg-white/5 p-4 md:p-5 max-w-lg">
      <div className="flex items-center gap-2 text-xs uppercase tracking- font-bold text-gray-400 mb-4">
        <FaSpotify className="text-[#1DB954]" aria-hidden="true" />
       Currently Playing
      </div>

      {isLoading ? (
        <p className="text-sm text-[#d4d3ce]">
          <FaSpinner className="animate-spin"/> </p>
      ) : data.isPlaying && data.track ? (
        <div className="flex items-center gap-4">
          {data.track.albumArt && isTrustedSpotifyImage(data.track.albumArt) ? (
            <img
              src={data.track.albumArt}
              alt={`${data.track.name} album art`}
              width={64}
              height={64}
              className="w-16 h-16 object-cover rounded-full animate-spin duration-900 [animation-duration:3s]"
            />
          ) : null}
          <div className="flex-1 min-w-0">
            <p className="text-white text-base font-medium truncate">
              {data.track.name}</p>
            <p className="text-[#d4d3ce] text-sm truncate">{data.track.artists}</p>
          </div>
          {data.track.songUrl ? (
            <Link
              href={data.track.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-[#1DB954] hover:text-white transition-colors"
            >
              <PlayIcon/>
            </Link>
          ) : null}
        </div>
      ) : (
        <p className="text-sm text-[#d4d3ce]">
          Nothing playing right now.</p>
      )}
    </section>
  );
}
