import React from "react";
import Image from "next/image";

import imgPython from "./cisco.png";
import imgJavascript from "./javascript.png";
import imgAlgorithms from "./Algorithms.png";
import imgHtmlCss from "./htlmCss.png";
import imgPhpMysql from "./phpMysql.png";
import imgJQuery from "./Jquery.png";
import imgCndAi from "./cndAi.png";
import { StaticImageData } from "next/image";

interface CertificationProps {
  title: string;
  platform: string;
  date: string;
  image: StaticImageData;
  link: string;
}

const certificationsData: CertificationProps[] = [
  {
    title: "Python",
    platform: "Cisco",
    date: "February 2024",
    image: imgPython,
    link: "https://www.credly.com/badges/848f8339-2ff2-45e8-81b4-467228d4ae8b/public_url",
  },
  {
    title: "Javascript",
    platform: "OpenClassrooms",
    date: "November 2022",
    image: imgJavascript,
    link: "",
  },
  {
    title: "Algorithms",
    platform: "OpenClassrooms",
    date: "November 2022",
    image: imgAlgorithms,
    link: "",
  },
  {
    title: "Html and Css",
    platform: "OpenClassrooms",
    date: "November 2022",
    image: imgHtmlCss,
    link: "",
  },
  {
    title: "Php and MySQL",
    platform: "OpenClassrooms",
    date: "April 2022",
    image: imgPhpMysql,
    link: "",
  },
  {
    title: "JQuery",
    platform: "OpenClassrooms",
    date: "January 2023",
    image: imgJQuery,
    link: "",
  },
  {
    title: "Participation in Digitalization and AI",
    platform: "Cnd-AI",
    date: "July 2023",
    image: imgCndAi,
    link: "",
  },
];

const CertificationsDisplay: React.FC = () => {
  return (
    <div className=" p-15 sm:p-6">
     
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {certificationsData.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            {cert.link ? (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <CertificationCard cert={cert} />
              </a>
            ) : (
              <div className="">
                <CertificationCard cert={cert} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CertificationCard: React.FC<{ cert: CertificationProps }> = ({ cert }) => (
  <div className="text-center p-25 sm:p-4">
    <Image
      src={cert.image}
      alt={`${cert.title} Certification`}
      className=" sm:w-full  mb-4 rounded-lg"
    />
    <h3 className=" text-xs sm:text-lg font-semibold text-gray-900 dark:text-white">
      {cert.title}
    </h3>
    <p className="text-xs text-gray-600 dark:text-gray-400">{cert.platform}</p>
    <p className="text-xs text-gray-500 dark:text-gray-500">{cert.date}</p>
  </div>
);

export default CertificationsDisplay;
