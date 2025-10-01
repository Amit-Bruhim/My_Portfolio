

export const HeroSection = () => {
    return <section id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in-delay-1"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-2">{" "} Amit</span>
                    <span className="text-gradien ml-2 opacity-0 animate-fade-in-delay-3">{" "} Bruhim</span>
                </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore itaque sed minima iure,
                vero fugit neque veniam repellendus ipsum in dolorem tempora veritatis asperiores et natus optio vitae nobis possimus.
            </p>

            </div>
        </div>

    </section>
}