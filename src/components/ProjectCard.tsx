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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
        />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="mb-4">{title}</CardTitle>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-portfolio-secondary text-portfolio-primary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-4 p-6 pt-0">
        <Button variant="outline" size="sm" asChild>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github className="h-4 w-4" /> Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};