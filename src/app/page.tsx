import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Toolkit from "@/components/Toolkit";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50/30 text-zinc-900 selection:bg-zinc-900 selection:text-white">
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
