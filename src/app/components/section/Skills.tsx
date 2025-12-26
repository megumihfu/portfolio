"use client";
import { motion } from 'framer-motion';
import { 
  SiSpringboot, SiPython, SiTypescript, SiNextdotjs, SiReact, 
  SiPostgresql, SiSupabase, SiDocker, SiAmazonwebservices, 
  SiGithubactions, SiJunit5, SiJavascript, SiLinux
} from 'react-icons/si';
import { RiJavaLine } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";
import { PiAndroidLogoBold } from "react-icons/pi";
import { GrMysql } from "react-icons/gr";

export const SkillsSection = () => {
  const categories = [
    {
      name: "Backend Engineering",
      skills: [
        { name: "Java", icon: <RiJavaLine />, color: "text-[#ED8B00]" },
        { name: "Kotlin", icon: <TbBrandKotlin />, color: "text-[#7F52FF]" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "text-[#6DB33F]" },
        { name: "Python", icon: <SiPython />, color: "text-[#3776AB]" },
        { name: "JUnit / Mockito", icon: <SiJunit5 />, color: "text-[#25A162]" },
        { name: "Linux", icon: <SiLinux />, color: "text-[var(--text-primary)]" },
      ]
    },
    {
      name: "Fullstack & Mobile",
      skills: [
        { name: "KMP", icon: <TbBrandKotlin />, color: "text-[var(--highlight)]" },
        { name: "Android", icon: <PiAndroidLogoBold />, color: "text-[#3DDC84]" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-[var(--text-primary)]" },
        { name: "React", icon: <SiReact />, color: "text-[#61DAFB]" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178C6]" },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
      ]
    },
    {
      name: "Infra & Databases",
      skills: [
        { name: "Supabase", icon: <SiSupabase />, color: "text-[#097a2f]" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#4169E1]" },
        { name: "AWS", icon: <SiAmazonwebservices />, color: "text-[#FF9900]" },
        { name: "Docker", icon: <SiDocker />, color: "text-[#2496ED]" },
        { name: "MySQL", icon: <GrMysql />, color: "text-[#4479A1]" },
        { name: "GitHub Actions", icon: <SiGithubactions />, color: "text-[var(--text-primary)]" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-[var(--bg-transparent)] border-y border-[var(--accent-border)] transition-colors duration-300 relative overflow-hidden">
      
      {/* grid  background  & colors*/}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--accent-primary)]/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-[var(--text-primary)] font-[family-name:var(--font-outfit)]">
            Technical Stack
          </h2>
          <div className="w-12 h-1 bg-[var(--highlight)] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="relative bg-[var(--bg-primary)]/40 backdrop-blur-md border border-[var(--accent-border)] rounded-2xl p-6 min-h-[160px] overflow-hidden group transition-all duration-300 hover:border-[var(--highlight)]"
            >
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)] mb-5">
                {cat.name}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    animate={{ 
                      y: [0, -4, 0],
                      x: [0, sIdx % 2 === 0 ? 2 : -2, 0]
                    }}
                    transition={{ 
                      duration: 3 + (sIdx % 3), 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      zIndex: 20
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[var(--accent-border)] bg-[var(--bg-primary)]/80 backdrop-blur-sm cursor-default hover:bg-[var(--bg-primary)] hover:shadow-sm transition-all duration-200"
                  >
                    <div className={`text-sm ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <span className="text-[11px] font-bold text-[var(--text-secondary)] whitespace-nowrap">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};