import React, { useState, useEffect, useRef } from "react";
import "/app/globals.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEnvelope,
  faRobot,
  faUserGroup,
  faHeartPulse,
  faFlask,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/app/components/Card";
import { Badges } from "@/app/components/Badges";
import { NavBar } from "@/app/components/NavBar";
import { FootBar } from "@/app/components/FootBar";
import { Typewriter } from "@/app/components/Typewriter";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-indigo-900/90 to-purple-900/90 animate-gradient-fast" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold mb-4">
            🔬 Research & Development Collaborator
          </div>
        </div>
        <h1 className="font-dune font-bold text-6xl md:text-8xl mb-4 text-white drop-shadow-[0_0_10px_cyan]">
          Likecat
        </h1>
        <p className="font-dune text-2xl md:text-3xl mb-4 font-semibold text-white drop-shadow-[0_0_5px_cyan]">
          <Typewriter text="Bojun Zhang" delay={150} />
          
        </p>
        <p className="text-xl md:text-2xl mb-6 leading-relaxed">
          PhD Candidate in Mechanical Engineering
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Xi'an Jiaotong University
          <br />
          Passionate about creating impactful solutions at the intersection of
          technology and human needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <ActionButton href="/about" icon={faAddressCard}>
            View My Work
          </ActionButton>
          <ActionButton
            href="mailto:a@likecat.cn"
            icon={faEnvelope}
            variant="secondary"
          >
            Get in Touch
          </ActionButton>
        </div>
      </div>
    </section>
  );
};

const ResearchSection: React.FC = () => {
  const researchData = [
    {
      icon: faRobot,
      title: "Artificial Intelligence Applications",
      badges: ["Visual saliency models", "AI algorithms", "AI-driven analysis"],
      color: "green" as const,
    },
    {
      icon: faUserGroup,
      title: "Human Factors Engineering",
      badges: [
        "Eye tracking",
        "Electrophysiology",
        "Workload assessment",
        "Situational awareness",
      ],
      color: "purple" as const,
    },
    {
      icon: faHeartPulse,
      title: "Medical-Engineering Integration",
      badges: [
        "Medical device design",
        "Usability evaluation",
        "Healthcare technology",
      ],
      color: "blue" as const,
    },
    {
      icon: faFlask,
      title: "Human-Computer Interaction",
      badges: [
        "Desktop apps",
        "Mobile interfaces",
        "3D game UI",
        "Interactive systems",
      ],
      color: "orange" as const,
    },
  ];

  return (
    <section id="research" className="py-20 bg-slate-800/50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Research Expertise
          </h2>
          <p className="text-lg text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            Specialized in interdisciplinary research combining mechanical
            engineering, AI, and medical technology. Open to collaborative
            projects and research partnerships.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchData.map((research, index) => {
              return (
                <Card key={index} color={research.color}>
                  <div className="text-2xl mb-3 flex justify-center">
                    <FontAwesomeIcon icon={research.icon} />
                  </div>
                  <h4 className={`font-semibold mb-3 text-center`}>
                    {research.title}
                  </h4>
                  <Badges items={research.badges} color={research.color} />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const CreativeSection: React.FC = () => {
  interface InterestItem {
    src: string;
    alt: string;
    title: string;
    description: string;
  }

  const interests: InterestItem[] = [
    {
      src: "/Design_UI.jpg",
      alt: "Design UI",
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences",
    },
    {
      src: "/Write_Code.jpg",
      alt: "Write Code",
      title: "Full-Stack Development",
      description:
        "Building scalable web applications with modern technologies",
    },
    {
      src: "/Play_Game.jpg",
      alt: "Play Game",
      title: "Game Development",
      description: "Creating immersive gaming experiences",
    },
  ];
  const CreativePassionCard: React.FC<InterestItem> = ({
    src,
    alt,
    title,
    description,
  }) => {
    return (
      <Card className="group relative overflow-hidden !p-0 border-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <Image
          src={src}
          alt={alt}
          width={400}
          height={300}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        </div>
      </Card>
    );
  };
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Creative Passions
          </h2>
          <p className="text-lg text-slate-300 text-center mb-12 max-w-3xl mx-auto">
            Beyond research, I'm passionate about creative pursuits that inspire
            innovation and bring joy to everyday life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <CreativePassionCard
                key={index}
                src={interest.src}
                alt={interest.alt}
                title={interest.title}
                description={interest.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CollaborationSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">
            <FontAwesomeIcon icon={faHandshake} className="text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Collaborate
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Interested in working together? I'm always open to discussing new
            projects, research opportunities, or creative partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ActionButton
              href="mailto:a@likecat.cn"
              icon={faEnvelope}
              variant="primary"
            >
              Get in Touch
            </ActionButton>
            <ActionButton
              href="/about"
              icon={faAddressCard}
              variant="secondary"
            >
              Learn More
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  );
};

const ActionButton: React.FC<{
  href: string;
  icon: any;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}> = ({ href, icon, variant = "primary", children }) => {
  return (
    <Link
      href={href}
      className={`group relative px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
        variant === "primary"
          ? "bg-white/90 backdrop-blur-sm text-slate-900 hover:bg-white hover:shadow-xl border-2 border-white/50 hover:border-cyan-300/50"
          : "border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/20 hover:text-white hover:border-cyan-300 hover:shadow-lg backdrop-blur-sm"
      }`}
    >
      <FontAwesomeIcon icon={icon} className="mr-2" />
      <span>{children}</span>
    </Link>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Head>
        <title>Likecat - Bojun Zhang</title>
        <meta
          name="description"
          content="PhD Candidate in Mechanical Engineering at Xi'an Jiaotong University"
        />
      </Head>
      <header className="sticky top-0 z-10 backdrop-blur-md bg-slate-900/80">
        <NavBar />
      </header>
      <main className="flex-1 relative z-10">
        <HeroSection />
        <ResearchSection />
        <CreativeSection />
        <CollaborationSection />
      </main>
      <footer className="relative z-10">
        <FootBar />
      </footer>
    </div>
  );
};
export default HomePage;