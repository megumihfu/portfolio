"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  PiCodeBold, PiLightningBold, PiArrowRightBold, PiXBold, 
  PiStackBold, PiGithubLogoBold, PiLayoutBold, PiGlobeBold
} from 'react-icons/pi'
import { TiltCard } from '../Card'
import { projects, Project } from '../../data/projects'

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  // no scroll when modal open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 pb-10 relative bg-transparent">
      <div className="container-custom px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-[var(--text-primary)] font-[family-name:var(--font-outfit)]">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-[var(--highlight)] rounded-full mb-6"></div>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed font-normal">
            A selection of my most impactful work in freelance and humanitarian sectors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <TiltCard key={index} className="h-full">
              <motion.div 
                className="relative p-7 rounded-[2rem] h-full flex flex-col cursor-pointer group bg-[var(--bg-secondary)] border border-[var(--accent-border)] overflow-hidden hover:border-[var(--highlight)]/40 transition-all duration-500 shadow-sm"
                onClick={() => {
                    setSelectedProject(project);
                    setActiveTab('overview');
                }}
              >
                <div className="relative z-10 h-full flex flex-col">
                  {/* image preview */}
                  <div className="relative aspect-video rounded-2xl mb-6 overflow-hidden border border-[var(--accent-border)]">
                    <img src={project.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={project.title} />
                  </div>

                  {/* card header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--accent-border)] flex items-center justify-center group-hover:bg-[var(--highlight)]/10 transition-all">
                      <PiCodeBold size={20} className="text-[var(--highlight)]/40 group-hover:text-[var(--highlight)] transition-colors" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--highlight)]/5 border border-[var(--highlight)]/10">
                      <div className="w-1 h-1 rounded-full bg-[var(--highlight)]" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--highlight)]">{project.company}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)] group-hover:text-[var(--highlight)] transition-colors font-[family-name:var(--font-outfit)]">{project.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-6 flex-grow leading-relaxed font-normal line-clamp-2">{project.shortDescription}</p>
                  
                  {/* stacks */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[9px] font-bold uppercase tracking-tight px-2 py-1 rounded-md bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] border border-[var(--accent-border)]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-primary)] group-hover:gap-4 transition-all pt-6 border-t border-[var(--accent-border)]">
                    <span>View Case Study</span>
                    <PiArrowRightBold className="text-[var(--highlight)]" />
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* other projects link */}
        <div className="flex justify-center mt-16 mb-2">
          <motion.a
            href="https://github.com/megumihfu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--accent-border)] text-[var(--text-primary)] font-bold transition-all hover:border-[var(--highlight)] hover:shadow-lg hover:shadow-[var(--highlight)]/5 group"
          >
            <PiGithubLogoBold size={24} className="group-hover:text-[var(--highlight)] transition-colors" />
            <span>See more on GitHub</span>
            <PiArrowRightBold size={18} className="text-[var(--highlight)] group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* fullscreen modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="fixed inset-0 z-[100] bg-[var(--bg-primary)] overflow-hidden flex flex-col"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            >
              {/* header */}
              <div className="flex-none bg-[var(--bg-primary)]/95 backdrop-blur-2xl border-b border-[var(--accent-border)] px-6 py-4 z-20">
                <div className="container-custom flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-6xl mx-auto">
                  <div className="flex items-center gap-4">
                    <button onClick={() => setSelectedProject(null)} className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--bg-secondary)] border border-[var(--accent-border)] hover:border-[var(--highlight)] hover:bg-[var(--highlight)]/5 transition-all">
                      <PiXBold size={18} />
                    </button>
                    <div>
                      <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)]">{selectedProject.title}</h2>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">{selectedProject.company} • {selectedProject.year}</p>
                    </div>
                  </div>
                  {/* tabs */}
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1.5 p-1 bg-[var(--bg-secondary)] rounded-xl border border-[var(--accent-border)]">
                      {['overview', 'architecture', 'gallery'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-4 py-2 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all ${
                            activeTab === tab 
                              ? 'bg-[var(--bg-primary)] text-[var(--highlight)] border border-[var(--accent-border)] shadow-sm' 
                              : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'
                          }`}
                        >
                          {tab === 'architecture' ? 'Engineering' : tab}
                        </button>
                      ))}
                    </div>

                    {selectedProject.githubUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] text-[10px] font-bold hover:opacity-90 transition-all">
                        <PiGithubLogoBold size={16} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* modal content */}
              <div className="flex-1 overflow-y-auto">
                <div className="container-custom py-12 px-6 max-w-6xl mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.div 
                    key={activeTab} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }} 
                    transition={{ duration: 0.2 }}
                    >
                      {activeTab === 'overview' && (
                        <div className="space-y-12">
                          <div className="flex gap-8 items-start">
                            <div className="w-1.5 h-24 md:h-32 bg-[var(--highlight)] rounded-full flex-shrink-0 mt-2"></div>
                            <div className="space-y-4">
                              <h3 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-outfit)] text-[var(--text-primary)] tracking-tight">Project Insight</h3>
                              <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl font-normal">{selectedProject.fullDescription}</p>
                            </div>
                          </div>
                          
                          {/* challenge impact & features */}
                          <div className="grid md:grid-cols-2 gap-4">
                            <motion.div 
                              className="group p-6 rounded-[2rem] bg-[var(--bg-secondary)] border border-[var(--accent-border)] hover:border-[var(--brand-github)]/30 transition-all duration-300"
                              whileHover={{ scale: 1.01 }}
                            >
                              <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-[var(--brand-github-glow)] text-[var(--brand-github)] flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <PiLightningBold size={20} />
                                </div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-[var(--text-primary)]">The Challenge</h4>
                              </div>
                              <p className="text-[var(--text-secondary)] leading-relaxed text-sm font-normal">{selectedProject.challenge}</p>
                            </motion.div>

                            <motion.div 
                              className="group p-6 rounded-[2rem] bg-[var(--bg-secondary)] border border-[var(--accent-border)] hover:border-[var(--highlight)]/30 transition-all duration-300"
                              whileHover={{ scale: 1.01 }}
                            >
                              <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-[var(--highlight)]/10 text-[var(--highlight)] flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <PiStackBold size={20} />
                                </div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-[var(--text-primary)]">The Impact</h4>
                              </div>
                              <p className="text-[var(--text-secondary)] leading-relaxed text-sm font-normal">{selectedProject.impact}</p>
                            </motion.div>
                          </div>

                          <div className="p-8 rounded-[2.5rem] border border-[var(--accent-border)] bg-[var(--bg-secondary)]/30">
                             <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-[var(--text-primary)]">Core Features Implemented</h4>
                             <div className="grid md:grid-cols-2 gap-4">
                                {selectedProject.solution.map((item, i) => (
                                  <div key={i} className="flex gap-3 items-center p-3 rounded-xl hover:bg-[var(--bg-tertiary)]/50 transition-colors group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--highlight)] group-hover:scale-150 transition-transform"></div>
                                    <p className="text-sm text-[var(--text-secondary)] font-normal">{item}</p>
                                  </div>
                                ))}
                             </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'architecture' && (
                        <div className="grid lg:grid-cols-2 gap-12">
                          <div className="space-y-10">
                            <div className="flex gap-6 items-start">
                              <div className="w-1.5 h-20 bg-[var(--highlight)] rounded-full flex-shrink-0 mt-2"></div>
                              <div className="space-y-2">
                                <h3 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-outfit)] text-[var(--text-primary)]">Engineering</h3>
                                <p className="text-[var(--text-secondary)] text-lg font-normal">{selectedProject.architecture}</p>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-tertiary)]">Tech Stack & Tools</h4>
                              <div className="flex flex-wrap gap-2">
                                {selectedProject.stack.map((s, i) => (
                                  <motion.span 
                                    key={i} 
                                    whileHover={{ scale: 1.05, color: 'var(--highlight)', borderColor: 'var(--highlight)' }}
                                    className="px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--accent-border)] rounded-xl text-[10px] font-black text-[var(--text-primary)] uppercase tracking-wider cursor-default transition-all"
                                  >
                                    {s}
                                  </motion.span>
                                ))}
                              </div>
                            </div>

                            <div className="grid gap-3">
                              {selectedProject.technicalDeepDive && Object.entries(selectedProject.technicalDeepDive).map(([key, value]) => (
                                <motion.div key={key} whileHover={{ x: 5, borderColor: 'var(--highlight)' }} className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--accent-border)] transition-all">
                                  <h4 className="text-[10px] font-black uppercase tracking-widest text-[var(--highlight)] mb-1">{key}</h4>
                                  <p className="text-sm text-[var(--text-secondary)] font-normal">{value as string}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-[var(--bg-tertiary)] rounded-[3rem] border-2 border-dashed border-[var(--accent-border)] p-12 flex flex-col items-center justify-center text-center self-start sticky top-0 min-h-[450px]">
                             <PiStackBold size={48} className="text-[var(--highlight)]/10 mb-4" />
                             <p className="text-[var(--text-tertiary)] font-bold uppercase tracking-widest text-[10px]">Technical Blueprint Visualization</p>
                          </div>
                        </div>
                      )}

                      {activeTab === 'gallery' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {selectedProject.images.map((img, i) => (
                            <motion.div 
                              key={i} 
                              whileHover={{ scale: 1.02, y: -5 }}
                              className="rounded-[2rem] overflow-hidden border border-[var(--accent-border)] bg-[var(--bg-secondary)] shadow-lg"
                            >
                              <img 
                                src={img} 
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-105" 
                                alt={`Gallery item ${i}`} 
                                onError={(e) => { 
                                  (e.target as HTMLImageElement).src = "/project/logo.png";
                                }}
                              />
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};