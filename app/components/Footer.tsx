import React from "react";
import { Github, ArrowRight, Twitter } from "lucide-react";

// A custom component for the Reddit Icon
const RedditIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-5 h-5"
    >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-9.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm-3.5-1c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-3.5 4c-1.67 0-3.14.85-4 2.15.2.05.4.08.6.08h6.8c.2 0 .4-.03.6-.08-.86-1.3-2.33-2.15-4-2.15z"></path>
    </svg>
);

// Social link data
const socialLinks = [
    {
        name: "X",
        icon: <Twitter size={20}/>,
        url: "https://x.com/xyz_07hb"
    },
    {
        name: "Reddit",
        icon: <RedditIcon />,
        url: "https://reddit.com/user/xyz_07hb"
    },
    {
        name: "Github",
        icon: <Github size={20} />,
        url: "https://github.com/whoshnri"
    }
];

export default function Footer() {
    return (
        <footer className="items-center w-full mx-auto p-8 justify-evenly text-center bg-black shadow-lg border border-gray-800">
            <section className="space-y-3 items-center gap-4 my-6 px-5">
                 {/* Action Buttons Section */}            
                <a 
                    href="mailto:henrybassey2007@gmail.com"
                    className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg cursor-pointer group w-full sm:w-auto justify-center"
                >
                    Send me an email
                    <ArrowRight className="-rotate-45 bg-black rounded-full stroke-white group-hover:scale-110 group-hover:rotate-0 transition-all duration-300"/>
                </a>
                <a
                    href="/resume.pdf"
                    download    
                    className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg cursor-pointer group w-full sm:w-auto justify-center"
                >
                    Download my resume
                    <ArrowRight className="-rotate-45 bg-black rounded-full stroke-white group-hover:scale-110 group-hover:rotate-0 transition-all duration-300"/>
                </a>
            </section>
            
            {/* Social Links Section */}
            <section className="">
            <div className="my-8">
                <h3 className="text-xl mb-5 relative  text-white">
                    <span className="bg2 absolute h-1 w-40 mx-auto inset-0 top-7"></span>
                    Find and follow me over here
                </h3>
                <nav className="flex items-center justify-center gap-6 sm:gap-8">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 text-gray-400 hover:text-gray-200 hover:underline transition-colors"
                        >
                            {link.icon}
                            <span className="font-medium">{link.name}</span>
                        </a>
                    ))}
                </nav>
            </div>

           
            
            {/* Signature and Copyright Section */}
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 mb-2">
                    &copy;henrybassey 2025
                </p>
                <div 
                    className="text-4xl md:text-5xl font=light text-white"
                    style={{ fontFamily: "'Permanent Marker', cursive" }} // Make sure to import this font
                >
                    HENRY BASSEY
                </div>
            </div>
            </section>
        </footer>
    );
}   