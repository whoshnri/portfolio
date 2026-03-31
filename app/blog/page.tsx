"use client"
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import blogs from "@/lib/blogs.json";


export default function BlogList() {
    return (
        <div className="w-full flex flex-col min-h-[70vh] px-[6vw] lg:px-[10vw] pt-32 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className=" w-full"
            >
                <h1 className="text-4xl md:text-5xl font-playfair text-white mb-16 tracking-tight">Writing</h1>

                <div className="flex flex-col">
                    {blogs.map((blog, index) => {
                        // Extract excerpt from the first block
                        const firstBlockText = blog.blocks[0].replace(/<[^>]+>/g, '');
                        const excerpt = firstBlockText.split(' ').slice(0, 20).join(' ') + '...';

                        return (
                            <Link
                                href={`/blog/${blog.slug}`}
                                key={blog.slug}
                                className="group block py-8 px-10 border-t border-gray-800 last:border-b transition-colors hover:bg-gray-900/30"
                            >
                                <div className="flex flex-col gap-2 relative">
                                    <span className="text-xs font-dmsans text-gray-500 uppercase tracking-widest">{blog.date}</span>
                                    <h2 className="text-2xl font-playfair text-white group-hover:text-blue-400 transition-colors">
                                        {blog.heading}
                                    </h2>
                                    <p className="text-sm font-dmsans text-gray-400 font-light mt-2 leading-relaxed max-w-2xl">
                                        {excerpt}
                                    </p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </motion.div>
        </div>
    );
}
