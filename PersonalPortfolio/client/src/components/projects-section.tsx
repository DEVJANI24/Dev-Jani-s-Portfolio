import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "HR Analysis (Attrition)",
    description: "Comprehensive PowerBI dashboard analyzing employee attrition patterns, identifying key factors contributing to turnover and providing actionable insights for HR decision-making.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    technologies: ["PowerBI", "DAX", "Data Analysis"],
    liveUrl: "https://www.linkedin.com/in/devjani24",
    githubUrl: "https://github.com/DEVJANI24"
  },
  {
    title: "Madhav Ecommerce Sales Analysis",
    description: "Interactive PowerBI dashboard for e-commerce sales performance analysis, tracking revenue trends, customer behavior, and product performance across different regions and time periods.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    technologies: ["PowerBI", "Data Visualization", "Sales Analytics"],
    liveUrl: "https://www.linkedin.com/in/devjani24",
    githubUrl: "https://github.com/DEVJANI24"
  },
  {
    title: "Diwali Sales Analysis",
    description: "Python-based exploratory data analysis of Diwali sales data using Pandas, Matplotlib, and Seaborn. Identified sales patterns, customer demographics, and seasonal trends for business insights.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    liveUrl: "https://github.com/DEVJANI24",
    githubUrl: "https://github.com/DEVJANI24"
  },
  {
    title: "IMDB Movies Analysis",
    description: "Comprehensive movie industry analysis using Python libraries and Excel. Analyzed movie ratings, box office performance, genre trends, and director/actor performance metrics.",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "Pandas", "NumPy", "Excel"],
    liveUrl: "https://github.com/DEVJANI24",
    githubUrl: "https://github.com/DEVJANI24"
  },
  {
    title: "Retail Sales Analysis",
    description: "SQL-based retail sales performance analysis with Excel visualization. Created complex queries to analyze sales trends, inventory management, and customer purchasing patterns.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    technologies: ["SQL", "Excel", "Data Analysis"],
    liveUrl: "https://github.com/DEVJANI24",
    githubUrl: "https://github.com/DEVJANI24"
  },
  {
    title: "Library Management Analysis",
    description: "Database-driven analysis of library operations using SQL and Excel. Analyzed book circulation patterns, member behavior, and operational efficiency metrics.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    technologies: ["SQL", "Excel", "Database Analysis"],
    liveUrl: "https://github.com/DEVJANI24",
    githubUrl: "https://github.com/DEVJANI24"
  },
  {
    title: "Sales Shayak CRM",
    description: "Final year project: Full-stack CRM application built with ASP.NET, C#, and Python. Features customer management, sales tracking, and data analytics dashboard for business insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    technologies: ["ASP.NET", "C#", "Python", "JavaScript"],
    liveUrl: "https://github.com/DEVJANI24",
    githubUrl: "https://github.com/DEVJANI24"
  },
  {
    title: "Gameverse",
    description: "Final year project: Gaming platform developed using Python with Pygame and Tkinter libraries. Features multiple games with interactive UI and web-based components.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "Pygame", "Tkinter", "JavaScript"],
    liveUrl: "https://github.com/DEVJANI24",
    githubUrl: "https://github.com/DEVJANI24"
  }
];

const getTechColor = (tech: string) => {
  const colors: Record<string, string> = {
    "PowerBI": "bg-primary/10 text-primary",
    "DAX": "bg-secondary/10 text-secondary",
    "SQL": "bg-accent/10 text-accent",
    "Python": "bg-primary/10 text-primary",
    "Pandas": "bg-secondary/10 text-secondary",
    "Matplotlib": "bg-accent/10 text-accent",
    "Seaborn": "bg-primary/10 text-primary",
    "NumPy": "bg-secondary/10 text-secondary",
    "Excel": "bg-accent/10 text-accent",
    "Data Analysis": "bg-primary/10 text-primary",
    "Data Visualization": "bg-secondary/10 text-secondary",
    "Sales Analytics": "bg-accent/10 text-accent",
    "Database Analysis": "bg-primary/10 text-primary",
    "ASP.NET": "bg-secondary/10 text-secondary",
    "C#": "bg-accent/10 text-accent",
    "JavaScript": "bg-primary/10 text-primary",
    "Pygame": "bg-secondary/10 text-secondary",
    "Tkinter": "bg-accent/10 text-accent"
  };
  return colors[tech] || "bg-gray-100 text-gray-700";
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Data Analytics Projects</h2>
          <p className="text-lg text-gray-600">Showcasing real-world data analysis and visualization projects</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((project, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} className={getTechColor(tech)}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button variant="link" className="text-primary hover:text-primary/80 p-0" asChild>
                    <a href={project.liveUrl}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                  <Button variant="link" className="text-gray-600 hover:text-gray-800 p-0" asChild>
                    <a href={project.githubUrl}>
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {projects.length > 6 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {projects.slice(6).map((project, index) => (
                <Card key={index + 6} className="bg-white shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} className={getTechColor(tech)}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button variant="link" className="text-primary hover:text-primary/80 p-0" asChild>
                        <a href={project.liveUrl}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                      <Button variant="link" className="text-gray-600 hover:text-gray-800 p-0" asChild>
                        <a href={project.githubUrl}>
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white" asChild>
            <a href="https://github.com/DEVJANI24">
              View All Projects on GitHub
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
