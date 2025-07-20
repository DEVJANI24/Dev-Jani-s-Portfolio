import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, TrendingUp, BookOpen } from "lucide-react";

const experiences = [
  {
    title: "Data Analytics Virtual Intern",
    company: "Deloitte Australia",
    duration: "Completed 2024",
    description: "Completed a Deloitte job simulation involving data analysis and forensic technology. Created a comprehensive data dashboard using Tableau and used Excel to classify data and draw business conclusions for strategic decision making.",
    technologies: ["Tableau", "Excel", "Data Analysis", "Forensic Technology"],
    icon: Briefcase,
    color: "bg-primary"
  },
  {
    title: "Data Visualization Specialist",
    company: "Tata Group Virtual Internship", 
    duration: "April 2025",
    description: "Completed a simulation involving creating data visualizations for Tata Consultancy Services. Prepared strategic questions for client senior leadership meetings and created impactful visuals for data analysis to support executive decision making.",
    technologies: ["Data Visualization", "Client Communication", "Executive Reporting", "Strategic Planning"],
    icon: TrendingUp,
    color: "bg-secondary"
  },
  {
    title: "Reports Executive & Sports Coach",
    company: "Vision International School of Excellence",
    duration: "Current Role", 
    description: "Currently working as Reports Executive managing data reporting and analysis while also serving as a Sports Coach. Combining analytical skills with leadership and team management in educational environment.",
    technologies: ["Report Generation", "Data Management", "Leadership", "Team Management"],
    icon: BookOpen,
    color: "bg-accent"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600">Virtual internships and project-based learning experiences</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              return (
                <div key={index} className="relative flex items-start space-x-8">
                  <div className={`flex-shrink-0 w-16 h-16 ${experience.color} rounded-full flex items-center justify-center relative z-10`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <Card className="flex-1 bg-light">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-dark">{experience.title}</h3>
                          <p className="text-secondary font-medium">{experience.company}</p>
                        </div>
                        <Badge variant="secondary" className="bg-white text-gray-500">
                          {experience.duration}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
