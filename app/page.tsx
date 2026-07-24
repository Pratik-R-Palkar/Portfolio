import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bgPrimary text-white selection:bg-goldPrimary/30 selection:text-white">
      <Navbar />
      <Hero />
      <HeroStats />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
