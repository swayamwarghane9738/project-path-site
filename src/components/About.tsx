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

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science student at <span className="text-primary font-semibold">Priyadarshini College of Engineering, Nagpur</span>, 
                with a strong focus on full-stack web development and modern UI/UX design.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in creating responsive web applications using cutting-edge technologies like 
                <span className="text-primary font-semibold"> React, TypeScript, and Tailwind CSS</span>. My approach combines traditional front-end skills 
                with modern AI-powered development tools to rapidly prototype and build exceptional user experiences.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                What sets me apart is my passion for <span className="text-accent-orange font-semibold">"vibe coding"</span> — blending creativity with intuitive 
                development. I believe in clean, maintainable code and designs that not only look great 
                but feel natural to use.
              </p>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20">
                  <h4 className="font-bold text-primary mb-3 text-lg">Frontend</h4>
                  <p className="text-muted-foreground leading-relaxed">React, TypeScript, HTML5, CSS3, Tailwind CSS</p>
                </div>
                
                <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20">
                  <h4 className="font-bold text-primary mb-3 text-lg">Backend</h4>
                  <p className="text-muted-foreground leading-relaxed">Node.js, Supabase, JavaScript</p>
                </div>
                
                <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20">
                  <h4 className="font-bold text-primary mb-3 text-lg">Tools</h4>
                  <p className="text-muted-foreground leading-relaxed">Vite, Git, VS Code, Figma</p>
                </div>
                
                <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20">
                  <h4 className="font-bold text-primary mb-3 text-lg">Design</h4>
                  <p className="text-muted-foreground leading-relaxed">UI/UX, Responsive Design, Prototyping</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-card to-card/50 p-8 rounded-xl shadow-lg border border-border/50">
                <h4 className="font-bold text-primary mb-6 text-xl">Current Focus</h4>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Building modern web applications with React & TypeScript</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Exploring AI-powered development workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Perfecting responsive design techniques</span>
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