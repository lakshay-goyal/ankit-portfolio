import { Hero } from "@/components/Hero";
// import { ProjectList } from "@/components/ProjectList";
import { Skills } from "@/components/Skills";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Tools } from "@/components/Tools";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <About />
      {/* <div id="projects">
        <ProjectList />
      </div> */}
      <div id="skills">
        <Skills />
      </div>
      <Achievements />
      <Tools />
      <Contact />
    </div>
  );
};

export default Index;