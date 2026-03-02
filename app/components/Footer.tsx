import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MailIcon } from "lucide-react";


const socialLinks = [
  {
    name: "X",
    icon: <BsTwitterX className="w-4 h-4" />,
    url: "https://x.com/xyz_07hb",
    color: "hover:text-neutral-400",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="w-4 h-4" />,
    url: "https://linkedin.com/in/henrybassey",
    color: "hover:text-blue-500",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp className="w-4 h-4" />,
    url: "https://wa.me/yourwhatsappnumber", // Remember to update this later
    color: "hover:text-green-500",
  },
  {
    name: "Work Email",
    icon: <MailIcon className="w-4 h-4" />,
    url: "mailto:yourworkemail@example.com", // Remember to update this later
    color: "hover:text-gray-300",
  }
];

export default function Footer() {
  return (
    <footer className="w-full mx-auto p-12 mt-10 text-center flex flex-col items-center justify-center font-dmsans">
      {/* Social Links */}
      <div className="flex flex-col items-center">
        <nav className="flex items-center justify-center gap-4 mb-6 flex-wrap">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-1 rounded-none border border-gray-800 p-3 text-gray-400 transition-all hover:bg-gray-900 ${link.color}`}
            >
              {link.icon}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-sm text-gray-500 font-dmsans">
          &copy; 2025 henrybassey.me
        </p>
      </div>
    </footer>
  );
}
