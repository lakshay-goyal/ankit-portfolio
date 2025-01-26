import { Card, CardContent } from "./ui/card";

export const Tools = () => {
  const tools = [
    {
      name: "Visual Studio Code",
      image: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
    },
    {
      name: "Git",
      image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
    {
      name: "GitHub",
      image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    // Add more tools as needed
  ];

  return (
    <section id="tools" className="py-20 bg-gradient-to-b from-portfolio-soft to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-portfolio-primary to-portfolio-accent bg-clip-text text-transparent">
          Tools I Use
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tools.map((tool, idx) => (
            <Card 
              key={idx} 
              className="group hover:shadow-lg transition-all duration-300 animate-scaleIn border-portfolio-soft"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="flex flex-col items-center justify-center p-8">
                <div className="relative w-20 h-20 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-center text-gray-700">{tool.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};