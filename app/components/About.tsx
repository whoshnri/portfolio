"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { InlineCode } from "@/components/InlineCode"

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full font-dmsans font-light leading-[1.8] text-[#d4d3ce]"
      >
        <h2 className="text-4xl md:text-5xl font-playfair text-white mb-12 tracking-tight">About Me</h2>

        <div className="space-y-8">
          <p>
            I am Henry Bassey, a 19 year old Software Engineer based in <InlineCode link="https://en.wikipedia.org/wiki/Lagos">Lagos, Nigeria</InlineCode>. I started a software company, <InlineCode link="https://qlabs.space">Quill Labs</InlineCode>, when I was 18. It's one of the many things I'd love to scale with the people I connect with over the next few years; building products we believe and making a lasting impact. If you'd like to join in please send a message.
          </p>

          <p>
            My journey into software engineering started early. I bypassed the standard path of endless courses and tutorials, opting instead to learn by shipping. I began by building console games in <InlineCode link="https://www.python.org/about/gettingstarted/" icon="python">Python</InlineCode>, and eventually scaled up to architecting full-stack web applications, as well as building <InlineCode link="https://github.com/whoshnri">AI applications</InlineCode> in my spare time.
          </p>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "circInOut" }}
                className="overflow-hidden space-y-8"
              >
                <p className="pt-2  ">
                  Most of my focus right now is directed towards <InlineCode link="https://qlabs.space">Quill Labs</InlineCode>. It serves as the primary incubator for my ideas, client work, and personal products.
                </p>

                <p>
                  Beyond the code, I am pursuing a degree in <InlineCode link="https://www.youtube.com/watch?v=cE4lpSFNFUE">Computer Science</InlineCode> at <InlineCode link="https://www.yabatech.edu.ng/">Yaba College of Technology</InlineCode>, Lagos.
                </p>

                <p>Currently I am serving my 1-year Industrial Attachment at <a href="https://www.pwc.com/ng/en.html" className="underline underline-offset-4 text-lg hover:text-white transition-colors"><InlineCode>PwC</InlineCode></a>, hoping to gain useful experience in dynamic environments and further upgrade my skillset and network.</p>

                <p>
                  I generally operate with optimism and enjoy every bit about who I am as a person and the things I build. That ambition translates directly into the products I build, and how I love day-to-day.
                </p>

                <p>
                  When I'm not writing code, managing Quill Labs or interning, you'll likely find me listening to music, tuning into podcasts, writing a blog or reading something. <br></br> <br></br> <InlineCode icon="arrow" link="https://books.henrybassey.me">I will add a library for my book reviews soon</InlineCode>.
                </p>

                <p className="pt-3">
                  If you&apos;re curious about what I'm building, check out my <InlineCode icon="github" link="https://qlabs.space ">GitHub</InlineCode>.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-2 text-xs cursor-pointer uppercase tracking-widest text-gray-400 hover:text-white transition-colors mt-8"
          >
            <p className="text-gray-300 tracking-thin group-hover:text-white">{isExpanded ? "Read Less" : "Read More"}</p>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
        </div>
      </motion.div>
    </section>
  )
}
