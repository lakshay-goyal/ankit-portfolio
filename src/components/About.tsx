import { FileText, Video } from "lucide-react";
import { Button } from "./ui/button";
import Image from '../assets/Ankit.jpeg'
import Resume from '../assets/Resume.pdf'
import VideoResume from '../assets/VideoResume.mp4'

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-portfolio-soft">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-portfolio-primary to-portfolio-accent bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-scaleIn">
            <div className="relative group">
              <img
                src={Image}
                alt="Profile"
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-2xl bg-portfolio-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="space-y-8 animate-fadeIn">
            <p className="text-gray-700 leading-relaxed text-lg">
            I am a data-driven Product and Project Manager with expertise in Business and Data Analytics. With a strong analytical mindset and strategic vision, I leverage data insights to drive product innovation, optimize business processes, and enhance decision-making. Passionate about solving complex problems, I excel in cross-functional collaboration, agile methodologies, and delivering impactful solutions that align with business goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="flex items-center gap-2 bg-portfolio-primary hover:bg-portfolio-accent transition-colors duration-300"
              >
                <FileText className="w-4 h-4" />
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-all duration-300"
              >
                <Video className="w-4 h-4" />
                <a href={VideoResume} target="_blank" rel="noopener noreferrer">
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