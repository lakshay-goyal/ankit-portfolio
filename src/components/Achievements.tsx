import { Award, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import pdf1 from "../assets/Certificate/1_Introduction to Python.pdf";
import pdf2 from "../assets/Certificate/2_Social Media Marketing Crash Course.pdf";
import pdf3 from "../assets/Certificate/3_Google Ads for Beginners.pdf";
import pdf4 from "../assets/Certificate/4_On-Premise Sales Job Simulation.pdf";
import pdf5 from "../assets/Certificate/5_Off-Premise Sales Job Simulation.pdf";
import pdf6 from "../assets/Certificate/6_Teamwork Foundations.pdf";
import pdf7 from "../assets/Certificate/7_Email Marketing Cerified.pdf";
import pdf8 from "../assets/Certificate/8_HubSpot SEO II Certified.pdf";
import pdf9 from "../assets/Certificate/9_InBound Marketing Cerified.pdf";
import pdf10 from "../assets/Certificate/10_Fundamentals of digital marketing.pdf";
import pdf11 from "../assets/Certificate/11_Economic Development Job Simulation.pdf";
import pdf12 from "../assets/Certificate/12_BlockChain 101.pdf";
import pdf13 from "../assets/Certificate/13_Sales Job Simulation.pdf";
import pdf14 from "../assets/Certificate/14_Python 101 for Data Science.pdf";
import pdf15 from "../assets/Certificate/15_TCS-ION Career Edge - Young Professional.pdf";
import pdf16 from "../assets/Certificate/16_Big Data Engineer.pdf";


export const Achievements = () => {
  const certificates = [
    {
      title: "Introduction to Python",
      issuer: "IBM",
      date: "2023",
      icon: Award,
      link: pdf1,
    },
    {
      title: "Social Media Marketing Crash Course",
      issuer: "Semrush Academy",
      date: "2023",
      icon: Award,
      link: pdf2,
    },
    {
      title: "Google Ads for Beginners",
      issuer: "Coursera",
      date: "2024",
      icon: Award,
      link: pdf3,
    },
    {
      title: "On-Premise Sales Job Simulation",
      issuer: "RedBull",
      date: "2024",
      icon: Award,
      link: pdf4,
    },
    {
      title: "Off-Premise Sales Job Simulation",
      issuer: "RedBull",
      date: "2024",
      icon: Award,
      link: pdf5,
    },
    {
      title: "Teamwork Foundations",
      issuer: "LinkedIn",
      date: "2024",
      icon: Award,
      link: pdf6,
    },
    {
      title: "Email Marketing Cerified",
      issuer: "HubSpot Academy",
      date: "2024",
      icon: Award,
      link: pdf7,
    },
    {
      title: "HubSpot SEO II Certified",
      issuer: "HubSpot Academy",
      date: "2024",
      icon: Award,
      link: pdf8,
    },
    {
      title: "InBound Marketing Cerified",
      issuer: "HubSpot Academy",
      date: "2024",
      icon: Award,
      link: pdf9,
    },
    {
      title: "Fundamentals of digital marketing",
      issuer: "Google",
      date: "2024",
      icon: Award,
      link: pdf10,
    },
    {
      title: "Economic Development Job Simulation",
      issuer: "Moreton Bay",
      date: "2024",
      icon: Award,
      link: pdf11,
    },
    {
      title: "BlockChain 101",
      issuer: "Infosys SpringBoard",
      date: "2024",
      icon: Award,
      link: pdf12,
    },
    {
      title: "Sales Job Simulation",
      issuer: "PEPSICO",
      date: "2024",
      icon: Award,
      link: pdf13,
    },
    {
      title: "Python 101 for Data Science",
      issuer: "IBM",
      date: "2024",
      icon: Award,
      link: pdf14,
    },
    {
      title: "TCS-ION Career Edge - Young Professional",
      issuer: "TCS-ION",
      date: "2024",
      icon: Award,
      link: pdf15,
    },
    {
      title: "Big Data Engineer",
      issuer: "IBM",
      date: "2024",
      icon: Award,
      link: pdf16,
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
            <a 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
            >
              <Card 
                className="group hover:shadow-lg transition-all duration-300 animate-scaleIn overflow-hidden cursor-pointer"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};