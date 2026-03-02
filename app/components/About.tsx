"use client"
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className=" pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full font-dmsans font-light leading-[1.8] text-[#d4d3ce] space-y-8"
      >
        <h1 className="text-4xl md:text-5xl font-playfair text-white mb-12 tracking-tight">About Me</h1>

        <p>
          I am Henry Bassey, a 19 year old Software Engineer based in Lagos, Nigeria. I am currently the Founder of Quill Labs, a small collective dedicated to building focused, well-crafted software products.
        </p>

        <p>
          My journey into software engineering started early. I bypassed the standard path of endless courses and tutorials, opting instead to learn by shipping. I began by building console games in Python, and eventually scaled up to architecting full-stack web applications using React and Next.js, as well as engineering RAG chatbot pipelines.
        </p>

        <p>
          Most of my focus right now is directed towards Quill Labs. It serves as the primary incubator for my ideas, currently housing products like KwizHub, an academic marketplace designed to streamline educational resources, and Chorus, a paid voting platform. We also selectively partner with clients when the vision aligns with our drive to build efficient, robust software.
        </p>

        <p>
          Beyond the code, I am pursuing a degree in Computer Science at Yaba College of Technology, Lagos. My formal education is supplemented by hands-on SIWES training at the Yabatech Digital Technology Academy with an emphasis on AI and Machine Learning, alongside an NVIDIA Deep Learning Fundamentals certificate.
        </p>

        <p>Currently I am serving my 1-year Industrial Attachment at <a href="#">XXXXXXX</a>, hoping to gain useful experience in XXXXXXXXXXXX and further upgrade my skillset and network.</p>

        <p>
          I operate on the fundamental belief that well-made software can be a great equalizer and create real opportunities, particularly here in Africa. That ambition translates directly into the products I build—they aren't just demos; they are tools that people actually use.
        </p>

        <p>
          When I'm not writing code or managing Quill Labs, you'll likely find me listening to music, tuning into podcasts, or actively thinking about the intersection of culture and technology.
        </p>

        <p className="pt-3">
          Most of my energy right now goes into Quill Labs. If you&apos;re curious about what we&apos;re building, <a href="https://quilllabs.com" target="_blank" rel="noopener noreferrer" className="text-white border-b border-gray-600 hover:border-white pb-[2px] transition-colors">visit us here</a>.
        </p>

      </motion.div>
    </div>
  )
}
