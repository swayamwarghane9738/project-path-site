import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-5 p-6 bg-card rounded-xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center shadow-md">
                    <Mail className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Email</h4>
                    <p className="text-muted-foreground">swayamwarghane7218@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-6 bg-card rounded-xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center shadow-md">
                    <Phone className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Phone</h4>
                    <p className="text-muted-foreground">+91 7218551718</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-6 bg-card rounded-xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center shadow-md">
                    <MapPin className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Location</h4>
                    <p className="text-muted-foreground">Nagpur, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-bold text-foreground mb-6 text-lg">Find me on</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/swayamwarghane" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-border/50"
                  >
                    <Github className="w-7 h-7 text-foreground" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/swayamwarghane" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-border/50"
                  >
                    <Linkedin className="w-7 h-7 text-foreground" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl shadow-xl p-10 border border-border/50">
              <h3 className="text-3xl font-bold text-foreground mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-semibold text-foreground mb-3">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full h-12 text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-semibold text-foreground mb-3">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full h-12 text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-base font-semibold text-foreground mb-3">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="w-full h-12 text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-semibold text-foreground mb-3">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                    required
                    rows={6}
                    className="w-full resize-none text-base"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full shadow-lg hover:shadow-xl transition-all duration-300 h-14 text-lg font-semibold"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-3" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;