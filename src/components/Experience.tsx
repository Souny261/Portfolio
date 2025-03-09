import React from "react";
import { BriefcaseIcon } from "lucide-react";
const ExperienceItem = ({
  company,
  period,
  role,
  responsibilities,
  image
}) => <div className="mb-8 relative">
    <div className="flex items-center mb-2">
      <img src={image} alt={company} className="h-12 w-12 rounded-full mr-3 shadow-md" />
      <h3 className="text-xl font-bold text-gray-900">{company}</h3>
    </div>
    <div className="ml-12">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
        <h4 className="font-medium text-blue-600">{role}</h4>
        <span className="text-gray-500">{period}</span>
      </div>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        {responsibilities.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  </div>;
const Experience = () => {
  const experiences = [{
    company: "KOLAO Group",
    period: "2022 - Current",
    role: "Full-Stack Developer",
    image: "/kolao.png",
    responsibilities: ["Leading the development and implementation of a comprehensive Design System for group companies.", "Managing CI/CD pipelines using Jenkins.", "Implementing server and service monitoring solutions.", "Working with Docker, Docker Swarm, and Ubuntu for deployment and infrastructure management.", "Using Typescript, Reactjs, Golang, and Fiber for full-stack development."]
  }, {
    company: "Kokkok Sole",
    period: "2021 - 2022",
    role: "Developer",
    image: "/kks.jpg",
    responsibilities: ["Developed and maintained mobile and web applications using Flutter, Getx, Typescript, and Reactjs.", "Managed infrastructure using Docker, Docker Swarm, and Ubuntu.", "Worked on projects like Kokkok Membership, Kokkok Ltry, and Kokkok Ltry X Kokkok Move."]
  }, {
    company: "Lao Telecom Company Ltd",
    period: "2019 - 2020",
    role: "Mobile Developer",
    image: "/ltc.png",
    responsibilities: ["Developed mobile applications using Flutter and Getx.", "Collaborated on UI/UX design ideation."]
  }];
  return <section id="experience" className="py-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
    <div className="bg-white shadow rounded-lg p-6">
      {experiences.map((exp, index) => <ExperienceItem key={index} company={exp.company} period={exp.period} role={exp.role} responsibilities={exp.responsibilities} image={exp.image} />)}
    </div>
  </section>;
};
export default Experience;