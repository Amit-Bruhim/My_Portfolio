import { Mail } from "lucide-react"


export const ContactSection = () => {
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Looking for a junior developer? <br />
                Let's build something great together!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        Contact Informatiom
                    </h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a
                                    href="mailto:amitbruhim33@gmail.com?subject=Hello%20from%20your%20portfolio&body=Hi%2C%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20was%20really%20impressed.%20I%20have%20an%20opportunity%20for%20you.%0D%0A%0D%0ABest%20regards%2C%0D%0A[Your%20Name]"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    amitbruhim33@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}