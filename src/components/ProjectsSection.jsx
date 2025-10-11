import { ArrowRight, Github } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
    {
        id: 1,
        title: "AmiTech Portfolio",
        description: "A beautiful, space-themed portfolio built with React and Tailwind CSS.",
        image: "/projects/portfolio thumbnail.png",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        githuburl: "https://github.com/Amit-Bruhim/My_Portfolio",
    },

    {
        id: 2,
        title: "Intro to CS",
        description: "A combined repository of exercises and mini-projects, featuring loops, recursion, games, and a Wordle clone.",
        image: "/projects/intro to cs thumbnail.png",
        tags: ["C", "Python"],
        githuburl: "https://github.com/Amit-Bruhim/Intro-to-CS",
    },

    {
        id: 3,
        title: "Arkanoid Game",
        description: "A classic brick-breaker game implemented in Java.",
        image: "/projects/arkanoid thumbnail.jpg",
        tags: ["OOP", "Java"],
        githuburl: "https://github.com/Amit-Bruhim/Arkanoid",
    },

    {
        id: 4,
        title: "Netflix clone",
        description: "Coming soon...",
        image: "/projects/netflix thumbnail.png",
        tags: ["React"],
        githuburl: "https://github.com/Amit-Bruhim",
    }
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
                Here are some of my recent projects.<br />
                Each project was carefully crafted with attention to detail, performance, and user experience.
            </p>

            <Swiper modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="my-1 relative"
            >
            {projects.map((project, key) => (
                <SwiperSlide key={project.id}>
                <div
                    key={key}
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full min-h-[350px] relative"
                >
                    <div className="h-38 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-4">
                        <div className="pl-6">
                            <div className="flex flex-wrap gap-2 mb-2">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                        <div className="flex items-center justify-between ml-2">
                            <div className="flex space-x-3">
                                <a href={project.githuburl}
                                    target="_blank"
                                    className="absolute left-4 bottom-4 text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        <div className="text-center mt-4">
            <a
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank"
                href="https://github.com/Amit-Bruhim"
            >
                Check My Github <ArrowRight size={16} />
            </a>
        </div>
    

    </section >
}