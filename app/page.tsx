"use client"

import {useState, useEffect} from "react"
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import type { StaticImageData } from 'next/image'
import logo from '../public/brand.png';
import GitHubCalendar from 'react-github-calendar';
import {
  Linkedin,
  Twitter,
  MapPin,
  BookOpen,
  Download,
  FileCode2,
  Terminal,
  Code2,
  LayoutDashboard,
  Paintbrush,
  GraduationCap,
  Braces,
  Server,
  CloudCog,
  ShieldCheck,
  Database,
  GitBranch,
  Bot,
  Sun,
  ExternalLink,
  Github
} from "lucide-react";
import qlogo from "../public/quilled.png"
import clogo from "../public/craelo.png"
import alogo from "../public/anonx.png"


type Projj  = {
  name: string;
  github: string;
  live: string;
  stack: string[];
  desc: string;
  image: string | StaticImageData;
  done:boolean;

}


const Projects:Projj[] = [
  {
    name: "Quilled Blog App",
    stack: ["React", "Tiptap", "Tailwind CSS", "Flask", "PostgreSQL", "JWT"],
    desc: "A sleek full-stack blog platform with rich text editing, user auth, analytics, and admin tools. Built with Flask backend and a custom Tiptap editor in React.",
    image: qlogo,
    github: "https://github.com/whoshnri/quilled",
    live: "https://quilled-5su6.onrender.com/",
    done:true

  },
  {
    name: "Craelo Handmade Store",
    stack: ["React", "Tailwind CSS", "Next.js", "Stripe", "Firebase"],
    desc: "A modern eCommerce platform for showcasing and selling handmade products with cart, order automation, and payment integration.",
    image: clogo,
    github: "https://github.com/whoshnri/craelo",
    live: "https://app-craelo.vercel.app/",
    done:false
  },
  {
    name: "AnonX (Message Terminal)",
    stack: ["Next.js", "React", "Tailwind CSS", "Neon PostgreSQL", "NodeJS"],
    desc: "A terminal-style anonymous messaging platform with sharable links, archive viewer, popup modals, and random prompt generator.",
    image: alogo,
    github: "https://github.com/whoshnri/anonx",
    live: "http://app-anonx.vercel.app/",
    done:true
  }
];


const Blogs = [
  {
    title: "The Life and Times of Specimen H007B: A Weird-life Documentary",
    desc: "*As narrated by the specimen himself, in the tradition of those who document the peculiar behaviors of Earth's most fascinating creatures\nChapter 1: The Specimen's Peculiar Feeding Habits and Interests",
    date: "24 Jun 2025",
    link: "https://quilled-5su6.onrender.com/read/the-life-and-times-of-specimen-h007b-a-weird-life-documentary"
  },
  {
    title: "How Introversion Helped Me: A Personal Journey.",
    desc: "For years, I viewed my introverted nature as something to overcome rather than embrace. Society often portrays introversion as a limitation—a barrier to success and connection. But through my personal journey, I've discovered that introversion isn't a weakness to fix; it's a superpower that has fundamentally shaped who I am and how I achieve my goals.",
    date: "21 Jun 2025",
    link: "https://quilled-5su6.onrender.com/read/why-introversion-helped-me-a-personal-journey"
  },
  {
    title: "The Tech Seminar that Rewrote My Understanding of User Experience",
    desc: "I walked into that conference room on a Tuesday morning expecting another routine tech seminar—the kind where you learn a few new frameworks, jot down some best practices, and call it professional development. What I didn't expect was to have my entire understanding of user experience fundamentally challenged and rebuilt from the ground up.",
    date: "19 Jun 2025",
    link: "https://quilled-5su6.onrender.com/read/the-tech-seminar-that-rewrote-my-understanding-of-user-experience"
  },
  {
    title: "From Zero To A lot More than Zero - my progress so far",
    desc: "What’s good, everyone! I’m Henry Bassey, and yes, I call myself “The Big Boss” — because I built this entire site from scratch. Pretty cool, right? But trust me, it wasn’t always smooth sailing. This blog you're reading sits on top of my first major coding project — a Flask backend with a React frontend — and oh boy, do I have stories to tell.",
    date: "19 Jun 2025",
    link: "https://quilled-5su6.onrender.com/read/from-zero-to-a-lot-more-than-zero-my-progress-so-far"
  }
]


export default function Header() {
  const [activeProject, setProject] = useState<Project | undefined>(undefined);
  const [modal, setModal] = useState(false);
  const [dark, setDark] = useState(false)


  return (
    <div className={`${dark && 'dark'} relative port-text port-bg relative w-full p-3 `}>

    <div className="w-full max-w-6xl mx-auto border-2">
      <div className="bg-black mx-auto border-b-2">
        <Image src={logo} alt="logo" width={100} height={100} className="mx-auto "/>
      </div>

    {/*flexed portion*/}
      <div className="grid lg:flex border-b-2 ">
      <div className="lg:w-[58%] md:h-full">
    {/*header*/}
        <h1 className="text-5xl py-4 w-full border-b-2 w-full px-4">
          Full-Stack Web developer &amp; Student of Computer Science
        </h1>

      {/*meta data*/}
        <div className="flex font-medium">
            <div className="items-center w-[25%] text-xs font-sans">
              <span className="mx-auto w-fit flex py-3 px-1  gap-1">
                  <MapPin className="w-5 h-5 stroke-green-600"/>
                <span className="text-sm">Lagos, NG</span>

              </span>
              </div>
            <div className="items-center w-[30%] text-xs font-sans border-l-2 ">
              <span className="mx-auto w-fit flex py-3 px-1 gap-1">
              <span className="text-sm">Henry Bassey</span>
              </span>
            </div>
            <div className="items-center text-xs font-sans border-l-2  w-[50%] ">
              <span className="w-fit mx-auto flex py-3 px-1 gap-1">

              <BookOpen className="w-5 h-5 stroke-blue-600"/>
              <span className="text-sm">Yaba College of Technology</span>
              </span>
           </div>
        </div>
        <div
        className="py-2 opp-port-bg border-2 border-b-transparent mt-[-.13rem] cursor-pointer hover:opacity-90 duration-300 ease-in-out">
              <a
                href="/resume.pdf"
                target="_blank"
                className="opp-port-text flex items-center w-fit mx-auto gap-2 text-sm font-sans"
                >
                 <Download className="w-5 h-5" />
                   Download CV

                </a>

        </div>
        <section id="intro" className="text-craft px-4 pt-4 border-b-2 md:border-b-0 font-mono">
        <h2 className="text-3xl md:text-4xl mb-4">Hi👋🏿, I&apos;m Henry Bassey</h2>
        <p className="text-sm font-sans lg:text-base font-semibold leading-relaxed opacity-80 pb-4 lg:pb-0">
          I&apos;m a Full-Stack Web Developer and a Computer Science student with a passion for clean code, intuitive user interfaces, and building tools that make real impact. Whether it&apos;s crafting beautiful frontends in React or architecting scalable APIs, I love turning ideas into working software. I&apos;m currently in my final year of my time at YCT, studying for my ND in computer science. I love contributing to open source projects that I understand, and building modern web applications for myself and client.
        </p>
      </section>
      </div>

      <div className="lg:w-[42%] md:h-full">
          <section
            id="skills"
            className="
              pt-6
              font-mono
              lg:border-l-2
            "
          >
            <h2 className="px-4  text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
              🧠 <span>Skills &amp; Technologies</span>
            </h2>

            <div className="grid sm:grid-cols-2 text-sm">
           <div className="border-t-2 sm:border-r-2  p-4">
        <h3 className="flex items-center gap-2 text-base font-semibold mb-2 ">
          <FileCode2 className="w-4 h-4" />
          Languages
        </h3>
        <ul className="space-y-1">
          <li className="flex items-center gap-2">
            <FileCode2 className="w-4 h-4 text-green-400" />
            JavaScript (ES6+)
          </li>
          <li className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-blue-400" />
            Python
          </li>
          <li className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-cyan-400" />
            TypeScript
          </li>
        </ul>
      </div>

      {/* Frontend */}
      <div className="border-t-2 p-4">
        <h3 className="flex items-center gap-2 text-base font-semibold mb-2 ">
          <LayoutDashboard className="w-4 h-4" />
          Frontend
        </h3>
        <ul className="space-y-1">
          <li className="flex items-center gap-2">
            <LayoutDashboard className="w-4 h-4 text-blue-300" />
            React.js
          </li>
          <li className="flex items-center gap-2">
            <Braces className="w-4 h-4 text-gray-300" />
            Next.js
          </li>
          <li className="flex items-center gap-2">
            <Paintbrush className="w-4 h-4 text-teal-400" />
            Tailwind CSS
          </li>
          <li className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-yellow-400" />
            Daisy UI
          </li>
        </ul>
      </div>

      {/* Backend */}
      <div className="border-t-2 sm:border-r-2 p-4">
        <h3 className="flex items-center gap-2 text-base font-semibold mb-2 ">
          <Server className="w-4 h-4" />
          Backend
        </h3>
        <ul className="space-y-1">
          <li className="flex items-center gap-2">
            <Server className="w-4 h-4 text-indigo-400" />
            NodeJS
          </li>
          <li className="flex items-center gap-2">
            <CloudCog className="w-4 h-4 text-orange-400" />
            Flask
          </li>
          <li className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-red-400" />
            Node JS
          </li>
        </ul>
      </div>

      {/* Databases */}
      <div className="border-t-2  p-4">
        <h3 className="flex items-center gap-2 text-base font-semibold mb-2 ">
          <Database className="w-4 h-4" />
          Databases
        </h3>
        <ul className="space-y-1">
          <li className="flex items-center gap-2">
            <Database className="w-4 h-4 text-blue-500" />
            PostgreSQL (Neon)
          </li>
          <li className="flex items-center gap-2">
            <Database className="w-4 h-4 text-gray-400" />
            SQLite
          </li>
        </ul>
      </div>

      {/* Tools & Platforms */}
      <div className="border-t-2 sm:border-r-2 p-4">
        <h3 className="flex items-center gap-2 text-base font-semibold mb-2 ">
          <GitBranch className="w-4 h-4" />
          Tools &amp; Platforms
        </h3>
        <ul className="space-y-1">
          <li className="flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-green-600" />
            Git &amp; GitHub
          </li>
          <li className="flex items-center gap-2">
            <CloudCog className="w-4 h-4 text-black" />
            Vercel
          </li>
          <li className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-gray-500" />
            Linux CLI
          </li>
        </ul>
      </div>

      {/* Currently Learning */}
      <div className="border-t-2 p-4">
        <h3 className="flex items-center gap-2 text-base font-semibold mb-2 ">
          <GraduationCap className="w-5 h-5" />
          Currently Learning
        </h3>
        <ul className="space-y-1">
          <li className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-blue-400" />
            Advanced Python
          </li>
          <li className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-purple-500" />
            AI &amp; ML Fundamentals
          </li>
          <li className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-purple-500" />
            Computer Science
          </li>
        </ul>
      </div>
            </div>

            </section>


      </div>

    </div>


    {/*projects*/}
    <section className="">
        <h2 className="w-full text-center opp-port-text font-bold text-xl py-2 opp-port-bg">My Work</h2>
        <div className="grid sm:grid-cols-2 py-4 md:grid-cols-3 px-4 gap-2">
      {Projects.map((proj:Project, idx:number) => (
        <ProjectCard
          key={idx}
          project={proj}
          modal={modal}
          activeProject={activeProject}
          setProject={setProject}
          setModal={setModal}
        />
      ))}
        </div>
          <AnimatePresence>
            {modal && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  exit={{ opacity: 0 }}
                  className="bg-diagonal-lines cursor-pointer fixed inset-0 bg-black z-40"
                  onClick={() => {
                    setModal(false)
                    setProject(undefined)
                  }}
                />
                <motion.div
                  initial={{ scale: 0.9, y: 50, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.9, y: 50, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="fixed top-1/2 left-1/2 z-50 px-8 w-full max-w-xl md:max-w-5xl -translate-x-1/2 -translate-y-1/2"
                >
                  <CardModal project={activeProject} />
                </motion.div>
              </>
            )}
          </AnimatePresence>

    </section>

    <section className="">
        <h2 className="w-full text-center opp-port-text font-bold text-xl py-2 opp-port-bg">
          My quills &amp; writing on Quilled
        </h2>
        <div className="grid sm:grid-cols-2 py-4 md:grid-cols-3 px-4 gap-4">
          {Blogs.map((blog, idx) => (
            <a
              key={idx}
              href={blog.link}
              target="blank"
              className="border p-4 hover:scale-105 shadow hover:shadow-md transition duration-300 "
            >
              <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
              <p className="text-sm opacity-80 mb-4 line-clamp-3 font-semibold">{blog.desc}</p>
              <span className="text-xs font-mono opacity-60">{blog.date}</span>
            </a>
          ))}
        </div>
      </section>


     <section className="">
        <h2 className="w-full text-center opp-port-text font-bold text-xl py-2 opp-port-bg">
          My coding contributions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 py-4 px-4 gap-4">
          <GitHubActivity/>
          <LeetCodeStats username={"whoshnri"}/>
        </div>
        <h2 className="text-center opp-port-text font-bold text-xs py-1 opp-port-bg w-fit px-6 mx-auto">
          These aren&apos;t so impressive tbh 😭
        </h2>

     </section>

     <section className="mt-10 port-bg">
        <h2 className="w-full text-center opp-port-text font-bold text-xl py-2 opp-port-bg">
          My fav playlists on Spotify
        </h2>
        <div
        style={{
            overflowY: 'scroll',
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE 10+
          }}
         className="p-4 gap-5 w-full overflow-x-auto flex port-bg">
        <iframe
            style={{ borderRadius: '15px' }}
            title="Spotify Embed: Recommendation Playlist "
            src={`https://open.spotify.com/embed/playlist/4U3X6USTiAFHXfqB5TAzpx?utm_source=generator&theme=0`}
            className="w-full h-88"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={{ borderRadius: '15px' }}
            title="Spotify Embed: Recommendation Playlist "
            src={`https://open.spotify.com/embed/playlist/046gNgcZND0993EN46J0xF?utm_source=generator&theme=0`}
            className="w-full h-88"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={{ borderRadius: '15px' }}
            title="Spotify Embed: Recommendation Playlist "
            src={`https://open.spotify.com/embed/playlist/7yknJRT7MuxekMnXBq5bif?utm_source=generator&theme=0`}
            className="w-full h-88"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <iframe
            style={{ borderRadius: '15px' }}
            title="Spotify Embed: Recommendation Playlist "
            src={`https://open.spotify.com/embed/playlist/3e8Q4TsJbA5mfWvvIDSf2x?utm_source=generator&theme=0`}
            className="w-full h-88"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
         <h2 className="text-center opp-port-text font-bold text-xs py-1 opp-port-bg w-fit px-6 mx-auto">
          90% chance I am listening RN.
        </h2>
    </section>

     <footer className="border-t-2 port-border w-full bg-black text-white text-center font-bold text-xl py-6 mt-5">
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto px-4 gap-4">
            <p className="stroke-white text-base">
              &copy; 2025 Henry Bassey. All rights reserved.
            </p>

            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />
              <svg
                onClick={() => setDark(true)}
                className="swap-on h-6 w-6 stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg
                onClick={() => setDark(false)}
                className="swap-off h-6 w-6 stroke-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            <div className="flex gap-4 items-center">
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-2 border border-current px-4 py-2 rounded hover:scale-105 transition duration-200 text-sm font-sans"
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

              {/*<a
                href="https://www.upwork.com/freelancers/"
                target="_blank"
                rel="noopener noreferrer"
                className="dropdown dropdown-bottom dropdown-hover hover:scale-110 transition"
              >
                <Briefcase className="w-5 h-5 stroke-white" />
                <p className="dropdown-content text-black text-xs px-1 bg-white">Upwork</p>
              </a>*/}
            </div>
          </div>
        </footer>



    </div>

    </div>

  );
}

const GitHubActivity = () => {
  return (
    <section className="border">
      <div className="space-y-2 p-6">
      <h2 className="text-center opp-port-text font-bold text-xl opp-port-bg">
        GitHub
      </h2>
      <div className="flex justify-center overflow-hidden w-full font-sans">
        <GitHubCalendar
          username="whoshnri"
          colorScheme="light"
          blockSize={12}
          blockMargin={4}
          fontSize={14}
        />
      </div>
      </div>
    </section>
  );
};

interface Project {
  name: string;
  github: string;
  live: string;
  stack: string[];
  desc: string;
  image?: string | StaticImageData;
  done:boolean;

}

const ProjectCard = ({
  activeProject,
  project,
  setProject,
  setModal,
  modal
}: {
  project: Project;
  activeProject?: Project;
  setProject: (project: Project) => void;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
}) => {


  return (
    <div
      className={`border overflow-hidden p-4  relative shadow-md font-mono transition-opacity duration-300 ${
        modal && project?.name === project.name ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      >
      <div className="relative w-full h-48 overflow-hidden">
        {
          <Image
          src={project.image!}
          alt={`${project.name} preview`}
          fill
          className="object-cover"
        />}
      </div>

      <div className="space-y-2">
      {!project?.done && <p className=" text-xs uppercase text-white px-2 py-[1px] bg-red-500 w-fit mt-2">! still building</p>}
        <h3 className="text-xl font-semibold opp-port-text">{project.name}</h3>

        <p onClick={()=>{
          setProject(project)
          setModal(true)
        }}
        className="text-sm font-semibold opacity-80 line-clamp-2 cursor-pointer hover:underline">{project.desc}</p>

        <ul className="flex flex-wrap gap-2 mt-2 text-xs">
          {project.stack.map((tech, i) => (
            <li
              key={i}
              className="border px-2 py-1 "
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-sans hover:underline"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-sans hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            Live Site
          </a>
        </div>
      </div>
      {(project == activeProject  ) &&
        (
          <AnimatePresence>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          className="transition ease-in-out absolute inset-0 bg-black/40"
          />
          </AnimatePresence>
          )
      }
    </div>
  );
};

const CardModal = ({ project }: { project: Project | undefined }) => {
  return (
    <div className="z-20">
    <div className="border port-bg p-4 overflow-hidden shadow-md font-mono">
      <div className="relative w-full h-48 rounded-xl overflow-hidden">
        {project?.image && (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold opp-port-text">{project?.name}</h3>

        <p className="text-sm font-semibold opacity-80">{project?.desc}</p>

        <ul className="flex flex-wrap gap-2 mt-2 text-xs">
          {project?.stack.map((tech, i) => (
            <li
              key={i}
              className="border px-2 py-1 "
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 mt-4">
          <a
            href={project?.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-sans hover:underline"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          <a
            href={project?.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-sans hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            Live Site
          </a>
        </div>
      </div>
    </div>
    </div>

  );
};

type LeetCodeData = {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  streak: number;
  ranking: number;
}


function LeetCodeStats({ username }: { username: string }) {
  const [data, setData] = useState<LeetCodeData | null>(null);


  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${'xyz07hb'}`)
      .then((res:Response) => res.json())
      .then(setData)
      .catch(console.error);
  }, [username]);

  if (!data) return  <div className="w-full h-full"><p className="mt-[50%] -translate-y-[50%] mx-auto w-10 h-10 opp-port-border border-b-2 border-t-2 animate-spin rounded-full"></p></div>

  return (
    <section className="border">
      <div className="space-y-2 p-6">
      <h2 className="text-center opp-port-text font-bold text-xl opp-port-bg">
        LeetCode
      </h2>
       <ul className="space-y-2 text-sm">
          <li className="flex justify-between">
            <span>Total Solved:</span>
            <span className="font-medium">{data.totalSolved}</span>
          </li>
          <li className="flex justify-between">
            <span>Easy:</span>
            <span>{data.easySolved}</span>
          </li>
          <li className="flex justify-between">
            <span>Medium:</span>
            <span>{data.mediumSolved}</span>
          </li>
          <li className="flex justify-between">
            <span>Hard:</span>
            <span>{data.hardSolved}</span>
          </li>
          <li className="flex justify-between">
            <span>Streak:</span>
            <span className="font-medium">{data.streak}</span>
          </li>
          <li className="flex justify-between">
            <span>Ranking:</span>
            <span className="font-medium">{data.ranking}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
