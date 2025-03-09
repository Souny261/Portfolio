import React from "react";
const SkillCategory = ({
  title,
  skills
}) => <div className="mb-4">
    <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          {skill}
        </span>)}
    </div>
  </div>;
const About = () => {
  const skillCategories = [{
    title: "Front-End Development",
    skills: ["Reactjs", "Nextjs", "Redux", "Tailwind CSS", "Daisyui"]
  }, {
    title: "Back-End Development",
    skills: ["Golang", "Fiber", "GORM"]
  }, {
    title: "Mobile Development",
    skills: ["Flutter", "Getx", "Riverpod"]
  }, {
    title: "DevOps",
    skills: ["Docker", "Docker Swarm", "Jenkins", "ELK-Stack", "Grafana", "Uptime Kuma"]
  }, {
    title: "Tools",
    skills: ["Git", "GitHub", "Dockerhub", "Telegram BotFather", "CloudFlare"]
  }];
  return <section id="about" className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-700 mb-6">
          A passionate Full-Stack Developer with expertise in building scalable
          web and mobile applications. Proficient in a wide range of
          technologies including Typescript, Reactjs, Golang, Flutter, Docker,
          and CI/CD pipelines. I have a strong background in both front-end and
          back-end development, with a focus on delivering high-quality,
          user-friendly solutions.
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills</h3>
        <div className="space-y-4">
          {skillCategories.map((category, index) => <SkillCategory key={index} title={category.title} skills={category.skills} />)}
        </div>
      </div>
    </section>;
};
export default About;