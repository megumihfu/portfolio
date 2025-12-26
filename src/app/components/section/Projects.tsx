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
    <section id="projects" className="py-20 relative bg-transparent transition-colors duration-300">
      <div className="container-custom">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-[var(--text-primary)] font-[family-name:var(--font-outfit)]">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-[var(--highlight)] rounded-full mb-6"></div>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            A selection of my most impactful work in freelance and humanitarian sectors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <TiltCard key={index} className="h-full">
              <div 
                className="glass-card-premium-hover p-6 rounded-2xl h-full flex flex-col cursor-pointer group bg-[var(--bg-secondary)] border-[var(--accent-border)]"
                onClick={() => {
                    setSelectedProject(project);
                    setActiveTab('overview');
                }}
              >
                 {/* content*/}
                <div className="aspect-video bg-[var(--bg-tertiary)] rounded-xl mb-6 flex items-center justify-center border border-[var(--accent-border)]">
                  <PiCodeBold size={40} className="text-[var(--highlight)]/40" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">{project.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-6 flex-grow italic">"{project.shortDescription}"</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)] group-hover:gap-3 transition-all mt-auto border-t border-[var(--accent-border)] pt-4">
                  Case Study <PiArrowRightBold className="text-[var(--highlight)]" />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <motion.a
            href="https://github.com/megumihfu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--accent-border)] text-[var(--text-primary)] font-semibold transition-all hover:border-[var(--highlight)] hover:shadow-md"
          >
            <PiGithubLogoBold className="text-xl" />
            See more on GitHub
          </motion.a>
        </div>

        {/* fullscreen modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="fixed inset-0 z-[100] bg-[var(--bg-primary)] overflow-y-auto"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
            >
              {/* header */}
              <div className="sticky top-0 z-20 bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--accent-border)] px-6 py-4">
                <div className="container-custom flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-[var(--bg-secondary)] rounded-full transition-colors">
                      <PiXBold size={24} />
                    </button>
                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] text-sm font-bold hover:opacity-90 transition-all"
                      >
                        <PiGithubLogoBold size={20} />
                        <span>Source Code</span>
                      </a>
                    )}
                    <div>
                        <h2 className="text-lg font-bold leading-tight">{selectedProject.title}</h2>
                        <p className="text-xs text-[var(--text-tertiary)] uppercase font-bold tracking-widest">{selectedProject.company}</p>
                    </div>
                  </div>
                  {/* tabs */}
                  <div className="hidden md:flex gap-1 bg-[var(--bg-secondary)] p-1 rounded-xl">
                    {[
                        { id: 'overview', icon: <PiLayoutBold />, label: 'Overview' },
                        { id: 'architecture', icon: <PiStackBold />, label: 'Engineering' },
                        { id: 'gallery', icon: <PiGlobeBold />, label: 'Gallery' }
                    ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                            activeTab === tab.id 
                            ? 'bg-[var(--bg-primary)] text-[var(--highlight)] shadow-sm' 
                            : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'
                          }`}
                        >
                          {tab.icon} {tab.label}
                        </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* modal content */}
              <div className="container-custom py-12 px-6">
                <div className="max-w-4xl mx-auto">
                  
                    <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {activeTab === 'overview' && (
                            <div className="space-y-12">
                              <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                  <h3 className="text-2xl font-bold">The Vision</h3>
                                  <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                                    {selectedProject.fullDescription}
                                  </p>
                                  <div className="flex flex-wrap gap-4">
                                    <div className="p-4 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--accent-border)] flex-1">
                                      <PiLightningBold className="text-yellow-500 mb-2" size={24} />
                                      <h4 className="font-bold text-sm mb-1">Challenge</h4>
                                      <p className="text-xs text-[var(--text-secondary)]">{selectedProject.challenge}</p>
                                    </div>
                                    <div className="p-4 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--accent-border)] flex-1">
                                      <PiStackBold className="text-[var(--highlight)] mb-2" size={24} />
                                      <h4 className="font-bold text-sm mb-1">Impact</h4>
                                      <p className="text-xs text-[var(--text-secondary)]">{selectedProject.impact}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="rounded-3xl overflow-hidden border border-[var(--accent-border)] shadow-2xl bg-[var(--bg-tertiary)]">
                                  <img 
                                    src={selectedProject.images[0]} 
                                    alt="Project Preview" 
                                    className="w-full h-auto object-cover aspect-video" 
                                    onError={(e) => { (e.target as HTMLImageElement).src = "/project/logo.png" }}
                                  />
                                </div>
                              </div>
                              <div className="bg-[var(--bg-secondary)] p-8 rounded-3xl border border-[var(--accent-border)]">
                                <h4 className="font-bold mb-6">Core Features Implemented</h4>
                                <div className="grid md:grid-cols-3 gap-6">
                                  {selectedProject.solution.map((item, i) => (
                                    <div key={i} className="flex gap-3">
                                      <div className="w-5 h-5 rounded-full bg-[var(--highlight)]/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--highlight)]" />
                                      </div>
                                      <p className="text-sm text-[var(--text-secondary)]">{item}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {activeTab === 'architecture' && (
                            <div className="space-y-12">
                              <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                  <h3 className="text-2xl font-bold border-l-4 border-[var(--highlight)] pl-4">System Design</h3>
                                  <p className="text-[var(--text-secondary)] leading-relaxed">
                                    {selectedProject.architecture}
                                  </p>
                                  
                                  {/* technical deepDive */}
                                  <div className="grid grid-cols-1 gap-4 mt-8">
                                    {selectedProject.technicalDeepDive && Object.entries(selectedProject.technicalDeepDive).map(([key, value]) => (
                                      <div key={key} className="p-4 bg-[var(--bg-secondary)] rounded-xl border border-[var(--accent-border)]">
                                        <h4 className="text-xs font-bold uppercase text-[var(--highlight)] mb-1">{key}</h4>
                                        <p className="text-sm text-[var(--text-secondary)]">{value}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* diagram */}
                                <div className="bg-[var(--bg-secondary)] p-8 rounded-3xl border border-[var(--accent-border)] min-h-[300px] flex flex-col items-center justify-center text-center">
                                  <PiStackBold size={48} className="text-[var(--highlight)]/20 mb-4" />
                                  <p className="italic text-[var(--text-tertiary)] text-sm">
                                    Technical Architecture & Workflow Diagram
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}

                          {activeTab === 'gallery' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {selectedProject.images.map((img, i) => (
                                <motion.div 
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="group relative rounded-[2rem] overflow-hidden border border-[var(--accent-border)] shadow-lg bg-[var(--bg-secondary)]"
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