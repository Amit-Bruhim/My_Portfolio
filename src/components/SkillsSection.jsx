import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGit, FaGithub, FaLinux, FaAndroid } from "react-icons/fa";
import { SiGnubash ,SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiMysql, SiC, SiCplusplus, SiJira } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { TbSql, TbAlphabetHebrew} from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";


const skills = [
    // Frontend
    { name: "HTML", category: "frontend", icon: <FaHtml5 /> },
    { name: "CSS", category: "frontend", icon: <FaCss3Alt /> },
    { name: "JavaScript", category: "frontend", icon: <FaJs /> },
    { name: "React", category: "frontend", icon: <FaReact /> },
    { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss /> },
    { name: "Bootstrap", category: "frontend", icon: <SiBootstrap /> },

    // Backend
    { name: "Node.js", category: "backend", icon: <FaNodeJs /> },
    { name: "Express.js", category: "backend", icon: <SiExpress /> },
    { name: "MongoDB", category: "backend", icon: <SiMongodb /> },
    { name: "MySQL", category: "backend", icon: <GrMysql/> },
    { name: "RESTful APIs", category: "backend", icon: <FaNodeJs /> },
    
    // Tools
    { name: "Git", category: "tools", icon: <FaGit /> },
    { name: "GitHub", category: "tools", icon: <FaGithub /> },
    { name: "VSCode", category: "tools", icon: <VscVscode /> }, 
    { name: "Jira", category: "tools", icon: <SiJira /> },
    { name: "Linux/Unix", category: "tools", icon: <FaLinux /> },
    { name: "Agile Development", category: "tools", icon: <SiJira /> },

    // Programming Languages
    { name: "Python", category: "programming languages", icon: <FaPython /> },
    { name: "Java", category: "programming languages", icon: <FaJava /> },
    { name: "C++", category: "programming languages", icon: <SiCplusplus /> },
    { name: "C", category: "programming languages", icon: <SiC /> },
    { name: "SQL", category: "programming languages", icon: <TbSql />},
    { name: "bash", category: "programming languages", icon: <SiGnubash />},

    // Languages
    { name: "Hebrew", category: "languages", icon: <TbAlphabetHebrew/> },
    { name: "English", category: "languages", icon: <RiEnglishInput/>},

    // Other
    { name: "Android (Java)", category: "other", icon: <FaAndroid /> },
    { name: "OOP", category: "backend", icon: <FaJava /> },
];

const categories = ["all", "frontend", "backend", "tools", "programming languages", "languages", "other"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text 3-xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key}
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>{category}</button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div
                        key={key}
                        className="bg-card p-6 tounded-lg shadow-xs card-hover flex flex-col items-center"
                    >
                        <div className="text-5xl mb-1">
                            {skill.icon}
                        </div>
                        <div className="mb-2">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>

                    </div>
                )
                )}


            </div>

        </div>
    </section>
}