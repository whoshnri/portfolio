import React from "react";
import Image from "next/image";
import image from "@/public/image.jpg";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="block lg:justify-around max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
      {/* Image */}
      <div className="max-sm:h-screen sm:py-32 grid grid-cols-1 items-center">
        <div>
          <div className="relative w-full aspect-square max-w-[150px]">
            <Image
              src={image}
              alt="Henry Bassey portrait"
              fill
              className="object-cover rounded-full shadow-lg"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 col-span-2 text-left mt-8">
            <h2 className="text-4xl lg:text-5xl font-extralight text-white tracking-tight font-sans">
              Software Engineer <span className="text-blue-400">.</span>
            </h2>
            <p className="text-gray-300 text-base lg:text-lg max-w-lg leading-relaxed">
              Dedicated to building polished, high-performance web applications with a focus on
              <span className="italic text-blue-400 font-medium"> ultraminimalistic design </span>
              and seamless user experiences.
            </p>

            <a
              href="/henrybassey.pdf"
              download
              className="inline-flex items-center gap-3 btn-border-reveal px-8 py-4 rounded-full text-sm font-medium transition cursor-none mt-4 hover:scale-105"
            >
              Download Resume
              <Download className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
