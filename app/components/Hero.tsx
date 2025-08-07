import React from "react";
import Image from "next/image";
import image from "@/public/image.jpg";
import paint from "@/public/paint.svg";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <main className="space-y-4 items-center flex flex-col gap-12 px-4 py-12">
      {/* Image Section */}
      <section className="relative w-50 h-50 flex items-center justify-center">
        <Image
          src={image}
          alt="avatar"
          width={300}
          height={300}
          className="object-cover w-full h-full rounded-full border-2 border-black relative z-20"
        />

        <Image
          src={paint}
          alt="paint spill background"
          width={500}
          height={500}
          className="absolute inset-0 scale-[1.4] z-10"
        />
      </section>

      {/* Text Content Section */}
      <section className="text-cente z-50">
        <p className="bg-gray-200 w-fit text-black px-3 rounded mb-4 flex items-center gap-2 uppercase text-xs py-1 ">
          <span className="w-2 h-2 bg-green-400  animate-pulse rounded-full"></span>
          Henry Bassey
        </p>
        <h1
          style={{ fontFamily: "'Permanent Marker', cursive" }}
          className="text-5xl font-sans text-white font-bold
                "
        >
          Developer &amp; Learner
        </h1>
        <p className="text-lg text-gray-300 py-4 max-w-md">
          Passionate about learning, building, and contributing to society in
          full capacity.
        </p>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg cursor-pointer group  justify-center"
        >
          Download my resume
          <ArrowRight className="-rotate-45 bg-black rounded-full stroke-white group-hover:scale-110 group-hover:rotate-0 transition-all duration-300" />
        </a>
      </section>
    </main>
  );
}
