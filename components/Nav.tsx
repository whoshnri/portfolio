"use client";
import Link from "next/link";
import { MailIcon } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaWhatsapp, FaGithub, FaHome } from "react-icons/fa";
import { SendMessagePopup } from "@/app/Pager";
import { useState } from "react";

const socialLinks = [
    {
        name: "Home",
        icon: <FaHome className="w-6 h-6" />,
        url: "/",
        color: "hover:text-neutral-400",
    },
    {
        name: "Github",
        icon: <FaGithub className="w-6 h-6" />,
        url: "https://github.com/whoshnri",
        color: "hover:text-neutral-400",
    },
    {
        name: "X",
        icon: <BsTwitterX className="w-6 h-6" />,
        url: "https://x.com/whoshnry",
        color: "hover:text-neutral-400",
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin className="w-6 h-6" />,
        url: "https://linkedin.com/in/henrybassey",
        color: "hover:text-blue-500",
    },
    {
        name: "WhatsApp",
        icon: <FaWhatsapp className="w-6 h-6" />,
        url: "https://wa.me/2347080482034",
        color: "hover:text-green-500",
    },
    {
        name: "Work Email",
        icon: <MailIcon className="w-6 h-6" />,
        url: "mailto:henrybassey2007@gmail.com",
        color: "hover:text-gray-300",
    }
];

export default function Nav() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <>
            {/* Desktop Nav */}
            <div className="lg:flex relative gap-2 mx-auto hidden items-start z-50 px-4">
                <nav className="w-[100px] flex flex-col items-center sticky top-[5vh] pb-10 justify-between h-[90vh] z-100 animate-in fade-in slide-in-from-left-8 duration-700 ease-out fill-mode-both">
                    <h1 className="text-lg font-semibold font-sans tracking-wide">
                        HB<span className="text-blue-400">.</span>
                    </h1>
                    {/* Social Links */}
                    <div className="flex justify-evenly ">
                        <nav className="flex flex-col items-center justify-center gap-5 flex-wrap">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target={link.name === "Home" ? "_self" : "_blank"}
                                    rel="noopener noreferrer"
                                    className={`flex flex-col border rounded-none p-1 items-center gap-1 text-gray-400 transition-all transform hover:scale-110 ${link.color}`}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </nav>
                    </div>
                </nav>
            </div>

            {/* Mobile Nav */}
            <div className="w-full lg:hidden px-4">
                <nav className="fixed left-0 right-0 top-0 px-6 py-4 z-10 backdrop-blur-3xl flex items-center justify-between z-50 animate-in fade-in slide-in-from-top-4 duration-500 ease-out fill-mode-both border-b border-gray-900">
                    <Link href="/" className="text-lg font-semibold text-white select-none leading-none font-playfair tracking-wide">
                        Henry Bassey<span className="text-blue-400">.</span>
                    </Link>

                    <div className="flex items-center gap-4 text-xs font-dmsans">
                        <Link href="/about" className="text-gray-400 hover:text-white">About</Link>
                        <Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link>
                        <Link href="/videos" className="text-gray-400 hover:text-white">Videos</Link>
                    </div>
                </nav>
            </div>

            <SendMessagePopup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
        </>
    );
}
