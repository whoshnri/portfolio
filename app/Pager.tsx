"use client";
import { useState } from "react";
import Hero from "@/app/components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { MailIcon } from "lucide-react";
import About from "./components/About";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { BsTwitterX } from "react-icons/bs";
import Testimonails from "./components/Testimonails";

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

// export default function Pager() {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   return (
//     <>
//       <div className="lg:flex relative gap-2 mx-auto hidden items-start z-50 px-4">
        

//         <main className="w-full">
//           <Hero />
//           <About />
//           <Skills />
//           <Testimonails />
//           <Footer />
//         </main>

//         <nav className="w-fit sticky top-[5vh] animate-in fade-in slide-in-from-right-8 duration-700 ease-out fill-mode-both">
//           <button
//             onClick={() => setIsPopupOpen(true)}
//             className="px-3 text-xs neon-pulse py-2 justify-center w-fit hover:scale-95 mx-auto text-[#51a2ff] border border-[#51a2ff] bg-transparent flex items-center transition z-10 rounded-none hover:bg-[#51a2ff]/10 hover:text-white"
//           >
//             <MailIcon size={20} />
//           </button>
//         </nav>
//       </div>

//       <div className="w-full lg:hidden px-4">
//         <nav className="fixed left-0 right-0 top-0 px-6 py-4 z-10 backdrop-blur-3xl flex items-center justify-between z-50 animate-in fade-in slide-in-from-top-4 duration-500 ease-out fill-mode-both border-b border-gray-900">
//           <h1 className="text-lg font-semibold text-white select-none leading-none font-sans tracking-wide">
//             Henry Bassey<span className="text-blue-400">.</span>
//           </h1>
//           <button
//             onClick={() => setIsPopupOpen(true)}
//             className="flex items-center justify-center w-fit px-4 py-2 text-xs text-[#51a2ff] bg-transparent border border-[#51a2ff] hover:bg-[#51a2ff]/10 hover:text-white transition-all duration-300 ease-in-out active:scale-95 rounded-none"
//             aria-label="Open send message popup"
//           >
//             <MailIcon size={20} />
//           </button>
//         </nav>

//         <main className="w-[90%] mx-auto">
//           <Hero />
//           <About />
//           <Skills />
//           <Testimonails />
//           <Footer />
//         </main>
//       </div>

//       <SendMessagePopup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
//     </>
//   );
// }

type PopupProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export function SendMessagePopup({ isOpen, setIsOpen }: PopupProps) {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setIsOpen(false);
        setStatus(null);
      }, 2000);
    }
  }


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="rounded-none bg-neutral-950 shadow-2xl w-[90%] sm:w-[500px] p-8 animate-in slide-in-from-bottom-8 duration-500 border border-gray-800 relative">
        <h2 className="text-2xl font-bold text-white mb-2 font-sans tracking-tight">
          Send a Message
        </h2>
        <p className="text-sm text-gray-400 mb-8 font-sans">
          Reach out to me on anything you wish.
        </p>

        <div className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full p-4 text-sm rounded-none bg-transparent text-white placeholder-gray-500 border border-gray-800 focus:outline-none focus:border-blue-500 transition-colors font-mono"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full p-4 text-sm rounded-none bg-transparent text-white placeholder-gray-500 border border-gray-800 focus:outline-none focus:border-blue-500 transition-colors font-mono"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hi Henry..."
            className="w-full h-32 p-4 text-sm rounded-none bg-transparent text-white placeholder-gray-500 border border-gray-800 focus:outline-none focus:border-blue-500 transition-colors font-mono resize-none"
          />
        </div>

        <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-800">
          <div className="flex-1">
            {status === "success" && <p className="text-sm text-green-500 font-mono animate-in fade-in slide-in-from-left-2">Message sent successfully.</p>}
            {status === "error" && <p className="text-sm text-red-500 font-mono animate-in fade-in slide-in-from-left-2">Failed to send message.</p>}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="px-6 py-3 text-sm font-sans font-semibold text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!name.trim() || !email.trim() || !message.trim()}
            className="px-8 py-3 text-sm font-sans font-bold bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-white transition-colors rounded-none uppercase tracking-wider"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
