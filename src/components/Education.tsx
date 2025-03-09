import React from "react";
import { GraduationCapIcon } from "lucide-react";
const EducationItem = ({
  degree,
  institution,
  period,
  image
}) => <div className="mb-6 last:mb-0 relative">
    <div className="flex items-center mb-2">
      <img src={image} alt={period} className="h-12 w-12 rounded-full mr-3 shadow-md" />
      <h3 className="text-lg font-bold text-gray-900">{degree}</h3>
    </div>
    <div className="ml-12">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <h4 className="font-medium text-blue-600">{institution}</h4>
        <span className="text-gray-500">{period}</span>
      </div>
    </div>
  </div>;
const Education = () => {
  const education = [{
    degree: "Bachelor's Degree in Information Technology",
    institution: "National University of Laos",
    period: "2018 - 2020",
    image: "/noul.png"
  }, {
    degree: "Bachelor's Degree in English Language and Literature/Letters",
    institution: "National University of Laos",
    period: "2017 - 2020",
    image: "/noul.png"
  }, {
    degree: "Associate's Degree in Information Technology",
    institution: "Lao-Korea Institute for Skills Development",
    period: "2016 - 2018",
    image: "/kr.jpg"

  }];
  return <section id="education" className="py-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
    <div className="bg-white shadow rounded-lg p-6">
      {education.map((edu, index) => <EducationItem key={index} degree={edu.degree} institution={edu.institution} period={edu.period} image={edu.image} />)}
    </div>
  </section>;
};
export default Education;