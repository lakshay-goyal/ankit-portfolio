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
    <section id="tools" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-portfolio-primary">
          Tools I Use
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-16 h-16 object-contain mb-4"
                />
                <p className="text-sm font-medium text-center">{tool.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};