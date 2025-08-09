import { Clock, Code, GraduationCap, Briefcase, Github, ExternalLink } from "lucide-react";

type Skill = {
    name: string;
    comment: string;
};

const skills: Skill[] = [
    {
        name: "Reactjs",
        comment: "Proficient in building dynamic, responsive user interfaces."
    },
    {
        name: "Next.js",
        comment: "Experienced in server-side rendering and static site generation."
    },
    {
        name: "LangGraph",
        comment: "Skilled in creating stateful, multi-agent applications."
    },
    {
        name: "Flask",
        comment: "Adept at developing robust and scalable RESTful APIs."
    },
    {
        name: "Tailwind CSS",
        comment: "Excel at rapid UI development with utility-first CSS."
    }
];

type Projj = {
    name: string;
    github: string;
    live: string;
    stack: string[];
    desc: string;
    done: boolean;
};

const Projects: Projj[] = [
    {
        name: "Quilled Blog App",
        stack: ["React", "Tiptap", "Flask", "PostgreSQL"],
        desc: "A full-stack blog with rich text editing, user auth, and admin tools.",
        github: "https://github.com/whoshnri/quilled",
        live: "https://quilled-5su6.onrender.com/",
        done: true
    },
    {
        name: "Craelo",
        stack: ["Next.js", "Stripe", "Firebase"],
        desc: "Prelaunch page for an eCommerce platform for handmade products.",
        github: "https://github.com/whoshnri/craelo",
        live: "https://craelo.vercel.app/",
        done: false
    },
    {
        name: "KwizKit",
        stack: ["Next.js", "Neon PostgreSQL", "NodeJS", "LangGraph", "Fast API", "Google Gemini"],
        desc: "AI powered test creation, proctoring and student management system.",
        github: "https://github.com/whoshnri/kwizkit",
        live: "http://kwizkit.tech/",
        done: false
    },
    {
        name: "AnonX (Message Terminal)",
        stack: ["Next.js", "Neon PostgreSQL", "NodeJS"],
        desc: "A terminal-style anonymous messaging platform with sharable links.",
        github: "https://github.com/whoshnri/anonx",
        live: "http://app-anonx.vercel.app/",
        done: true
    },
    {
        name: "YCT CHATBOT",
        stack: ["Flask", "Gemini API", "Langgraph", "Python", "HTML", "CSS", "JavaScript"],
        desc: "A chatbot for Yaba College of Technology. Built by the YDTA Chatbot Team. I contributed to the LangGraph integration and backend development. I was also group lead.",
        github: "https://github.com/whoshnri/yct_chatbot",
        live: "https://github.com/whoshnri/yct_chatbot",
        done: false
    }

];

export default function Skills() {
    return (
        <main className="text-gray-200 p-4 sm:p-6 grid grid-cols-1 gap-6 ">
            {/* Left Column */}
            <section className="grid gap-6">
                {/* Skills Section */}
                <div className="border border-gray-800 p-6 rounded-2xl">
                    <h1 className="text-3xl font-bold mb-5 flex items-center gap-3">
                        <Code size={28} className="text-cyan-400" /> Skills
                    </h1>
                    <ul className="space-y-3">
                        {skills.map((skill, idx) => (
                            <li key={idx}>
                                <p className="font-semibold text-lg text-gray-100">{skill.name}</p>
                                <p className="text-sm text-gray-400">{skill.comment}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Education Section */}
                <div className="border border-gray-800 p-6 space-y-5 rounded-2xl">
                    <h1 className="text-3xl font-bold mb-5 flex items-center gap-3">
                        <GraduationCap size={28} className="text-cyan-400" /> Education
                    </h1>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-100">National Diploma in Computer Science</h2>
                        <p className="text-gray-400">Yaba College Of Technology (exp. 2026)</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-100">NVIDIA Introductory Deep Learning </h2>
                        <p className="text-gray-400">Remote - <a className="underline" href="https://developer.nvidia.com">NVIDIA DLI</a> (currently pursuing)</p>
                    </div>
                </div>
            </section>

            {/* Right Column (Projects) */}
            <section className=" border border-gray-800 p-6 rounded-2xl">
                <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                    <Briefcase size={28} className="text-cyan-400" /> Projects
                </h1>
                <p className="text-sm text-gray-500 mb-6">
                    A few highlights of my development journey.
                </p>
                <ul className="space-y-6">
                    {Projects.map((project) => (
                        <li key={project.name} className="flex flex-col gap-3">
                             <div className="flex justify-between items-start">
                                <h2 className="text-xl font-bold text-gray-100">{project.name}</h2>
                                <span className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${project.done ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'}`}>
                                    { !project.done && <Clock size={12} className="mr-1.5"/> }
                                    { project.done ? 'Completed' : 'In Progress' }
                                </span>
                            </div>
                           
                            <p className="text-sm text-gray-400">{project.desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="bg-gray-700/50 text-gray-300 text-xs font-medium px-2 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-2 text-sm">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-400 hover:text-cyan-400 transition-colors">
                                    <Github size={16} /> GitHub
                                </a>
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-400 hover:text-cyan-400 transition-colors">
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}