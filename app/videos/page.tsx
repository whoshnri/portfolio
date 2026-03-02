"use client"

import React from "react";
import { motion } from "framer-motion";

// export const metadata = {
//     title: "Videos",
// };

const placeholderVideos = [
    {
        id: "1",
        title: "How I built KwizHub using Next.js and Supabase",
        description: "A deep dive into the architecture of my academic marketplace, the engineering challenges faced, and the decisions I made to scale it.",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    },
    {
        id: "2",
        title: "Building in Public: The reality of shipping fast",
        description: "Thoughts on shipping quickly, capturing user feedback, and why polished demos are overrated in early stages.",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    },
];

export default function VideosPage() {
    return (
        <div className="w-full flex flex-col min-h-[70vh] px-[6vw] lg:px-[10vw] pt-32 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl w-full"
            >
                <h1 className="text-4xl md:text-5xl font-playfair text-white mb-16 tracking-tight">Videos</h1>

                <div className="flex flex-col gap-16">
                    {placeholderVideos.map((video) => (
                        <div key={video.id} className="flex flex-col gap-6">
                            <div className="aspect-video w-full bg-gray-900 border border-gray-800">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={video.embedUrl}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>

                            <div>
                                <h2 className="text-2xl font-playfair text-white mb-3 tracking-tight">
                                    {video.title}
                                </h2>
                                <p className="font-dmsans text-gray-400 font-light leading-relaxed max-w-2xl">
                                    {video.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
