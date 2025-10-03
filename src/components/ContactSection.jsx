import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from 'emailjs-com';




export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const SERVER_ID = "service_qzggrqi"
    const TEMPLATE_ID = "template_qzcu4d7"
    const PUBLIC_KEY = "u0U_J1MlZvUX7Rt4-"


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(SERVER_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                setTimeout(() => {
                    toast({
                        title: "Message Sent!",
                        description: "Thank you for your message. I'll get back to you as soon as possible.",
                    });
                    setIsSubmitting(false);
                }, 1500);
            })
            .catch(() => {
                setTimeout(() => {
                    toast({
                        title: "Failed to Send Message",
                        description: "Oops! Something went wrong. Please try again later.",
                    });
                    setIsSubmitting(false);
                }, 1500);
            })
    }



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
                                <h4 className="font-medium text-left"> Email</h4>
                                <a
                                    href="mailto:amitbruhim33@gmail.com?subject=Hello%20from%20your%20portfolio&body=Hi%2C%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20was%20really%20impressed.%20I%20have%20an%20opportunity%20for%20you.%0D%0A%0D%0ABest%20regards%2C%0D%0A[Your%20Name]"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    amitbruhim33@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium text-left"> Phone</h4>
                                <a
                                    href="tel:+972528964070"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    (+972) - 0528964070
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium text-left"> Location</h4>
                                <a
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Petah Tikva, Tel Aviv Dist., Israel
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Linkedin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium text-left"> Linkedin</h4>
                                <a
                                    href="https://www.linkedin.com/in/amit-bruhim"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Amit Bruhim
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-3 rounded-lg shadow-xs"
                    onSubmit={handleSubmit}
                >
                    <h3 className="text-2xl font-semibold mb-1">
                        Send A Message
                    </h3>

                    <form className="space-y-3">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-1 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="John Doe..."
                                required
                            />

                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-1 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="john@gmail.com"
                                required
                            />

                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello, I'd like to talk about..."
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer"
                            )}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}