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
    {
      name:"Ubuntu",
      image:"https://imgs.search.brave.com/pZcXyTYewT-Hg1rLk26TTGKpRmRNpkIDY8w3hp52nlg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy91YnVudHUtbG9n/by5wbmc"
    },
    {
      name:"Excel",
      image:"https://imgs.search.brave.com/4HUDi-VTmEYFZUCDTa6Ci9OBIvVkcmm5xF8_99XXZuk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA0L2V4Y2VsLWxv/Z28ucG5n"
    },
    {
      name:"PowerBI",
      image:"https://imgs.search.brave.com/pKowTe049AGuhtpvHPfgn2WQ-7oAeM9T1HdAZ55a9gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/aGlzdG9yeS5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDUvUG93ZXItQkkt/TG9nby0yMDEzLTEw/MjR4NTc2LnBuZw"
    },
    {
      name:"Tableau",
      image:"https://imgs.search.brave.com/4FDBEP9j-zVB454vn4KX24DiuU7EJyP-r2aRMmuAyQY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvdGFibGVhdS1s/b2dvLXBuZy10aDUy/NXc3NXo3N2NjeGM5/LnBuZw"
    },
    {
      name: "Jupyter-Notebook",
      image:"https://imgs.search.brave.com/fM3ic7KjJhlJP_RSKzY_dWDfq7gaTCryxW8T1UMe0vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGF0YWJyaWNrcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMTAvbG9nby1K/dXB5dGVyX2xvZ28u/cG5n"
    },
    {
      name: "Docker",
      image:"https://imgs.search.brave.com/G8i_afQAUJrPfFD6fKm5AQSmWNRN76ZRTPkR_V8uujo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYW5k/LWJyYW5kcy81MTIv/OTdfRG9ja2VyX2xv/Z29fbG9nb3MtNTEy/LnBuZw"
    }
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