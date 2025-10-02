import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "AmiTech Portfolio",
        description: "A beautiful, space-themed portfolio built with React and Tailwind CSS.",
        image: "/projects/portfolio thumbnail.png",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        demourl: "#",
        githuburl: "#",
    },

    {
        id: 2,
        title: "Arkanoid Game",
        description: "Coming soon...",
        image: "/projects/arkanoid thumbnail.png",
        tags: ["OOP"],
        demourl: "#",
        githuburl: "#",
    },

     {
        id: 3,
        title: "Netflix clone",
        description: "Coming soon...",
        image: "/projects/netflix thumbnail.png",
        tags: ["React"],
        demourl: "#",
        githuburl: "#",
    }
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects.<br />
                Each project was carefully crafted with attention to detail, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
                {projects.map((project, key) => (
                    <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full"
                    > 
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="pt-6 pl-6">
                            <div className="flex flex-wrap gap-2 mb-4">
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
                               <a>
                                  <ExternalLink/>
                               </a>
                               <a>
                                  <Github/>
                               </a>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </section>
}