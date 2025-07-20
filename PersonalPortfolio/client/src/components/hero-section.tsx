import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import devImagePath from "@assets/devimage1_1752991649290.jpg";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/attached_assets/Dev_Jani_Resume_Updated_1752991930373.pdf';
    link.download = 'Dev_Jani_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6 leading-tight">
              Dev Jani
              <span className="block text-2xl md:text-3xl text-secondary mt-2">Data Analytics Enthusiast | Self-Taught</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Self-taught data analytics enthusiast and Computer Science graduate passionate about transforming data into actionable insights. 
              Specializing in Python, SQL, PowerBI, and Tableau to drive data-driven decision making across diverse industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={downloadResume} className="bg-primary text-white hover:bg-primary/90">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToProjects}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                <ArrowDown className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </div>
            <div className="flex space-x-6 mt-8">
              <a href="https://www.linkedin.com/in/devjani24" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/DEVJANI24" className="text-gray-600 hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:devjanibb07@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src={devImagePath} 
              alt="Dev Jani - Professional headshot" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Available for hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
