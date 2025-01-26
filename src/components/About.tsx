import { FileText, Video } from "lucide-react";
import { Button } from "./ui/button";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-portfolio-primary">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Profile"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              I am a passionate developer with expertise in building modern web applications.
              My journey in technology has been driven by curiosity and a desire to create
              impactful solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <a href="/path-to-resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                <a href="https://youtube.com/your-video" target="_blank" rel="noopener noreferrer">
                  Watch Video Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};