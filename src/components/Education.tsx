import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Priyadarshini College of Engineering, Nagpur",
      duration: "2023-2027",
      description: "Currently pursuing undergraduate degree with focus on software development, data structures, algorithms, and modern web technologies."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "TIP-TOP Convent Jr College",
      duration: "2022-2023", 
      description: "Completed higher secondary education with strong foundation in mathematics and science."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "M.K.H Sancheti Public School",
      duration: "2020-2021",
      description: "Completed secondary education with excellent academic performance and active participation in technical activities."
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-border/50 hover:border-primary/20"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2 md:mb-0">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-accent-orange font-semibold">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg text-primary font-semibold mb-3">
                      {edu.institution}
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;