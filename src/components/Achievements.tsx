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
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-portfolio-primary">
          Achievements & Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <cert.icon className="w-8 h-8 text-portfolio-accent" />
                <CardTitle className="text-lg">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Issued by {cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};