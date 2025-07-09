"use client"

import logo from '../../public/brand.png';
import Image from 'next/image';
import Link from 'next/link';
import {
  Linkedin,
  Twitter,
  Download,
  Coffee,
  ExternalLink,
  Github
} from "lucide-react";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, CheckCircle, X } from 'lucide-react';

const CasualPortfolio = () => {
  const [showMemeModal, setShowMemeModal] = useState(false);
  const [currentMeme, setCurrentMeme] = useState<meme>();
  const [showPicModal, setShowPicModal] = useState(false);
  const [currentPic, setCurrentPic] = useState<photo>();


type blist  = {
  id:number,
  text:string,
  completed:boolean
}
  const bucketList:blist[] = [
    { id: 1, text: "Build a startup that matters", completed: false },
    { id: 2, text: "Speak at a tech conference", completed: false },
    { id: 3, text: "Travel to KOREA", completed: false },
    { id: 5, text: "Attend an opera", completed: false },
    { id: 6, text: "Go on one of those 0 gravity planes", completed: false }
  ]

type photo ={
  id:number,
  caption:string,
  url:string
}
  const photos:photo[] = [
    { id: 1, url: "/thumbnail.png", caption: "Thumbnail" },
    { id: 2, url: "/vouge.jpg", caption: "Filtered pic of me" },
    { id: 3, url: "/uhmm.png", caption: "uhmm" },
    { id: 4, url: "/lol1.jpg", caption: "Laugh at this" },
    { id: 5, url: "/hehe.jpg", caption: "Woke up jiggy" },
    { id: 6, url: "/face.png", caption: "My face from an angle" },
    { id: 7, url: "/lol2.jpg", caption: "A funny pic i have" },
    { id: 8, url: "/team.png", caption: "My EAFC team" },
    { id: 9, url: "/lol3.jpg", caption: "Thats me lol" },
    { id: 10, url: "/end.jpeg", caption: "Thats all lol" },
  ];


type meme = {
  id:number,
  caption:string,
  url:string
}

  const memes:meme[] = [
    { id: 1, url: "https://global.discourse-cdn.com/codecademy/original/5X/3/c/8/5/3c85feecb4eb52a4d69ef0891cfbc495a1da7174.png", caption: "When your code works on the first try" },
    { id: 2, url: "https://i.pinimg.com/736x/25/60/3e/25603e84e47f26a83d518030412c8b37.jpg", caption: "Unhinged lol" },
    { id: 3, url: "https://i.pinimg.com/736x/d7/eb/93/d7eb936a6df7bb401eb865b0627f61e1.jpg", caption: "I can't seem to understand" },
    { id: 4, url: "https://i.pinimg.com/736x/ee/98/95/ee9895bf109863f1b97ab86c372b6c3c.jpg", caption: "Chimera?" },
    { id: 5, url: "https://i.pinimg.com/736x/cd/c2/66/cdc2668e02f4ea575d05294a58e2ef20.jpg", caption: "Lmao" },
    { id: 6, url: "https://i.pinimg.com/736x/ae/f1/c4/aef1c46ff9b39e96e0ba50e71a8de2d7.jpg", caption: "Yeah I have learned my lesson" },
    { id: 7, url: "https://i.pinimg.com/736x/7d/9e/67/7d9e67daf1053d59dd5cd6cc66377516.jpg", caption: "Getting shivers just thinking about item" },
    { id: 8, url: "https://i.pinimg.com/736x/c8/8e/89/c88e89441974c21ab2730047f96c30d0.jpg", caption: "Get it?" },
    { id: 9, url: "https://i.pinimg.com/736x/89/40/18/89401895a6dea6456dd00e801466650f.jpg", caption: "It keeps blowing up in your face for some reason" },
    { id: 10, url: "https://i.pinimg.com/736x/d6/63/69/d663699d29356d9cd7161b17a0832de6.jpg", caption: "Bro be hiding" },
    { id: 11, url: "https://i.pinimg.com/736x/bd/60/7d/bd607d397c4fb16e49946f279c4cc351.jpg", caption: "pwd" },
    { id: 12, url: "https://i.pinimg.com/736x/bb/1b/2a/bb1b2ae2cc8b0a04642ff21ffce7fc56.jpg", caption: "Brrrruhhh" },
  ];

type Blog = {
  author:string,
  category:string,
  created:string,
  desc:string,
  likes:number,
  pid:string,
  title:string,
  views:number,
}

   const [dark, setDark] = useState(false)
    const [blogs , setBlogs] = useState<Blog[]>([])
    const [errors, setErrors] = useState<string>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
  async function getBlogs() {
    try {
      const res = await fetch("/api/blogs");

      if (!res.ok) {
        setErrors("Failed to load blogs");
        return;
      }

      const data = await res.json();
      setLoading(false)
      setBlogs(data.results as Blog[]); // Access the correct field
    } catch (error) {
      console.error("❌ Error fetching blogs:", error);
      setLoading(false)
      setErrors("An unexpected error occurred");
    }

  }

  getBlogs();
}, []);




function slugify(title: string): string {
  return title
    .replace(/[\u0300-\u036f]/g, "")    // Remove accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}


  const openMeme = (meme:meme) => {
    setCurrentMeme(meme);
    setShowMemeModal(true);
  };

  const openPic = (pic:photo) => {
    setCurrentPic(pic);
    setShowPicModal(true);
  };


  return (
    <div className={`${dark && 'dark'} relative port-text port-bg relative w-full p-3 `}>

        <div className="w-full max-w-6xl mx-auto border-2">
          <div className="bg-black mx-auto border-b-2">
            <Image src={logo} alt="logo" width={110} height={110} className="mx-auto "/>
          </div>

      {/* Header */}
      <div className="border-b port-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-serif font-bold port-text mb-4">
            The Casual Side of Henry
          </h1>
          <p className="text-lg port-text opacity-80 max-w-2xl">
            Beyond the code - memes, music, and everything in between. Welcome to my digital playground where personality meets professionalism.
          </p>
        </div>
      </div>

       <section className="border-b-2 opp-port-border">
        <h2 className="w-full text-center opp-port-text font-bold text-lg py-2 opp-port-bg">
          My quills &amp; writing on Quilled
        </h2>
            {loading && <div className="w-12 h-12 border-t-2 border-b-2 opp-port-border rounded-full  mx-auto mt-5 animate-spin"/>}
          {blogs.length > 0 ?
            <div className="grid sm:grid-cols-2 py-4 md:grid-cols-3 px-4 gap-4">
            {blogs.map((blog, idx) => (
            <a
              key={idx}
              href={`https://quilled-5su6.onrender.com/read/${slugify(blog.title)}`}
              target="blank"
              className="border p-4 hover:scale-105 shadow hover:shadow-md transition duration-300 "
            >
              <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
              <p className="text-sm opacity-80 mb-4 line-clamp-3 font-semibold" dangerouslySetInnerHTML={{ __html: blog.desc}}></p>
              <span className="text-xs font-mono opacity-60">{blog.created}</span>
            </a>
          ))}</div> :
            <p className=" p-4 mx-auto w-fit">{errors}</p>
          }
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* Photo Album */}
          <div className="border opp-port-border  p-8">
            <h2 className="w-full text-center opp-port-text font-bold text-base py-2 mb-3 opp-port-bg">
          📸 Photo Album</h2>
          <p className="w-full text-center port-text text-xs py-2 mb-3 ">Click any photo to Expand</p>
            <div className="flex overflow-x-auto gap-4 pb-4">
              {photos.map((photo) => (
                <div
                  onClick={() => openPic(photo)}
                 key={photo.id} className="border p-3 hover:scale-95 duration-300 ease-in-out cursor-pointer flex-shrink-0 w-72">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    onClick={() => openPic(photo)}
                    className="w-full h-48 object-cover mb-3"
                  />
                  <p className="text-sm port-text text-center">{photo.caption}</p>
                </div>
              ))}
            </div>

        <p className="text-xs w-fit mx-auto pt-2 opacity-60">{"<--- swipe ----->"}</p>
          </div>

          <div className="border port-text p-8">
            <h2 className="w-full text-center opp-port-text font-bold text-base py-2 mb-3 opp-port-bg">Best Track</h2>
           <iframe
            style={{ borderRadius: '15px' }}
            className="h-88 w-full"
            src="https://open.spotify.com/embed/track/6zeeWid2sgw4lap2jV61PZ?utm_source=generator"  frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

          {/* Memes */}
          <div className="border opp-port-border p-8">
            <h2 className="w-full text-center opp-port-text font-bold text-base py-2 mb-3 opp-port-bg">😂Dev Meme Collection</h2>
            <p className="w-full text-center port-text text-xs py-2 mb-3 ">Click any meme to Expand</p>
            <div className="grid h-64 overflow-y-auto grid-cols-1 sm:grid-cols-2 gap-4">
              {memes.map((meme) => (
                <div
                  key={meme.id}
                  className="border opp-port-border p-4 cursor-pointer hover:scale-95 transition-all"
                  onClick={() => openMeme(meme)}
                >
                  <img
                    src={meme.url}
                    alt={meme.caption}
                    className="w-full h-48  object-cover rounded mb-3"
                  />
                  <p className="text-xs port-text opacity-60 text-center leading-relaxed">{meme.caption}</p>
                </div>
              ))}
            </div>
          </div>



          {/* Anonymous Messages */}
          <div className="border opp-port-border  p-8">
            <h2 className="w-full text-center opp-port-text font-bold text-base py-2 mb-3 opp-port-bg">💬 Send Me a Message</h2>
            <div className="text-center space-y-4">
              <p className="port-border port-text opacity-80 leading-relaxed">
                Got something to say? Send me an anonymous message.
              </p>
              <button
                onClick={() => window.open('https://app-anonx.vercel.app/play/whoshnri/message-me-from-portfolio', '_blank')}
                className="inline-flex items-center gap-2 opp-port-bg text-white px-6 py-2 hover:scale-105 cursor-pointer duration-300 ease-in-out  opp-port-text transition-all"
              >
                <MessageCircle size={20} />
                Open AnonX
                <ExternalLink size={16} />
              </button>
                <p className="text-[12px]">Made by me</p>

            </div>
          </div>
        </div>

        {/* Bucket List - Full Width */}
        <div className="border opp-port-border p-8">
          <h2 className="w-full text-center opp-port-text font-bold text-base py-2 mb-3 opp-port-bg">🪣 Bucket List</h2>
          <div className="space-y-3">
            {bucketList.map((item:blist) => (
              <div key={item.id} className="flex items-center gap-4 p-4 border-b opp-port-border last:border-b-0">
                <button
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    item.completed
                      ? 'port-text opp-port-border'
                      : 'port-text opp-port-border'
                  }`}
                >
                  {item.completed && <CheckCircle size={16} />}
                </button>
                <span className={`flex-1 text-xs sm:text-lg port-text ${item.completed ? 'line-through ' : ''}`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meme Modal */}
      <AnimatePresence>
      {showMemeModal && currentMeme && (
        <motion.div
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: "spring", duration : 0.5}}
            className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="port-bg port-border border max-w-2xl max-h-[80vh] overflow-auto">
            <div className="p-6">
              <div className="justify-between items-end sticky top-4 left-4 rounded-full port-bg w-fit">
                <button
                  onClick={() => setShowMemeModal(false)}
                  className="text-gray-500 cursor-pointer hover:text-gray-700 p-2 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <img
                src={currentMeme.url}
                alt={currentMeme.caption}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>



      <AnimatePresence>
      {showPicModal && currentPic && (
        <motion.div
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: "spring", duration : 0.5}}
            className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="port-bg port-border border max-w-2xl max-h-[80vh] overflow-auto">
            <div className="p-6">
              <div className="justify-between items-end sticky top-4 left-4 rounded-full port-bg w-fit">
                <button
                  onClick={() => setShowPicModal(false)}
                  className="text-gray-500 cursor-pointer hover:text-gray-700 p-2 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <img
                src={currentPic.url}
                alt={currentPic.caption}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>



      <footer className="border-t-2 port-border w-full bg-black text-white text-center font-bold text-xl py-6 mt-5">
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto px-4 gap-4">
            <p className="stroke-white text-base">
              &copy; 2025 Henry Bassey. All rights reserved.
            </p>

            <div className="flex gap-3">
            <label className="swap swap-rotate border  px-4 py-2">
              {/* this hidden checkbox controls the state */}
              <input
                onClick={() => setDark(!dark)}
               type="checkbox" />
              <svg
                className="swap-on h-6 w-6 stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg
                className="swap-off h-6 w-6 stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            <Link
                href="/"
                className="flex items-center gap-2 border border-current px-4 py-2 hover:scale-105 transition duration-200 text-sm font-sans"
              >
                Home
              </Link>
              </div>

            <div className="flex gap-4 items-center">
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-2 border border-current px-4 py-2 hover:scale-105 transition duration-200 text-sm font-sans"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>

              <a
                href="https://github.com/whoshnri"
                target="_blank"
                rel="noopener noreferrer"
                className="dropdown dropdown-hover hover:scale-110 transition"
              >
                <Github className="w-5 h-5 stroke-white" />
                <p className="dropdown-content text-black text-xs px-1 bg-white">GitHub</p>
              </a>

              <a
                href="https://linkedin.com/in/whoshnri"
                target="_blank"
                rel="noopener noreferrer"
                className="dropdown dropdown-hover hover:scale-110 transition"
              >
                <Linkedin className="w-5 h-5 stroke-white" />
                <p className="dropdown-content text-black text-xs px-1 bg-white">LinkedIn</p>

              </a>

              <a
                href="https://x.com/xyz_07hb"
                target="_blank"
                rel="noopener noreferrer"
                className="dropdown dropdown-bottom dropdown-hover hover:scale-110 transition"
              >
                <Twitter className="w-5 h-5 stroke-white" />
                <p className="dropdown-content text-black text-xs px-1 bg-white">Twitter</p>
              </a>

              <a
                href="https://www.buymeacoffee.com/whoshnri/my-workspace-upgrade-savings"
                target="_blank"
                rel="noopener noreferrer"
                className="dropdown dropdown-bottom dropdown-hover hover:scale-110 transition"
              >
                <Coffee className="w-5 h-5" />
                <p className="dropdown-content text-black text-xs px-1 bg-white">Donate</p>
              </a>
            </div>

          </div>
        </footer>
        </div>
    </div>
  );
};

export default CasualPortfolio;
