import { Hero } from "@/components/Hero";
import { ProjectList } from "@/components/ProjectList";
import { Skills } from "@/components/Skills";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectList />
      <Skills />
      <ContactForm />
    </div>
  );
};

export default Index;