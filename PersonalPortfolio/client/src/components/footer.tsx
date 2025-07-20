import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Footer() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/attached_assets/Dev_Jani_Resume_Updated_1752991930373.pdf';
    link.download = 'Dev_Jani_Resume.pdf';
    link.click();
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Dev Jani. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 items-center">
            <a href="https://www.linkedin.com/in/devjani24" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/DEVJANI24" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="mailto:devjanibb07@gmail.com" className="hover:text-white transition-colors">
              Email
            </a>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={downloadResume}
              className="text-gray-400 hover:text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
