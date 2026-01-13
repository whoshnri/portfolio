  "use client";
import { useState } from "react";
import Hero from "@/app/components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { MailIcon } from "lucide-react";
import About from "./components/About";

import { FaGithub, FaDiscord } from "react-icons/fa";

import { BsTwitterX } from "react-icons/bs";
import Testimonails from "./components/Testimonails";

const socialLinks = [
  {
    name: "X",
    icon: <BsTwitterX className="w-4 h-4" />,
    url: "https://x.com/xyz_07hb",
    color: "hover:text-sky-400",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="w-4 h-4" />,
    url: "https://github.com/whoshnri",
    color: "hover:text-gray-300",
  }
];

export default function Pager() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="lg:flex relative gap-2 mx-auto hidden items-start z-50 px-4">
        <nav className="w-[100px] flex flex-col items-center sticky top-[5vh] pb-10 justify-between h-[90vh] z-100">
          <h1 className="text-lg font-semibold">
            Henry Bassey<span className="text-blue-400">.</span>
          </h1>
          {/* Social Links */}
          <div className="flex justify-evenly">
            <nav className="flex flex-col items-center justify-center gap-5 flex-wrap">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col border rounded-full p-1 items-center gap-1 text-gray-400 transition-all transform hover:scale-110 ${link.color}`}
                >
                  {link.icon}
                </a>
              ))}
            </nav>
          </div>
        </nav>

        <main className="w-full">
          <Hero />
          <About />
          <Skills />
          <Testimonails/>
          <Footer />
        </main>

        <nav className="w-fit sticky top-[5vh]">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="px-3 text-xs neon-pulse py-2 justify-center w-fit hover:scale-90 mx-auto text-[#51a2ff] rounded-full flex items-center transition z-10"
          >
            <MailIcon size={20} />
          </button>
        </nav>
      </div>

      <div className="w-full lg:hidden px-4 ">
        <nav className="fixed left-0 right-0 top-0 px-6 py-4 z-10  backdrop-blur-3xl flex items-center justify-between z-50">
          <h1 className="text-lg font-semibold text-white select-none leading-none">
            Henry Bassey<span className="text-blue-400">.</span>
          </h1>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="flex items-center justify-center w-fit px-4 py-2 text-xs neon-pulse text-[#51a2ff] bg-white/20 border border-[#51a2ff] rounded-full hover:bg-[#51a2ff]/30 transition-transform duration-150 ease-in-out active:scale-95"
            aria-label="Open send message popup"
          >
            <MailIcon size={20} />
          </button>
        </nav>

        <main className="w-[90%] mx-auto">
          <Hero />
          <About />
          <Skills />
          <Testimonails/>
          <Footer />
        </main>
      </div>

      <SendMessagePopup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
    </>
  );
}

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="rounded-3xl backdrop-blur-lg shadow-xl w-[85%] max-w-95 p-6 animate-fadeIn border border-gray-700 relative">
        <h2 className="text-lg font-semibold text-white mb-2">
          Send a Message
        </h2>
        <p className="text-sm text-gray-200 mb-4">
          Reach out to me on anything you wish.
        </p>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full mb-3 p-3 text-sm rounded-2xl bg-white/10 text-white placeholder-gray-300 border border-white/30 outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full mb-3 p-3 text-sm bg-white/10 text-white placeholder-gray-300 border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Hi Henry..."
          className="w-full h-28 p-3 text-sm bg-white/10 text-white placeholder-gray-300 border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />

        <div className="flex justify-end gap-2 mt-4">
          {status === "success" && <p className=" mr-auto  w-fit text-center px-4 py-2  bg-green-600 text-white rounded-2xl">Message sent!</p>}
          {status === "error" && <p className="mr-auto w-fit text-center px-4 py-2  bg-red-600 text-white rounded-2xl">Send failed.</p>}
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 text-sm text-gray-300 border rounded-2xl hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!name.trim() || !email.trim() || !message.trim()}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-2xl hover:bg-blue-500 disabled:opacity-50 transition-colors"
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </div>

      </div>
    </div>
  );
}
