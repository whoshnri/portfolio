"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import About from './components/About';
import { TbExternalLink } from 'react-icons/tb';
import { ArrowLeftRightIcon, ArrowLeftSquare, ArrowRight, ArrowRightSquareIcon } from 'lucide-react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-full flex flex-col justify-center min-h-screen px-[6vw] lg:px-[10vw] pt-[20vh] lg:pt-[30vh]"
    >
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-playfair text-white mb-2 tracking-tight">
          Henry Bassey
        </h1>
        <a
          href="https://www.qlabs.space"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl md:text-2xl font-playfair text-[#d4d3ce] hover:text-white transition-colors mb-8 flex gap-2 items-center-safe decoration-1 underline underline-offset-8"
        >
          Founder, Quill Labs <TbExternalLink className='' />
        </a>

        <p className="text-lg md:text-xl font-dmsans text-[#d4d3ce] font-light leading-[1.75] mb-12 max-w-lg">
          Building software from Lagos. Writing about it on the internet.
        </p>

        <div className="flex gap-6 font-dmsans text-sm uppercase tracking-widest text-[#d4d3ce]">
          <SiteNewink text="Read the Blog" href="/blog" />
          <SiteNewink text="Watch Videos" href="/videos" />
        </div>
      </div>
      <About />
    </motion.div>
  );
}



function SiteNewink({text, href}: {text: string, href: string}) {
  return (
    <Link
      href={href}
      className="w-fit overflow-hidden  flex items-center group gap-2 border border-[#d4d3ce]/30 hover:border-[#d4d3ce] p-2 transition-colors"
    >
      {text}
      <ArrowRight className='stroke-1 border -translate-x-100 w-0 h-0 group-hover:w-5 group-hover:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 ease-in-out duration-300' />
    </Link>
  )
}