const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science student at Priyadarshini College of Engineering, Nagpur, 
                with a strong focus on full-stack web development and modern UI/UX design.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in creating responsive web applications using cutting-edge technologies like 
                React, TypeScript, and Tailwind CSS. My approach combines traditional front-end skills 
                with modern AI-powered development tools to rapidly prototype and build exceptional user experiences.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                What sets me apart is my passion for "vibe coding" — blending creativity with intuitive 
                development. I believe in clean, maintainable code and designs that not only look great 
                but feel natural to use.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-primary mb-2">Frontend</h4>
                  <p className="text-sm text-muted-foreground">React, TypeScript, HTML5, CSS3, Tailwind CSS</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-primary mb-2">Backend</h4>
                  <p className="text-sm text-muted-foreground">Node.js, Supabase, JavaScript</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-primary mb-2">Tools</h4>
                  <p className="text-sm text-muted-foreground">Vite, Git, VS Code, Figma</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-primary mb-2">Design</h4>
                  <p className="text-sm text-muted-foreground">UI/UX, Responsive Design, Prototyping</p>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-primary mb-4">Current Focus</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Building modern web applications with React & TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Exploring AI-powered development workflows
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Perfecting responsive design techniques
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;