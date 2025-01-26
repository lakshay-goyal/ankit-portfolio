import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with cart functionality and payment integration.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://demo1.example.com",
    githubUrl: "https://github.com/example/project1",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    demoUrl: "https://demo2.example.com",
    githubUrl: "https://github.com/example/project2",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard showing forecasts and historical data visualization.",
    techStack: ["React", "D3.js", "Weather API"],
    demoUrl: "https://demo3.example.com",
    githubUrl: "https://github.com/example/project3",
    imageUrl: "/placeholder.svg",
  },
];

export const ProjectList = () => {
  return (
    <section className="py-20 px-6" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};