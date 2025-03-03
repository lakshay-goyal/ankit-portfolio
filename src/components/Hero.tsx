import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center p-6 bg-gradient-to-b from-portfolio-soft to-white">
      <div className="animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-portfolio-primary via-portfolio-accent to-portfolio-primary bg-clip-text text-transparent">
          Ankit Kumar
        </h1>
        <h2 className="text-xl md:text-2xl mb-6 text-gray-700 font-light">
          Data And Business Analytics
        </h2>
        <p className="max-w-2xl text-gray-600 mb-8 leading-relaxed">
        Data-driven Product & Project Manager skilled in Business & Data Analytics, strategy, and optimization.</p>
        <div className="flex gap-4 justify-center">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full hover:scale-110 transition-transform duration-200 hover:bg-portfolio-primary hover:text-white"
          >
            <a href="https://github.com/Ankit-Kumar2005" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full hover:scale-110 transition-transform duration-200 hover:bg-portfolio-primary hover:text-white"
          >
            <a href="https://www.linkedin.com/in/ankit-kumar-293946319/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full hover:scale-110 transition-transform duration-200 hover:bg-portfolio-primary hover:text-white"
          >
            <a href="mailto:ankitkrthakur881@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};