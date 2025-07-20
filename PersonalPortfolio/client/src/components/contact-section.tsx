import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-300">Ready to discuss data analytics opportunities and collaborations</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Currently working as a Reports Executive and actively seeking opportunities in data analytics and PowerBI development. 
              Let's discuss how my technical skills, hands-on experience, and passion for data can contribute to your organization's success.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-300">devjanibb07@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-gray-300">linkedin.com/in/devjani24</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium">GitHub</div>
                  <div className="text-gray-300">github.com/DEVJANI24</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <a href="tel:+919974150236" className="text-gray-300 hover:text-white transition-colors">
                    +91 9974150236
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    placeholder="Your full name"
                    className="mt-2 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    placeholder="your.email@example.com"
                    className="mt-2 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange("message")}
                    placeholder="Tell me about the opportunity or project you'd like to discuss..."
                    rows={5}
                    className="mt-2 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-primary focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
