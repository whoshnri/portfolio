import { Mail, MailOpen } from 'lucide-react';
import React from 'react'

const testimonials = [
    {
        name: "Anne-Rose Obidi",
        role: "Founder, The African Parent",
        contact: "mailto:anne-rose@theafricanparent.org",
        content: <p>Henry delivered two complex web projects for me, including The African Parent platform. Both required clarity of thinking, technical competence, and the ability to work through evolving requirements without losing momentum. <br /> <br />  He translated my strategic ideas into a clean, functional site and consistently solved problems as they arose. Communication was clear. Deadlines were taken seriously. Quality did not slip under pressure. <br /> <br /> What sets Henry apart is follow-through. He goes beyond basic delivery and takes ownership of the outcome, not just the task. That makes him a reliable partner, not just a developer. <br /> <br /> I would confidently recommend Henry to founders and organisations who need a developer they can trust to deliver end-to-end.</p>
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 max-w-4xl mx-auto px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold text-white mb-12">Clientèle</h2>
                <div className="grid grid-cols-1 rounded-3xl overflow-hidden border border-gray-800 bg-gray-900/20 backdrop-blur-sm">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-8 md:p-12 hover:bg-gray-900/10 transition-all duration-300">
                            <blockquote className="relative">
                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light italic mb-10">
                                    {testimonial.content}
                                </p>
                                <footer className="flex items-center gap-4">
                                    <div className='grid'>
                                        <cite className="not-italic block text-xl font-bold text-white">
                                            {testimonial.name}
                                        </cite>
                                        {testimonial.role && (
                                            <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">
                                                {testimonial.role}
                                            </span>

                                        )}
                                    </div>

                                    <a href={testimonial.contact} className="ml-auto bg-white/10 p-2 rounded-full text-xs font-bold text-blue-500">
                                        <Mail />
                                    </a>

                                </footer>
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials