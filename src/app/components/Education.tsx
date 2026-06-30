import React from "react";
import EducationCard from "./EducationCard";

const educationData = [
    {
      
    "institution": "High Tech - Rabat",
    "degree": "Bachelor's degree in Computer Engineering",
    "period": "2025 - 2026",
  },
  {
        "institution": "OFPPT CFPM - Skhirat",
        "degree": "Specialized Technician Diploma in Full Stack Development",
        "period": "2022 - 2024",
        
      },
      {
        "institution": "Ahmed Al Hansali - Sale ",
        "degree": "Baccalaureate in Experimental Sciences, French Option",
        "period": "2019 - 2022",
       
      }
      
];

const Education: React.FC = () => {
  return (
    <div className="space-y-4">
      {educationData.map((edu, index) => (
        <EducationCard
          key={index}
          institution={edu.institution}
          degree={edu.degree}
          period={edu.period}
         
        />
      ))}
    </div>
  );
};

export default Education;
