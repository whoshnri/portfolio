import React from "react";
import { motion } from "framer-motion";
import blogs from "@/lib/blogs.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);
    if (!blog) {
        return { title: "Blog Not Found" };
    }

    const firstBlockText = blog.blocks[0].replace(/<[^>]+>/g, '');
    const description = firstBlockText.split(' ').slice(0, 25).join(' ') + '...';

    return {
        title: blog.heading,
        description: description,
        keywords: blog.heading.split(' ').map(w => w.toLowerCase()).filter(w => w.length > 3),
        openGraph: {
            title: blog.heading,
            description: description,
            type: "article",
            publishedTime: blog.date,
            authors: ["Henry Bassey"],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.heading,
            description: description,
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <div className="w-full  min-h-[70vh] px-[6vw]  lg:px-[10vw] pt-32 pb-32">
            <div
                // initial={{ opacity: 0, y: 15 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl flex flex-col space-y-10 mx-auto w-full"
            >
                <Link href="/blog" className="text-gray-400 flex items-center-safe gap-4 border w-fit px-5 py-1 hover:text-white"><ArrowLeft className="w-6 h-6" /> Back</Link>

                <div className="">

                    <h1 className="text-4xl md:text-5xl font-playfair text-white  tracking-tight leading-tight">
                        {blog.heading}
                    </h1>
                    <span className="text-sm mt-4 font-dmsans text-gray-500 uppercase tracking-widest">{blog.date}</span>
                </div>

                <div className="flex flex-col gap-8">
                    {blog.blocks.map((block, index) => (
                        <div
                            key={index}
                            className="font-dmsans font-light text-lg leading-[1.8] text-[#d4d3ce]"
                            dangerouslySetInnerHTML={{ __html: block }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
