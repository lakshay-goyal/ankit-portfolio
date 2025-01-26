import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center p-6 animate-fadeIn">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-portfolio-primary to-portfolio-accent bg-clip-text text-transparent">
        John Doe
      </h1>
      <h2 className="text-xl md:text-2xl mb-6 text-gray-600">
        Full Stack Developer
      </h2>
      <p className="max-w-2xl text-gray-600 mb-8">
        I build beautiful, responsive, and user-friendly web applications using modern technologies.
        Passionate about creating seamless user experiences and solving complex problems.
      </p>
      <div className="flex gap-4">
        <Button variant="outline" size="icon">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a href="mailto:contact@example.com">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};