import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 234 567 890",
      href: "tel:+1234567890",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "City, Country",
      href: "https://maps.google.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-portfolio-soft">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-portfolio-primary to-portfolio-accent bg-clip-text text-transparent">
          Contact Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, idx) => (
            <Card 
              key={idx} 
              className="group hover:shadow-lg transition-all duration-300 animate-scaleIn border-portfolio-soft"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-6 p-4 bg-portfolio-soft rounded-full group-hover:bg-portfolio-primary transition-colors duration-300">
                  <info.icon className="w-8 h-8 text-portfolio-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-medium mb-3 text-lg">{info.label}</h3>
                <a
                  href={info.href}
                  className="text-gray-600 hover:text-portfolio-primary transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {info.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};