import React from "react";
import ExperiencesCard from "./ExperiencesCard";
import logo1 from './logoApp24.webp';
import logo2 from './logoDiaa.jpg';
import imgScren1 from './Screenshot 2024-12-29 161251.png';
import imgScren2 from './Screenshot 2024-07-18 142514.png';

const experiencesData = [
  {
    institution: "App24",
    typeContrat: "Internship",
    period: "October 2024 - December 2024",
    taches: "Create modern user interfaces and add i18n translation to the website.",
    chalenges: "Collaborating with a team and learning new technologies with best practices.",
    tecnologies: ["HTML", "CSS", "TailwindCSS", "Next.js", "TypeScript", "React.js", "Laravel"],
    image: logo1,
    screenshot: imgScren1
  },
  {
    institution: "Diaaland",
    typeContrat: "Internship",
    period: "May 2024 - June 2024",
    taches: "Developed a full-stack blog website.",
    chalenges: "Built the website using vanilla programming languages and handled deployment.",
    tecnologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "PHP", "MySQL", "phpMyAdmin"],
    image: logo2,
    screenshot: imgScren2,
    
  },
];

const Experiences: React.FC = () => {
  return (
    <div className="space-y-6">
      {experiencesData.map((exp, index) => (
        <ExperiencesCard
          key={index}
          institution={exp.institution}
          typeContrat={exp.typeContrat}
          period={exp.period}
          taches={exp.taches}
          chalenges={exp.chalenges}
          tecnologies={exp.tecnologies}
          image={exp.image}
          screenshot={exp.screenshot}
        
        />
      ))}
    </div>
  );
};

export default Experiences;
