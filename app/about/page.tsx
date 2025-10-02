import React from "react";
import "/app/globals.css";
import { NavBar } from "@/app/components/NavBar";
import { FootBar } from "@/app/components/FootBar";
import { Card } from "@/app/components/Card";
import { Badges } from "@/app/components/Badges";
import { Typewriter } from "@/app/components/Typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getTextColorClass, type ColorType } from "@/app/colorConfig";
import {
  faGraduationCap,
  faCode,
  faHandshake,
  faFlask,
  faUserGroup,
  faRobot,
  faHeartPulse,
  faLaptopCode,
  faUsers,
  faRocket,
  faGamepad,
  faTools,
  faCheckCircle,
  faSchool,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { faGithub, faOrcid } from "@fortawesome/free-brands-svg-icons";
const HeroSection: React.FC = () => (
  <div className="min-h-screen flex flex-col lg:flex-row relative mask-fade-bottom-sm lg:mask-fade-bottom">
    <div className="lg:w-1/2 relative overflow-hidden">
      <div className="group relative w-full h-full min-h-[60vh] lg:min-h-screen">
        <Image
          src="/Display.jpg"
          alt="Professional Portrait - Bojun Zhang"
          fill
          quality={100}
          className="object-cover transform group-hover:scale-105 transition-all duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/20 lg:bg-gradient-to-r lg:from-slate-900/50 lg:via-transparent lg:to-transparent" />
      </div>
    </div>
    <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-12 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-indigo-900/90 to-purple-900/90 animate-gradient-fast backdrop-blur-sm"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 -right-20 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 border-l border-cyan-500/30 lg:border-l-0"></div>
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="hidden lg:flex justify-center lg:justify-start">
          <div className="group relative">
            <Image
              src="/Profile.jpg"
              alt="Professional Profile Photo"
              width={160}
              height={160}
              quality={100}
              className="rounded-full border-4 border-cyan-500/30 shadow-2xl transform group-hover:scale-105 group-hover:brightness-110 group-hover:shadow-cyan-500/30 transition-all duration-500"
            />
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="font-dune text-2xl md:text-3xl mb-4 font-semibold text-white drop-shadow-[0_0_5px_cyan]">
            <Typewriter text="Bojun Zhang" delay={150} />
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
            PhD Candidate in Mechanical Engineering
            <br />
            <span className="text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300">
              Xi'an Jiaotong University
            </span>
          </p>
          <p className="text-slate-400 text-base leading-relaxed mb-8 group-hover:text-slate-200 transition-colors duration-300">
            Specializing in human-centered AI applications and medical
            technology innovation. Passionate about bridging engineering
            principles with human factors research to create impactful solutions
            at the intersection of technology and human needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center space-x-3 justify-start group hover:scale-105 transition-transform duration-300">
              <FontAwesomeIcon
                icon={faSchool}
                className="text-cyan-400 group-hover:text-cyan-300 w-5"
              />
              <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                XJTU
              </span>
            </div>
            <div className="flex items-center space-x-3 justify-start group hover:scale-105 transition-transform duration-300">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-cyan-400 group-hover:text-cyan-300 w-5"
              />
              <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                Xi'an, China
              </span>
            </div>
            <div className="flex items-center space-x-3 justify-start group hover:scale-105 transition-transform duration-300">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-cyan-400 group-hover:text-cyan-300 w-5"
              />
              <a
                href="mailto:a@likecat.cn"
                className="text-slate-300 hover:text-cyan-200 transition-colors duration-300 group-hover:underline"
              >
                a@likecat.cn
              </a>
            </div>
            <div className="flex items-center space-x-3 justify-start group hover:scale-105 transition-transform duration-300">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-cyan-400 group-hover:text-cyan-300 w-5"
              />
              <a
                href="https://github.com/alikecat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-cyan-200 transition-colors duration-300 group-hover:underline"
              >
                alikecat
              </a>
            </div>
            <div className="flex items-center space-x-3 justify-start group hover:scale-105 transition-transform duration-300">
              <FontAwesomeIcon
                icon={faOrcid}
                className="text-cyan-400 group-hover:text-cyan-300 w-5"
              />
              <a
                href="https://orcid.org/0000-0002-1867-0243"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-cyan-200 transition-colors duration-300 group-hover:underline"
              >
                0000-0002-1867-0243
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const CoreResearchSection: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
    <Card color="cyan" hoverEffect={true}>
      <div className="text-2xl mb-3 flex justify-center">
        <FontAwesomeIcon icon={faRocket} />
      </div>
      <h3 className="font-semibold mb-3 text-center">
        Core Research Focus
      </h3>
      <ul className="space-y-2 text-sm max-w-xs mx-auto">
        {[
          { text: "Artificial Intelligence Applications", color: "green" },
          { text: "Human Factors Engineering & Ergonomics", color: "purple" },
          { text: "Medical-Engineering Integration", color: "blue" },
          { text: "Human-Computer Interaction", color: "orange" },
        ].map((item, index) => {
          const colorClass = getTextColorClass(item.color as ColorType);
          return (
            <li
              key={index}
              className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
            >
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={`${colorClass} mr-2`}
              />
              <span className={colorClass}>{item.text}</span>
            </li>
          );
        })}
      </ul>
    </Card>
    <Card color="blue" hoverEffect={true}>
      <div className="text-2xl mb-3 flex justify-center">
        <FontAwesomeIcon icon={faGraduationCap} />
      </div>
      <h3 className="font-semibold mb-3 text-center">
        Academic Foundation
      </h3>
      <p className="leading-relaxed text-center">
        PhD candidate in <strong>Mechanical Engineering</strong> at{" "}
        <strong>Xi'an Jiaotong University</strong>, leveraging engineering
        principles to advance human-centered AI and medical technology
        innovation.
      </p>
    </Card>
  </div>
);
const ResearchExpertiseSection: React.FC = () => {
  const content = [
    {
      color: "green",
      icon: faRobot,
      title: "Artificial Intelligence Applications",
      items: ["Visual saliency models", "AI algorithms", "AI-driven analysis"],
    },
    {
      color: "purple",
      icon: faUserGroup,
      title: "Human Factors Engineering",
      items: [
        "Eye tracking",
        "Electrophysiology",
        "Workload assessment",
        "Situational awareness",
      ],
    },
    {
      color: "blue",
      icon: faHeartPulse,
      title: "Medical-Engineering Integration",
      items: [
        "Medical device design",
        "Usability evaluation",
        "Healthcare technology",
      ],
    },
    {
      color: "orange",
      icon: faFlask,
      title: "Human-Computer Interaction",
      items: [
        "Desktop apps",
        "Mobile interfaces",
        "3D game UI",
        "Interactive systems",
      ],
    },
  ];
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400 flex items-center justify-center gap-2">
        <FontAwesomeIcon icon={faFlask} />
        Research Expertise
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
        {content.map((domain, index) => {
          const colorClass = getTextColorClass(domain.color as ColorType);
          return (
            <Card
              key={index}
              color={domain.color as ColorType}
              hoverEffect={true}
            >
              <div className="text-2xl mb-3 flex justify-center">
                <FontAwesomeIcon icon={domain.icon} className={colorClass} />
              </div>
              <h4 className={`font-semibold mb-3 text-center ${colorClass}`}>
                {domain.title}
              </h4>
              <Badges
                items={domain.items}
                color={domain.color as "green" | "purple" | "blue" | "orange"}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};
const TechnicalSkillsSection: React.FC = () => {
  const content = [
    {
      color: "green",
      icon: faCode,
      title: "AI & Programming",
      items: ["Python", "PyTorch", "TensorFlow", "JavaScript/TS", "OpenCV"],
    },
    {
      color: "purple",
      icon: faFlask,
      title: "Research & Analysis",
      items: ["Tobii", "Biopac", "PsychoPy", "SPSS", "MATLAB"],
    },
    {
      color: "blue",
      icon: faTools,
      title: "Engineering & Design",
      items: ["SolidWorks", "ANSYS", "Rhino", "KeyShot", "Axure"],
    },
    {
      color: "orange",
      icon: faGamepad,
      title: "Game & Interactive",
      items: ["React", "Unity", "Unreal Engine", "HTML5", "CSS", "Android Dev"],
    },
  ];
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400 flex items-center justify-center gap-2">
        <FontAwesomeIcon icon={faLaptopCode} />
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {content.map((skill, index) => {
          const colorClass = getTextColorClass(skill.color as ColorType);
          return (
            <Card
              key={index}
              color={skill.color as ColorType}
              hoverEffect={true}
            >
              <div className="text-2xl mb-3 flex justify-center">
                <FontAwesomeIcon icon={skill.icon} className={colorClass} />
              </div>
              <h4 className={`font-semibold mb-3 text-center ${colorClass}`}>
                {skill.title}
              </h4>
              <Badges
                items={skill.items}
                color={skill.color as "green" | "purple" | "blue" | "orange"}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};
const CollaborationOpportunitiesSection: React.FC = () => {
  const content = [
    {
      color: "purple",
      icon: faGraduationCap,
      title: "Research Collaborations",
      items: [
        "Joint research projects",
        "Academic partnerships",
        "Research funding applications",
        "Technical consulting for research",
      ],
    },
    {
      color: "blue",
      icon: faLaptopCode,
      title: "Development Work",
      items: [
        "Freelance development projects",
        "Software development contracts",
        "Prototype and MVP development",
        "Technical consulting services",
      ],
    },
  ];
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400 flex items-center justify-center gap-2">
        <FontAwesomeIcon icon={faUsers} />
        Collaboration Opportunities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {content.map((items, index) => {
          const colorClass = getTextColorClass(items.color as ColorType);
          return (
            <Card
              key={index}
              color={items.color as ColorType}
              hoverEffect={true}
            >
              <div className="text-2xl mb-3 flex justify-center">
                <FontAwesomeIcon icon={items.icon} className={colorClass} />
              </div>
              <h4 className={`font-semibold mb-3 text-center ${colorClass}`}>
                {items.title}
              </h4>
              <ul className="space-y-2 text-sm max-w-xs mx-auto">
                {items.items.map((item: string, itemIndex: number) => (
                  <li key={itemIndex} className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className={`${colorClass} mr-2`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
const ContactSection: React.FC = () => (
  <Card color="cyan" hoverEffect={true}>
    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
      <FontAwesomeIcon icon={faHandshake} />
      Let's Work Together
    </h3>
    <p className="mb-4">
      I'm actively seeking research collaborations, freelance development
      projects, and full-time opportunities. Whether you need a technical
      partner for your research or a developer for your software project, let's
      discuss how we can work together.
    </p>
    <div className="flex flex-wrap gap-4">
      <a
        href="mailto:a@likecat.cn"
        className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-cyan-500/30 overflow-hidden inline-block"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative z-10 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
          Get in Touch
        </span>
      </a>
    </div>
  </Card>
);
const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900/80 via-blue-900/80 to-slate-900/80 overflow-x-hidden">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-slate-900/80">
        <NavBar />
      </header>
      <main className="flex-1 backdrop-blur-sm w-full">
        <HeroSection />
        <div className="w-full px-4 py-12">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-8 w-full">
              <CoreResearchSection />
              <ResearchExpertiseSection />
              <TechnicalSkillsSection />
              <CollaborationOpportunitiesSection />
              <ContactSection />
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-auto w-full">
        <FootBar />
      </footer>
    </div>
  );
};
export default AboutPage;
