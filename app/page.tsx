import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 text-center border-t border-border/30">
        <p className="text-muted-foreground/50 text-sm font-mono">
          © 2025 김광수 · Built with Next.js & shadcn/ui
        </p>
      </footer>
    </>
  );
}
