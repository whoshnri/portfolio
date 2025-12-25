import React from "react";
import {
  FaRedditAlien,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const socialLinks = [
  {
    name: "X",
    icon: <BsTwitterX className="w-5 h-5" />,
    url: "https://x.com/xyz_07hb",
    color: "hover:text-sky-400",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="w-5 h-5" />,
    url: "https://github.com/whoshnri",
    color: "hover:text-gray-300",
  },
  {
    name: "Discord",
    icon: <FaDiscord className="w-5 h-5" />,
    url: "https://discord.com/users/whoshnri",
    color: "hover:text-indigo-400",
  },
];

export default function Footer() {
  return (
    <footer className="w-full mx-auto p-8 mt-10 text-center shadow-lg lg:hidden flex items-center justify-center">
      {/* Social Links */}
      <div>
        {/* Copyright */}
        <p className="text-sm text-gray-500 mb-2">
          &copy; {new Date().getFullYear()} henrybassey
        </p>

        <nav className="flex items-center justify-center gap-2 mb-6 flex-wrap">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-1 rounded-full border p-2 text-gray-400 transition-all transform hover:scale-110 ${link.color}`}
            >
              {link.icon}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
