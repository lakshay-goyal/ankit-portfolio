import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
  imageUrl: string;
}

export const ProjectCard = ({
  title,
  description,
  techStack,
  demoUrl,
  githubUrl,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl bg-white/50 backdrop-blur-sm border-opacity-50">
      <CardHeader className="p-0 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="mb-4 text-xl font-bold text-portfolio-primary">{title}</CardTitle>
        <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-portfolio-secondary/10 text-portfolio-primary rounded-full text-sm font-medium transition-colors hover:bg-portfolio-secondary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-4 p-6 pt-0">
        <Button 
          variant="outline" 
          size="sm" 
          asChild 
          className="transition-colors hover:bg-portfolio-primary hover:text-white"
        >
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          asChild
          className="transition-colors hover:bg-portfolio-primary hover:text-white"
        >
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github className="h-4 w-4" /> Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};