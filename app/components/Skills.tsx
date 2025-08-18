"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import React from "react";
import {
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub as Github,
} from "react-icons/fa";

import { SiLangchain } from "react-icons/si";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import { Clock, ExternalLink } from "lucide-react";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";

const skills = [
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "LangGraph", icon: SiLangchain, color: "#3776AB" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "Flask", icon: SiFlask, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

type Projj = {
  name: string;
  github: string;
  live: string;
  stack: string[];
  desc: string;
  done: boolean;
};

const Projects: Projj[] = [
  {
    name: "Quilled Blog App",
    stack: ["React", "Tiptap", "Flask", "PostgreSQL"],
    desc: "A full-stack blog with rich text editing, user auth, and admin tools.",
    github: "https://github.com/whoshnri/quilled",
    live: "https://quilled-5su6.onrender.com/",
    done: true,
  },
  {
    name: "Craelo",
    stack: ["Next.js", "Stripe", "Firebase"],
    desc: "Prelaunch page for an eCommerce platform for handmade products.",
    github: "https://github.com/whoshnri/craelo",
    live: "https://craelo.vercel.app/",
    done: false,
  },
  {
    name: "KwizKit",
    stack: [
      "Next.js",
      "Neon PostgreSQL",
      "NodeJS",
      "LangGraph",
      "Fast API",
      "Google Gemini",
    ],
    desc: "AI powered test creation, proctoring and student management system.",
    github: "https://github.com/whoshnri/kwizkit",
    live: "http://kwizkit.tech/",
    done: false,
  },
  {
    name: "AnonX (Message Terminal)",
    stack: ["Next.js", "Neon PostgreSQL", "NodeJS"],
    desc: "A terminal-style anonymous messaging platform with sharable links.",
    github: "https://github.com/whoshnri/anonx",
    live: "http://app-anonx.vercel.app/",
    done: true,
  },
  {
    name: "YCT CHATBOT",
    stack: [
      "Flask",
      "Gemini API",
      "LangGraph",
      "LangChain",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    desc: "A chatbot for Yaba College of Technology. Built by the YDTA Chatbot Team. I contributed to the LangGraph integration and backend development. I was also group lead.",
    github: "https://github.com/whoshnri/yct_chatbot",
    live: "https://github.com/whoshnri/yct_chatbot",
    done: false,
  },
];

const PortfolioSections = () => {
  function handleDownload(path: string) {
    const link = document.createElement("a");
    link.href = path;
    link.download = ""; // let browser use filename from server
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="mx-auto">
      {/* Skills */}
      <InfiniteMovingCards
        items={skills}
        direction="right"
        speed="normal"
        pauseOnHover
        className="max-w-lg mx-auto"
      />
      <section className=" max-w-4xl mx-auto my-32">
        <span className="flex items-center gap-3 py-5">
          <span className="h-px flex-1 pe-4 "></span>

          <span className="shrink-0  text-3xl font-mono text-white">
            Education
          </span>
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* YDTA */}
          <Card className="rounded-3xl border border-gray-700 bg-neutral-950">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Yabatech Digital Technology Academy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-sm flex flex-col gap-3 justify-between h-full">
              <p>
                About to complete a three-month SIWES Training program focusing
                on understanding AI and Machine learning concepts and
                applications.
              </p>
              <Button
                disabled
                variant="outline"
                className="rounded-full hover:bg-gray-200 hover:text-black"
              >
                View Certificate
              </Button>
            </CardContent>
          </Card>

          {/* YCT */}
          <Card className="rounded-3xl border border-gray-700 bg-neutral-950">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Yaba College of Technology (YCT)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-sm flex flex-col gap-3 justify-between h-full">
              <p>
                Currently pursuing a Bachelor’s degree in Computer Science,
                expected to graduate by 2026.
              </p>
              <Button
                disabled
                variant="outline"
                className="rounded-full hover:bg-gray-200 hover:text-black"
              >
                View Certificate
              </Button>
            </CardContent>
          </Card>

          {/* NVIDIA DL Program */}
          <Card className="rounded-3xl border border-gray-700 bg-neutral-950">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                NVIDIA Deep Learning Program
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 text-sm flex flex-col gap-3 justify-between h-full">
              <p>
                Completed an Introduction to Deep Learning course in the NVIDIA Deep Learning program.
              </p>
              <Button
                onClick={() => handleDownload("/nvidia_cert.pdf")}
                variant="outline"
                className="rounded-full hover:bg-gray-200 hover:text-black cursor-none"
              >
                View Certificate
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section className=" py-6 lg:px-6 max-w-4xl mx-auto">
        <span className="flex p-5 gap-2 w-full items-center font-mono">
          <span className="h-px flex-1"></span>

          <span className="shrink-0w-fit text-3xl text-white">Projects</span>
          <span className="h-px flex-1"></span>
        </span>

        {/* Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col gap-3 border hover:scale-105 border-gray-900 p-5 bg-gray-900/30 hover:bg-gray-900/60 transition-all rounded-3xl"
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-bold text-gray-100">
                  {project.name}
                </h2>
                <span
                  className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${
                    project.done
                      ? "bg-green-900/50 text-green-400"
                      : "bg-yellow-900/50 text-yellow-400"
                  }`}
                >
                  {!project.done && <Clock size={12} className="mr-1.5" />}
                  {project.done ? "Completed" : "In Progress"}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 flex-1">{project.desc}</p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-700/50 text-gray-300 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-2 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-none items-center gap-1.5 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center cursor-none gap-1.5 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioSections;
