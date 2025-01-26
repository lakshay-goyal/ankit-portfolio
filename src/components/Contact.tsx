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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-portfolio-primary">
          Contact Me
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <info.icon className="w-8 h-8 mb-4 text-portfolio-accent" />
                <h3 className="font-medium mb-2">{info.label}</h3>
                <a
                  href={info.href}
                  className="text-sm text-gray-600 hover:text-portfolio-primary"
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