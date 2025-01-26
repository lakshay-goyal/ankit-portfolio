import { Award, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const Achievements = () => {
  const certificates = [
    {
      title: "Full Stack Development",
      issuer: "Udacity",
      date: "2023",
      icon: Trophy,
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: Award,
    },
    // Add more certificates as needed
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-white to-portfolio-soft">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-portfolio-primary to-portfolio-accent bg-clip-text text-transparent">
          Achievements & Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <Card 
              key={idx} 
              className="group hover:shadow-lg transition-all duration-300 animate-scaleIn overflow-hidden"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                <div className="p-3 bg-portfolio-soft rounded-full group-hover:bg-portfolio-primary transition-colors duration-300">
                  <cert.icon className="w-8 h-8 text-portfolio-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-lg group-hover:text-portfolio-primary transition-colors duration-300">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-sm text-gray-600 mb-1">Issued by {cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};