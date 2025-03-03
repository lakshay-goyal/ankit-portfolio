import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Data/Business Analyst",
    skills: ["MySQL", "Excel","PowerBI","Tableau","Python","Numpy", "Pandas", "Matplotlib", "Hadoop","Apache-Spark","Big-Data"],
  },
  {
    title: "Project/Product Management",
    skills: ["Python","Scrum","Scrum-Master","Microsoft-Projects","Smartsheet","Jira","Risk Management"],
  },
  {
    title: "Tools & Others",
    skills: ["Machine-Learning","Docker","Linux","Git","Market-Research","Research-Skills","Digital-Marketing","SEO-Optimization","Email-Marketing","InBound-Marketing"],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-portfolio-soft to-white" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-portfolio-primary to-portfolio-accent bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <Card 
              key={category.title}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-scaleIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-portfolio-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-portfolio-soft text-portfolio-primary rounded-full text-sm hover:bg-portfolio-primary hover:text-white transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};