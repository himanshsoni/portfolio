import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Card } from "@/components/Card";

import { About } from "@/components/About";
import SkillsSection from "@/components/SkillsSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <About />
      <Card />
      <SkillsSection />
      <Contact />
      <Footer/>
    </main>
  );
}
