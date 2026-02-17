import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AmbientBackground } from "@/components/layout/ambient-background";
import { PageShell } from "@/components/layout/page-shell";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { NowSection } from "@/components/sections/now-section";
import { CinematicSkylineSection } from "@/components/sections/cinematic-skyline-section";

export function PortfolioPage() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <PageShell>
        <HeroSection />
        <CinematicSkylineSection />
        <NowSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </PageShell>
      <Footer />
    </>
  );
}

