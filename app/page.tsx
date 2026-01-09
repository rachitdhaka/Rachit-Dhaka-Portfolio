"use client";
import { Container } from "@/components/Container";
import { HeroSection } from "@/components/HeroSection";
import { Introduction } from "@/components/Introduction";
import { ModeToggle } from "@/components/Mode-toggle";
import { Navbar } from "@/components/Navbar";
import { ProjectSection } from "@/components/ProjectSection";
import { ResumeSection } from "@/components/ResumeSection";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Github } from "@/components/Github";
import Image from "next/image";
import { SkillsAbout } from "@/components/Skills&About";
import { Experiences } from "@/components/Experiences";
import { Footer } from "@/components/Footer";
import { Hackthon } from "@/components/Hackthon";

export default function Home() {
  return (
    <TracingBeam>
      <Container>
        <Navbar />
        <HeroSection />
        <Introduction />
        <ResumeSection />
        <ProjectSection />
        <Github/>
        <SkillsAbout />
        <Experiences/>
        <Hackthon/>
        <Footer/>
      </Container>
    </TracingBeam>
    
    
  );
}
