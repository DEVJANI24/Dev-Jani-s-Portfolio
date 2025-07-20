import { Card, CardContent } from "@/components/ui/card";
import { Code, BarChart3, Beaker } from "lucide-react";

const programmingSkills = [
  { name: "Python", level: "Intermediate", percentage: 75 },
  { name: "SQL", level: "Intermediate", percentage: 70 },
  { name: "Java", level: "Intermediate", percentage: 65 }
];

const analyticsTools = [
  { name: "PowerBI", level: "Intermediate", percentage: 75 },
  { name: "Excel", level: "Intermediate", percentage: 70 },
  { name: "Tableau", level: "Beginner", percentage: 45 }
];

const pythonLibraries = [
  { name: "Pandas", level: "Intermediate", percentage: 75 },
  { name: "NumPy", level: "Intermediate", percentage: 70 },
  { name: "Matplotlib", level: "Intermediate", percentage: 70 },
  { name: "Seaborn", level: "Intermediate", percentage: 70 }
];

interface SkillBarProps {
  skill: {
    name: string;
    level: string;
    percentage: number;
  };
  color: string;
}

function SkillBar({ skill, color }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`${color} h-2 rounded-full transition-all duration-500`} 
          style={{ width: `${skill.percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600">Proficiency levels in data analytics tools and technologies</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <Card className="bg-light">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-dark mb-6 flex items-center">
                <Code className="w-6 h-6 mr-2 text-primary" />
                Programming
              </h3>
              <div className="space-y-4">
                {programmingSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} color="bg-primary" />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Analysis Tools */}
          <Card className="bg-light">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-dark mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 mr-2 text-secondary" />
                Analytics Tools
              </h3>
              <div className="space-y-4">
                {analyticsTools.map((tool, index) => (
                  <SkillBar key={index} skill={tool} color="bg-secondary" />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Python Libraries */}
          <Card className="bg-light">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-dark mb-6 flex items-center">
                <Beaker className="w-6 h-6 mr-2 text-accent" />
                Python Libraries
              </h3>
              <div className="space-y-4">
                {pythonLibraries.map((library, index) => (
                  <SkillBar key={index} skill={library} color="bg-accent" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
