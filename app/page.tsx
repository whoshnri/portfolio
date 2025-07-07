"use client"

import {useState, useRef, useEffect} from "react"
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import type { StaticImageData } from 'next/image'
import logo from '../public/brand.png';
import GitHubCalendar from 'react-github-calendar';
import {
  Briefcase,
  Linkedin,
  Twitter,
  MapPin,
  BookOpen,
  User,
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
  Code,
  Bot,
  Sun,
  ExternalLink,
  Github
} from "lucide-react";
import qlogo from "../public/quilled.png"
import clogo from "../public/craelo.png"
import alogo from "../public/anonx.png"



const Projects = [
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
    github: "https://github.com/yourusername/craelo",
    live: "https://app-craelo.vercel.app/",
    done:false
  },
  {
    name: "AnonX (Message Terminal)",
    stack: ["Next.js", "React", "Tailwind CSS", "Neon PostgreSQL", "Next API"],
    desc: "A terminal-style anonymous messaging platform with sharable links, archive viewer, popup modals, and random prompt generator.",
    image: qlogo,
    github: "https://github.com/yourusername/anonx",
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
  const [activeProject, setProject] = useState(null)
  const [modal, setModal] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);




  return (
    <div className={` relative w-full p-3 `}>

    <div className="w-full max-w-6xl mx-auto border-2">
      <div className="bg-black mx-auto">
        <Image src={logo} alt="logo" width={100} height={100} className="mx-auto "/>
      </div>

    {/*flexed portion*/}
      <div className="grid md:flex border-b-2 ">
      <div className="md:w-[58%] md:h-full">
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
        <div className="py-2 opp-port-bg border-2 border-b-transparent mt-[-.13rem] cursor-pointer hover:opacity-90 duration-300 ease-in-out">
            <span className="opp-port-text flex items-center w-fit mx-auto gap-2 text-sm font-sans ">
                 <Download className="w-5 h-5" />
                   Download CV
            </span>

        </div>
        <section id="intro" className="text-craft px-4 pt-4 border-b-2 md:border-b-0 font-mono">
        <h2 className="text-3xl md:text-4xl mb-4">Hi👋🏿, I'm Henry Bassey</h2>
        <p className="text-sm font-sans lg:text-base font-semibold leading-relaxed opacity-80">
          I'm a Full-Stack Web Developer and a Computer Science student with a passion for clean code, intuitive user interfaces, and building tools that make real impact. Whether it's crafting beautiful frontends in React or architecting scalable APIs, I love turning ideas into working software. I'm currently in my final year of my time at YCT, studying for my ND in computer science. I love contributing to open source projects that I understand, and building modern web applications for myself and client.
        </p>
      </section>
      </div>

      <div className="md:w-[42%] md:h-full">
          <section
            id="skills"
            className="
              pt-6
              font-mono
              md:border-l-2
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
            Next API
          </li>
          <li className="flex items-center gap-2">
            <CloudCog className="w-4 h-4 text-orange-400" />
            Flask
          </li>
          <li className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-red-400" />
            Next Auth
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
      {Projects.map((proj, idx) => (
        <ProjectCard
          key={idx}
          project={proj}
          isModalOpen={modal}
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
                    setProject(null)
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
          My blogs...on my personal site
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
        <div className="grid sm:grid-cols-2 py-4 px-4 gap-4">
          <GitHubActivity/>
          <LeetCodeStats username={"whoshnri"}/>
        </div>
        <h2 className="text-center opp-port-text font-bold text-xs py-1 opp-port-bg w-[80%] mx-auto">
          These aren&apos;t so impressive 😭
        </h2>

     </section>

     <footer className="w-full opp-port-bg text-center font-bold text-xl py-6 mt-20">
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto px-4 gap-4">
            <p className="opp-port-text text-base">
              &copy; 2025 Henry Bassey. All rights reserved.
            </p>

            <div className="flex gap-4 items-center">
              <a
                href="/resume.pdf"
                download
                className="opp-port-text flex items-center gap-2 border border-current px-4 py-2 rounded hover:scale-105 transition duration-200 text-sm font-sans"
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
                <Github className="w-5 h-5 port-icon" />
                <p className="dropdown-content port-text text-xs px-1 port-bg">GitHub</p>
              </a>

              <a
                href="https://linkedin.com/in/whoshnri"
                target="_blank"
                rel="noopener noreferrer"
                className="dropdown dropdown-hover hover:scale-110 transition"
              >
                <Linkedin className="w-5 h-5 port-icon" />
                <p className="dropdown-content port-text text-xs px-1 port-bg">LinkedIn</p>

              </a>

              <a
                href="https://x.com/whoshnri"
                target="_blank"
                rel="noopener noreferrer"
                className="dropdown dropdown-bottom dropdown-hover hover:scale-110 transition"
              >
                <Twitter className="w-5 h-5 port-icon" />
                <p className="dropdown-content port-text text-xs px-1 port-bg">Twitter</p>
              </a>

              <a
                href="https://www.upwork.com/freelancers/whoshnri"
                target="_blank"
                rel="noopener noreferrer"
                className="dropdown dropdown-bottom dropdown-hover hover:scale-110 transition"
              >
                <Briefcase className="w-5 h-5  port-icon" />
                <p className="dropdown-content port-text text-xs px-1 port-bg">Upwork</p>
              </a>
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
      <div className="flex justify-center overflow-x-auto">
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
  image: string |  StaticImageData;
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
  activeProject: Project;
  setProject: (project: Project) => void;
  setModal: (project: Project) => void;
  modal : boolean
}) => {

  return (
    <div
      className={`border overflow-hidden p-4  relative shadow-md font-mono transition-opacity duration-300 ${
        modal && project?.name === project.name ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      >
      <div className="relative w-full h-48 rounded-xl overflow-hidden">
        {
          <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          className="object-cover"
        />}
      </div>

      <div className="space-y-2">
      {!project?.done && <p className=" text-xs uppercase text-white px-2 py-[1px] bg-red-500 w-fit mt-2">! still building</p>}
        <h3 className="text-xl font-semibold opp-port-text">{project?.name}</h3>

        <p onClick={()=>{
          setProject(project)
          setModal(true)
        }}
        className="text-sm font-semibold opacity-80 line-clamp-2 cursor-pointer hover:underline">{project?.desc}</p>

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
            href={project.github}
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

const CardModal = ({ project }: { project: Project }) => {
  return (
    <div className="z-20">
    <div className="border port-bg p-4 overflow-hidden shadow-md font-mono">
      <div className="relative w-full h-48 rounded-xl overflow-hidden">
        {
          <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          className="object-cover"
        />}
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

function LeetCodeStats({ username }: { username: string }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${'xyz07hb'}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, [username]);

  if (!data) return  <div className="w-full h-full"><p className="mt-[50%] -translate-y-[50%] mx-auto w-10 h-10 opp-port-border border-b-2 border-t-2 animate-spin rounded-full"></p></div>

  return (
    <section className="border">
      <div className="space-y-2 p-6">
      <h2 className="text-center opp-port-text font-bold text-xl py-2 opp-port-bg">
        LeetCode
      </h2>
      <div className="text-sm font-mono flex flex-col space-y-2">
        <p>Total Solved: {data.totalSolved}</p>
        <p>Easy: {data.easySolved}</p>
        <p>Medium: {data.mediumSolved}</p>
        <p>Hard: {data.hardSolved}</p>
        <p>Streak: {data.streak}</p>
        <p>Ranking: {data.ranking}</p>
      </div>
      </div>
    </section>
  );
}
