

const skills = [
    // Frontend
    {name: "HTML", category: "frontend"},
    {name: "CSS", category: "frontend"},
    {name: "JavaScript", category: "frontend"},
    {name: "React", category: "frontend"},
    {name: "Tailwind CSS", category: "frontend"},
    {name: "Bootstrap", category: "frontend"},

    // Backend
    {name: "Node.js", category: "backend"},
    {name: "Express.js", category: "backend"},
    {name: "MongoDB", category: "backend"},
    {name: "MySQL", category: "backend"},
    {name: "RESTful APIs", category: "backend"},


    // Tools
    {name: "Git", category: "tools"},
    {name: "GitHub", category: "tools"},
    {name: "VSCode", category: "tools"},
    {name: "Jira", category: "tools"},
    {name: "Linux/Unix", category: "tools"},
    {name: "Agile Development", category: "tools"},


    // Programming Languages
    {name: "Python", category: "programming languages"},
    {name: "Java", category: "programming languages"},
    {name: "C++", category: "programming languages"},
    {name: "C", category: "programming languages"},
    {name: "SQL", category: "programming languages"},
    {name: "bash", category: "programming languages"},


    // Languages
    {name: "Hebrew", category: "languages"},
    {name: "English", category: "languages"},

    // Other
    {name: "Android (Java)", category: "other"},
    {name: "OOP", category: "backend"},

]

export const SkillsSection = () => {
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text 3-xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, key) => (
                    <div
                        key={key}
                        className="bg-card p-6 tounded-lg shadow-xs card-hover"
                    >
                        <h3>{skill.name}</h3>
                    </div>
                )
            )}
                

            </div>

        </div>
    </section>
}