import React, { useState } from "react";
import { MonitorIcon, ServerIcon, ActivityIcon, GaugeIcon, DatabaseIcon, GlobeIcon, GitBranchIcon, ZoomInIcon, XIcon } from "lucide-react";
import { url } from "inspector";
const ProjectCard = ({
  title,
  description,
  icon: Icon,
  image,
  isDetailed,
  url
}) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  return <div className={`bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 ${isDetailed ? "col-span-full" : ""}`}>
    <div className="p-5">
      <div className="flex items-center mb-3">
        <div className="bg-blue-100 p-2 rounded-full mr-3">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {image && <div className="relative">
        <div className="relative cursor-pointer group" onClick={() => {
          if (url) {
            window.open(url, "_blank");
          } else {
            setIsImageModalOpen(true);
          }
        }}>
          <img src={image} alt={title} className="w-full rounded-lg border border-gray-200" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
            <ZoomInIcon className="text-transparent group-hover:text-white h-8 w-8" />
          </div>
        </div>
        {/* Modal */}
        {isImageModalOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl w-full">
            <button onClick={() => setIsImageModalOpen(false)} className="absolute -top-12 right-0 text-white hover:text-gray-300">
              <XIcon className="h-8 w-8" />
            </button>
            <img src={image} alt={title} className="w-full h-auto rounded-lg" />
          </div>
        </div>}
      </div>}
    </div>
  </div>;
};
const Projects = () => {
  const projects = [{
    title: "Enterprise CI/CD Pipeline & Monitoring System",
    description: `A comprehensive enterprise-level system architecture featuring:
      • Web & API CI/CD Pipeline with Jenkins, Docker, and automated deployment
      • Centralized Logs using ELK Stack (Elasticsearch, Logstash, Kibana)
      • Server Monitoring with Prometheus, Grafana, and Node Exporter
      • Automated notifications via Telegram
      • Multi-environment support (DEV, UAT, PROD)`,
    icon: GitBranchIcon,
    image: "/Screenshot_2025-03-07_at_14.17.04.png",
    isDetailed: true,
    url: "https://app.eraser.io/workspace/2zoMd5OvLzCLkxq0Myf6?origin=share"
  }, {
    title: "Kolao ITHQ Service Monitoring",
    description: "A comprehensive monitoring solution for tracking service health and performance across the organization.",
    image: "/uptime.png",
    icon: GaugeIcon
  }, {
    title: "SabaiFin - Loan Calculator Web",
    description: "A loan calculator website providing users with the ability to calculate their loan repayment amounts and visualize their loan repayment schedule. ",
    image: "/sabaifin.png",
    icon: DatabaseIcon,
    url: "https://fin.sabaiops.site"
  },
  {
    title: "Kokkok Ltry",
    description: "An innovative lottery application for Kokkok Ltry, providing users with the ability to participate in draws, view results, and manage their lottery tickets.",
    image: "/KKL.png",
    icon: DatabaseIcon
  },
  {
    title: "Kokkok Membership",
    description: "A loyalty program application for Kokkok Mart, allowing customers to earn and redeem points, receive exclusive offers, and track their membership status.",
    image: "/KKM.png",
    icon: DatabaseIcon
  },
  {
    title: "Pipeline Management with Jenkins",
    description: "A comprehensive pipeline management system utilizing Jenkins for automated build, test, and deployment processes.",
    image: "/Jenkins.png",
    icon: MonitorIcon
  }, {
    title: "Grafana Dashboard for Server Performance",
    description: "A comprehensive dashboard for monitoring server performance, utilizing Grafana for data visualization and alerting.",
    image: "/Grafana.png",
    icon: MonitorIcon
  }, {
    title: "Internal Audit Web",
    description: "A web application for streamlining and managing internal audit processes and documentation.",
    image: "/IA.png",
    icon: GlobeIcon
  }, {
    title: "LCC Golf Course Web",
    description: "A website for golf course management, bookings, and information.",
    image: "/LCC.png",
    icon: GlobeIcon
  }, {
    title: "Kolao ITHQ Centralized Logs Monitoring",
    description: "A centralized system for collecting, analyzing, and monitoring logs across various applications and services.",
    image: "/LOGS.png",
    icon: DatabaseIcon
  }, {
    title: "IRM CRM System",
    description: "A Application for INTERVIA to provide tenants with real-time notifications and a single application to report issues, streamlining workflows for staff and making it easier for the team to track and manage tasks.",
    image: "/IRM.png",
    icon: DatabaseIcon
  }];
  return <section id="projects" className="py-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => <ProjectCard key={index} title={project.title} description={project.description} icon={project.icon} image={project.image} isDetailed={project.isDetailed} url={project.url} />)}
    </div>
  </section>;
};
export default Projects;