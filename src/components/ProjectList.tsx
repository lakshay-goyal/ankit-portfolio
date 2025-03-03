import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "My Portfolio",
    description: "A portfolio website built with React, TypeScript, and Tailwind CSS.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://github.com/Ankit-Kumar2005/ankit-portfolio",
    githubUrl: "https://github.com/Ankit-Kumar2005/ankit-portfolio",
    imageUrl: "./src/assets/projects/1_Portfolio.png",
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