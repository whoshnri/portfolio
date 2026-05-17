"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";

type SpotifyResponse = {
  isPlaying: boolean;
  track?: {
    name: string;
    artists: string;
    albumArt: string;
    songUrl: string;
  };
};

export default function SpotifyNowPlaying() {
  const [data, setData] = useState<SpotifyResponse>({ isPlaying: false });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchNowPlaying = async () => {
      try {
        const response = await fetch("/api/spotify");
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

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 20000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="mt-10 border border-[#d4d3ce]/20 bg-white/5 p-4 md:p-5 max-w-lg">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-4">
        <FaSpotify className="text-[#1DB954]" aria-hidden />
        <span>Currently Playing</span>
      </div>

      {isLoading ? (
        <p className="text-sm text-[#d4d3ce]">Checking Spotify...</p>
      ) : data.isPlaying && data.track ? (
        <div className="flex items-center gap-4">
          {data.track.albumArt ? (
            <Image
              src={data.track.albumArt}
              alt={`${data.track.name} album art`}
              width={64}
              height={64}
              className="w-16 h-16 object-cover"
            />
          ) : null}
          <div className="flex-1 min-w-0">
            <p className="text-white text-base font-medium truncate">{data.track.name}</p>
            <p className="text-[#d4d3ce] text-sm truncate">{data.track.artists}</p>
          </div>
          {data.track.songUrl ? (
            <Link
              href={data.track.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-[#1DB954] hover:text-white transition-colors"
            >
              Listen
            </Link>
          ) : null}
        </div>
      ) : (
        <p className="text-sm text-[#d4d3ce]">Nothing playing right now.</p>
      )}
    </section>
  );
}
