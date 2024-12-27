import React from "react";
import EducationCard from "./EducationCard";

const educationData = [
    {
        "institution": "OFPPT - CFPM SKHIRAT",
        "degree": "Specialized Technician Diploma in Full Stack Development",
        "period": "2022 - 2024",
        "description": "Specialized in full stack development with hands-on projects and internships."
      },
      {
        "institution": "Ahmed Al Hansali High School",
        "degree": "Baccalaureate in Experimental Sciences, French Option",
        "period": "2019 - 2022",
        "description": "Focused on experimental sciences, laying the groundwork for technical studies."
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
          description={edu.description}
        />
      ))}
    </div>
  );
};

export default Education;
