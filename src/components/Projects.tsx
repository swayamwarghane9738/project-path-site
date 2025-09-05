import { ExternalLink, Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "CAPSCO - E-commerce Platform",
      description: "Modern e-commerce web application for selling caps created using AI no-code tools. Features a fully responsive design with clean UI/UX and seamless shopping experience.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
      category: "Full Stack",
      featured: true
    },
    {
      title: "Cafe Website",
      description: "AI-Generated modern, fully responsive cafe website with elegant design and smooth user experience. Showcases menu items, location, and online ordering functionality.",
      technologies: ["React", "TypeScript", "Vite"],
      category: "Frontend",
      featured: true
    },
    {
      title: "Instant BG Reveal",
      description: "Sleek AI-powered background removal web application. Users can upload images and get instant background removal with high-quality results.",
      technologies: ["React", "JavaScript", "CSS"],
      category: "AI Tool",
      featured: true
    },
    {
      title: "Dribbble Clone",
      description: "Pixel-perfect recreation of Dribbble's interface using CSS Grid and Flexbox. Features responsive design optimized for both mobile and desktop viewing.",
      technologies: ["CSS Grid", "Flexbox", "CSS"],
      category: "Frontend"
    },
    {
      title: "Netflix Clone",
      description: "Responsive streaming platform interface clone with modern design patterns. Implements responsive design using HTML, CSS, and Bootstrap framework.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      category: "Frontend"
    },
    {
      title: "Zomato Clone",
      description: "Faithful recreation of Zomato's user interface with responsive design. Features restaurant listings, search functionality, and mobile-first approach.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      category: "Frontend"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of modern web applications combining traditional front-end technologies with AI-powered development tools
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border/50 hover:border-primary/30 hover:-translate-y-3"
              >
                {/* Project Header */}
                <div className="h-2 bg-gradient-to-r from-primary to-primary-glow"></div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center shadow-lg">
                      <Code2 className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1.5 bg-muted/70 text-muted-foreground text-xs font-medium rounded-lg border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="flex-1 h-11 font-semibold">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 h-11 font-semibold">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="border-t border-border/30 pt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Other Projects
              </h3>
              <p className="text-muted-foreground">
                Additional projects showcasing frontend development skills
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-border/50 hover:border-primary/20 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-6">
                    <h4 className="text-xl font-bold text-foreground leading-tight">
                      {project.title}
                    </h4>
                    <span className="px-3 py-1.5 bg-muted/70 text-muted-foreground text-xs font-medium rounded-lg border border-border/30 ml-3 flex-shrink-0">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="ghost" size="sm" className="flex-1 h-10">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 h-10">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
