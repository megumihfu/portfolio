"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PiSunBold, PiMoonBold } from 'react-icons/pi'
import { useTheme } from './ThemeProvider'

export const FloatingNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];
  
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'top-4 scale-[0.97]' : 'scale-100'
      }`}
    >
      <div className="relative group">
        {/* hover glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
        
        {/* nav container */}
        <div className="relative glass-nav px-6 py-3.5 rounded-2xl flex items-center gap-8 border-[var(--accent-border)] shadow-xl">
          
          {/* nav link */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="relative px-4 py-2 group/link"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                <span className={`relative z-10 text-sm font-semibold transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'text-[var(--text-primary)]' 
                    : 'text-[var(--text-secondary)] group-hover/link:text-[var(--text-primary)]'
                }`}>
                  {item.label}
                </span>
                
                <AnimatePresence>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-lg border-b-2 border-[var(--highlight)]/30"
                      initial={false} 
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 30 
                      }}
                    />
                  )}
                </AnimatePresence>
                
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--highlight)] shadow-[0_0_8px_var(--highlight)]"
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30 
                    }}
                  />
                )}
              </a>
            ))}
          </div>
          
          {/* | */}
          <div className="w-px h-5 bg-gradient-to-b from-transparent via-[var(--accent-border)] to-transparent" />
          
          {/* toggle theme */}
          <motion.button 
            onClick={toggleTheme} 
            className="relative p-2.5 hover:bg-[var(--bg-tertiary)] rounded-xl transition-all duration-300 group/theme overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle Theme"
          >
            {/* hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-blue-500/20 opacity-0 group-hover/theme:opacity-100 transition-opacity blur-xl" />
            
            <AnimatePresence mode="wait">
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10"
                >
                  <PiSunBold className="w-5 h-5 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10"
                >
                  <PiMoonBold className="w-5 h-5 text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};