import React from "react";
import Image from "next/image";
import image from "@/public/image.jpg";
import {  Download } from "lucide-react";

export default function Hero() {
  return (
     <section className="block lg:justify-around max-w-3xl mx-auto ">
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
        <div className="space-y-8 col-span-2 text-left">
          <h1 className="text-4xl my-5 font-extralight text-white tracking-tight">
           Developer <span className="text-blue-400">.</span> Learner
          </h1>
          <p className="text-gray-300 text-base lg:text-lg max-w-lg">
            Passionate about learning, building, and contributing to society in
            <span className="italic text-blue-400 font-medium"> full capacity</span>.
          </p>

          <a
            href="/henrybassey.pdf"
            download
            className="inline-flex items-center gap-3 btn-border-reveal px-8 py-4 rounded-full text-sm font-medium  transition cursor-none"
          >
            Download my resume
            <Download className="w-5 h-5" />
          </a>
        </div>
        </div>
        </div>
    </section>
  );
}
