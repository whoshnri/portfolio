import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const workExperience = [
    {
        slug: "suprvillain-store",
        role: "Freelance Developer",
        client: "Suprvillain Store",
        type: "E-Commerce Platform",
        description: "Designed and developed a modern e-commerce platform for a premium lifestyle brand. Features clean product displays, shopping cart functionality, and a minimalist aesthetic built for conversion.",
        contributions: [
            "Built full storefront UI from scratch in Next.js and Tailwind CSS",
            "Implemented product listing, cart, and checkout flows",
            "Optimised for performance and mobile responsiveness"
        ],
        stack: ["Next.js", "Tailwind CSS", "TypeScript"],
        startDate: "January 2025",
        endDate: "Present",
        status: "ongoing",
        sole: true,
        links: {
            live: "https://suprvillain.store"
        }
    },
    {
        slug: "smart-iq-living",
        role: "Freelance Developer",
        client: "Smart IQ Living",
        type: "Corporate Website",
        description: "Built the corporate website for a smart home automation company. The site showcases their full range of services including security systems, lighting controls, audio-video integration, and IoT solutions.",
        contributions: [
            "Designed and developed the full corporate site in Next.js",
            "Integrated GSAP for smooth scroll-triggered animations",
            "Structured service pages and content for clarity and conversion"
        ],
        stack: ["Next.js", "GSAP", "Tailwind CSS", "TypeScript"],
        startDate: "October 2025",
        endDate: "October 2025",
        status: "completed",
        sole: true,
        links: {
            live: "https://smartiqliving.com"
        }
    },
    {
        slug: "the-african-parent",
        role: "Freelance Developer",
        client: "The African Parent",
        type: "Editorial Platform Revamp",
        description: "Revamped the official website of The African Parent, a leading parenting media brand. Overhauled the design and functionality to improve user experience and engagement, and built a custom admin dashboard for content management and analytics.",
        contributions: [
            "Redesigned the full site UI for improved readability and engagement",
            "Built a custom admin dashboard for content management and analytics",
            "Integrated MailerLite and MailerSend for newsletter and transactional emails",
            "Set up Stripe for subscription and payment flows"
        ],
        stack: ["Next.js", "Prisma", "Node.js", "Tailwind CSS", "Shadcn UI", "MailerLite", "MailerSend", "Stripe"],
        startDate: "September 2025",
        endDate: "January 2026",
        status: "completed",
        sole: true,
        links: {
            live: "https://theafricanparent.vercel.app"
        }
    },
    {
        slug: "modemen-magazine",
        role: "Freelance Developer",
        client: "Modemen Magazine",
        type: "Magazine & E-Commerce Platform",
        description: "Built a full editorial and e-commerce platform for Modemen Magazine, a fashion and culture publication celebrating African masculinity. The site features curated articles, exclusive interviews, events coverage, and an integrated shop.",
        contributions: [
            "Developed the full magazine platform with editorial and shop sections",
            "Built article, interview, and events pages with CMS-style content structure",
            "Integrated PostgreSQL and Prisma for content and product data management"
        ],
        stack: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "TypeScript"],
        startDate: "November 2025",
        endDate: "February 2026",
        status: "completed",
        sole: true,
        links: {
            live: "https://modemenmag.vercel.app"
        }
    }
];

export default function Experience() {
    return (
        <div className="pt-20 pb-32">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full"
            >
                <h2 className="text-3xl md:text-4xl font-playfair text-white mb-12 tracking-tight">Work Experience</h2>

                <div className="flex flex-col gap-12 font-dmsans">
                    {workExperience.map((job) => (
                        <div key={job.slug} className="flex flex-col gap-4 border-t border-[#d4d3ce]/20 pt-8 mt-2 first:mt-0 first:border-0 first:pt-0">
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                                <h3 className="text-2xl font-playfair text-white">
                                    {job.client} <span className="text-[#d4d3ce] font-dmsans text-lg tracking-wide">— {job.role}</span>
                                </h3>
                                <span className="text-sm uppercase tracking-widest text-gray-500">
                                    {job.startDate} – {job.endDate}
                                </span>
                            </div>

                            <div className="text-sm text-gray-400 font-light mb-2">
                                {job.type}
                            </div>

                            <p className="text-[#d4d3ce] font-light leading-[1.8] max-w-3xl">
                                {job.description}
                            </p>

                            <ul className="list-disc list-inside text-gray-400 font-light leading-relaxed space-y-1 mb-2">
                                {job.contributions.map((contribution, idx) => (
                                    <li key={idx}>{contribution}</li>
                                ))}
                            </ul>


                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
