import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "Tata Group's Data Visualisation: Empowering Business with Effective Insights",
  "Deloitte Australia's Data Analytics",
  "Data Analyst Certification from OneRoadmap",
  "Excel Certification from OneRoadmap"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passionate about leveraging data to solve real-world problems and drive business value
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-dark mb-6">My Journey</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    As a self-taught data analytics enthusiast and Computer Science graduate from Veer Narmad South Gujarat University, 
                    I discovered my passion for transforming raw data into actionable business insights. The ability to uncover 
                    hidden patterns and drive strategic decision-making through data fascinates me.
                  </p>
                  <p>
                    Through extensive hands-on projects and virtual internships with industry leaders like Deloitte and Tata Group, 
                    I've developed strong proficiency in Python (Pandas, NumPy, Matplotlib, Seaborn), SQL, Excel, PowerBI, and Tableau. 
                    My goal is to advance as a PowerBI Developer while continuously expanding my data science expertise.
                  </p>
                  <p>
                    Currently working as a Reports Executive, I combine my analytical skills with real-world experience, 
                    turning complex datasets into compelling visual stories that help organizations make data-driven decisions 
                    for growth and operational efficiency.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-dark mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Education
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-dark">BSc Computer Science</div>
                    <div className="text-sm text-gray-600">Veer Narmad South Gujarat University</div>
                    <div className="text-sm text-gray-500">April 2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-dark mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Certifications
                </h4>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
