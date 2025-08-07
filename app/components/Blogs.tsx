"use client";

import Image from "next/image";
import paint from "@/public/paint.svg";
import React, { useState, useEffect } from "react";
import { LoaderOne } from "@/components/ui/loader";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Blogs = () => {
  type Blog = {
    author: string;
    category: string;
    created: string;
    desc: string;
    likes: number;
    pid: string;
    title: string;
    views: number;
  };

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [errors, setErrors] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch("/api/blogs");

        if (!res.ok) {
          setErrors("Failed to load blogs");
          return;
        }

        let data = await res.json();
        setLoading(false);
        data = data.results.slice(-4);
        setBlogs(data as Blog[]);
      } catch (error) {
        console.error("❌ Error fetching blogs:", error);
        setLoading(false);
        setErrors("An unexpected error occurred");
      }
    }

    getBlogs();
  }, []);

  function slugify(title: string): string {
    return title
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  return (
    <section className="p-5 my-16 items-center gap-6 space-y-16">
      <section className="relative col-span-2 text-center text-white uppercase font-bold text-3xl py-2">
        <Image
          src={paint}
          alt="paint spill background"
          width={200}
          height={200}
          className="absolute inset-0 w-full h-full scale-[2.6] z-0"
        />
        <h1 className="relative z-10 text-black">Blogs</h1>
      </section>

      <div className="col-span-3">
        {loading && (
          <div className="mx-auto w-fit">
            <LoaderOne />
          </div>
        )}
        {blogs.length > 0 ? (
          <div className="grid py-4 px-4 gap-4 text-white ">
            {blogs.map((blog, idx) => (
              <a
                key={idx}
                href={`https://quilled-5su6.onrender.com/read/${slugify(
                  blog.title
                )}`}
                target="blank"
                className="border border-gray-700 p-4 hover:scale-105 shadow hover:shadow-md transition duration-300 rounded-xl"
              >
                <h1
                  style={{ fontFamily: "'Permanent Marker', cursive" }}
                  className="text-lg mb-2"
                >
                  {blog.title}
                </h1>
                <p
                  className="text-sm opacity-80 mb-1 line-clamp-1 font-semibold"
                  dangerouslySetInnerHTML={{ __html: blog.desc }}
                ></p>
                <span className="text-xs font-mono opacity-60">
                  {blog.created}
                </span>
              </a>
            ))}
            <Link
          href="https://quilled-5su6.onrender.com"
          target="_blank"
          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg cursor-pointer group justify-center"
        >
          More on Quilled
          <ArrowRight className="-rotate-45 bg-black rounded-full stroke-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-0" />
        </Link>
          </div>
        ) : (
          <p className=" p-4 mx-auto w-fit">{errors}</p>
        )}
      </div>
    </section>
  );
};

export default Blogs;
