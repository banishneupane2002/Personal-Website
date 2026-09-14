import ScrollProgress from "@/components/ScrollProgress";
import AbstractBackground from "@/components/AbstractBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Toolkit from "@/components/Toolkit";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <AbstractBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Toolkit />
      </main>
      <Contact />
    </div>
  );
}
