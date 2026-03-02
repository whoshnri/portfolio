"use client";
import React, { useState } from 'react';
import { Mail, Briefcase } from 'lucide-react';

const workExperiences = [
    {
        id: 1,
        company: "The African Parent",
        role: "Fullstack Developer",
        period: "2023 - Present",
        details: "Led the development of the main platform, translating strategic ideas into a clean, functional site. Ensured high code quality and responsive design. Collaborated closely with the founder to meet evolving requirements."
    },
    {
        id: 2,
        company: "Suprvillain Store",
        role: "Frontend Engineer",
        period: "2022 - 2023",
        details: "Built the e-commerce storefront using Next.js and Tailwind CSS. Focused on delivering a premium, minimalist shopping experience with seamless animations and rapid load times."
    },
    {
        id: 3,
        company: "Freelance",
        role: "Web Developer",
        period: "2021 - 2022",
        details: "Developed custom web solutions for various local businesses. Handled everything from UI/UX design to database architecture and server deployment."
    }
];

const WorkExperience = () => {
    const [selectedExp, setSelectedExp] = useState<typeof workExperiences[0] | null>(null);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

    // Dummy client feedback data
    const clientFeedback = [
        {
            name: "Anne-Rose Obidi",
            role: "Founder, The African Parent",
            content: "Henry translated my strategic ideas into a clean, functional site and consistently solved problems as they arose. What sets Henry apart is follow-through. He goes beyond basic delivery and takes ownership of the outcome, not just the task. That makes him a reliable partner, not just a developer."
        },
        {
            name: "John Doe",
            role: "CEO, Suprvillain",
            content: "Solid frontend work. The e-commerce store is fast, animations are smooth, and the minimalist approach is exactly what our brand needed."
        }
    ];

    return (
        <section className="py-20 max-w-4xl mx-auto px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl font-semibold text-white font-sans tracking-tight">Work Experience</h2>
                    <button
                        onClick={() => setIsFeedbackOpen(true)}
                        className="text-sm font-mono text-gray-400 hover:text-white underline decoration-gray-700 underline-offset-4 transition-colors"
                    >
                        Client Feedback
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    {workExperiences.map((exp, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedExp(exp)}
                            className="flex justify-between items-center p-6 border border-gray-900 bg-gray-900/30 hover:bg-gray-900/60 transition-all duration-300 cursor-pointer rounded-none group animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div>
                                <h3 className="text-xl font-bold text-gray-100 font-sans">{exp.company}</h3>
                                <p className="text-sm text-blue-500 font-mono mt-1">{exp.role}</p>
                            </div>
                            <div className="flex flex-col items-end gap-2 text-gray-500 font-mono text-xs">
                                <span>{exp.period}</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">View Details →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dummy Modal for Details */}
            {selectedExp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-neutral-950 border border-gray-800 p-8 w-full max-w-md rounded-none shadow-2xl relative animate-in slide-in-from-bottom-8 duration-500">
                        <button
                            onClick={() => setSelectedExp(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-white font-mono text-xl"
                        >
                            &times;
                        </button>
                        <h3 className="text-2xl font-bold text-white mb-1 font-sans">{selectedExp.company}</h3>
                        <p className="text-blue-500 font-mono text-sm mb-6">{selectedExp.role} | {selectedExp.period}</p>

                        <p className="text-gray-400 font-sans leading-relaxed">
                            {selectedExp.details}
                        </p>

                        <div className="mt-8 pt-6 border-t border-gray-800 flex justify-end">
                            <button
                                onClick={() => setSelectedExp(null)}
                                className="px-6 py-2 bg-white text-black font-semibold font-sans hover:bg-gray-200 transition-colors rounded-none"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Client Feedback Modal */}
            {isFeedbackOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-neutral-950 border border-gray-800 w-full max-w-2xl rounded-none shadow-2xl relative animate-in slide-in-from-bottom-8 duration-500 max-h-[80vh] flex flex-col">
                        <div className="p-8 border-b border-gray-800 flex justify-between items-center shrink-0">
                            <h3 className="text-xl font-bold text-white font-sans tracking-tight">Client Feedback</h3>
                            <button
                                onClick={() => setIsFeedbackOpen(false)}
                                className="text-gray-500 hover:text-white font-mono text-xl"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="p-8 overflow-y-auto flex flex-col gap-8">
                            {clientFeedback.map((feedback, i) => (
                                <div key={i} className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 fill-mode-both" style={{ animationDelay: `${i * 150}ms` }}>
                                    <p className="text-gray-300 font-sans leading-relaxed text-sm italic">
                                        "{feedback.content}"
                                    </p>
                                    <div>
                                        <p className="text-white font-bold font-sans">{feedback.name}</p>
                                        <p className="text-blue-500 font-mono text-xs mt-1 uppercase tracking-wider">{feedback.role}</p>
                                    </div>
                                    {i < clientFeedback.length - 1 && <div className="h-px bg-gray-900 w-full mt-4" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default WorkExperience;