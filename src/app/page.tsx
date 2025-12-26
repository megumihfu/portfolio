"use client"
import dynamic from 'next/dynamic'
import { ThemeProvider } from "./components/ThemeProvider"
import { HeroSection } from "./components/section/Hero"
import { ProjectsSection } from "./components/section/Projects"
import { SkillsSection } from "./components/section/Skills"
import { ContactSection } from "./components/section/Contact"

const FloatingNav = dynamic(() => import('./components/NavBar').then(mod => mod.FloatingNav), {
  ssr: false
});

export default function Home() {
  return (
    <ThemeProvider>
      <div className="relative w-full min-h-screen">
        <FloatingNav />
        
        <main className="w-full">
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>

        <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800">
          <div className="container-custom text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              © 2025 Ines D • Built with Next.js & Framer Motion
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}