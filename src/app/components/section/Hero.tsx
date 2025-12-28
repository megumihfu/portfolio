"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { PiArrowRightBold, PiBuildingsBold } from 'react-icons/pi'
import { SiSpringboot } from "react-icons/si"
import { TbBrandKotlin } from "react-icons/tb"

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // animation states
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "Ines Daffef";
  
  useEffect(() => {
    // typing effect
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 120); 
      return () => clearTimeout(timeout);
    }
    
    // cursor
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, [currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* gradient backgrougn */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        {/* + grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <motion.div
          className="gradient-orb w-[700px] h-[700px] bg-gradient-to-br from-[var(--brand-github-glow)] via-[var(--highlight-glow)] to-transparent bottom-[-150px] left-[-150px]"
          animate={{ 
            scale: [1, 1.3, 1], 
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="gradient-orb w-[600px] h-[600px] bg-gradient-to-br from-[var(--brand-whatsapp-glow)] to-transparent top-[40%] right-[30%]"
          animate={{ 
            scale: [1, 1.15, 1], 
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="container-custom relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* name with typing effect */}
            <div className="space-y-2">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[var(--text-primary)] font-[family-name:var(--font-outfit)] leading-[0.9]">
                {displayedText}
                <motion.span
                  animate={{ opacity: showCursor ? 1 : 0 }}
                  className="inline-block w-2 h-20 md:h-24 lg:h-28 bg-[var(--highlight)] ml-2 align-middle"
                />
              </h1>
              
              {/* name first then subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: currentIndex >= fullText.length ? 1 : 0, y: currentIndex >= fullText.length ? 0 : 10 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <div className="h-[2px] w-12 bg-gradient-to-r from-[var(--highlight)] to-transparent" />
                <span className="text-lg md:text-xl text-[var(--text-secondary)] font-medium">
                  Software Engineer
                </span>
              </motion.div>
            </div>

            {/* motiv text */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: currentIndex >= fullText.length ? 1 : 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed max-w-2xl"
            >
              Software engineer <span className="italic font-normal text-[var(--text-primary)]">building tech that matters</span>. 
              From social impact to <span className="italic font-normal text-[var(--text-primary)]">large-scale systems</span>, 
              I'm proactive, curious, and ready for my next <span className="italic font-normal text-[var(--text-primary)]">international challenge</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: currentIndex >= fullText.length ? 1 : 0, y: currentIndex >= fullText.length ? 0 : 10 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 lg:hidden" // hidden on desktop - available on phone
            >
              <div className="glass-card-premium px-4 py-2 rounded-xl border-[var(--accent-border)] flex items-center gap-2">
                <PiBuildingsBold className="text-[var(--brand-linkedin)]" />
                <span className="text-xs font-bold text-[var(--text-primary)]">3Y @ Safran</span>
              </div>
              <div className="glass-card-premium px-4 py-2 rounded-xl border-[var(--accent-border)] flex items-center gap-2">
                <SiSpringboot className="text-[var(--brand-whatsapp)]" />
                <span className="text-xs font-bold text-[var(--text-primary)]">Spring Boot</span>
              </div>
              <div className="glass-card-premium px-4 py-2 rounded-xl border-[var(--accent-border)] flex items-center gap-2">
                <TbBrandKotlin className="text-[var(--brand-github)]" />
                <span className="text-xs font-bold text-[var(--text-primary)]">Kotlin & KMP</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: currentIndex >= fullText.length ? 1 : 0, y: currentIndex >= fullText.length ? 0 : 10 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-3 text-lg font-semibold text-[var(--text-primary)] group"
              >
                <span className="border-b-2 border-[var(--highlight)] pb-1">View Featured Work</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <PiArrowRightBold className="group-hover:translate-x-2 transition-transform" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>

          {/* floating tech badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: currentIndex >= fullText.length ? 1 : 0, scale: currentIndex >= fullText.length ? 1 : 0.9 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="relative h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-3xl blur-3xl" />
            
            {/* tag1 */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] right-[5%] glass-card-premium p-5 rounded-2xl border-[var(--accent-border)] shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-linkedin-glow)] flex items-center justify-center">
                  <PiBuildingsBold className="w-5 h-5 text-[var(--brand-linkedin)]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--text-primary)]">3 Years</div>
                  <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">@Safran Electronics & Defense</div>
                </div>
              </div>
            </motion.div>

            {/* tag2 */}
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -2, 0]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[42%] left-[0%] glass-card-premium p-5 rounded-2xl border-[var(--accent-border)] shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-whatsapp-glow)] flex items-center justify-center">
                  <SiSpringboot className="w-5 h-5 text-[var(--brand-whatsapp)]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--text-primary)]">Spring Boot</div>
                  <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">Backend Developer</div>
                </div>
              </div>
            </motion.div>

            {/* tag3 */}
            <motion.div
              animate={{ 
                y: [0, -12, 0],
                rotate: [0, 1.5, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[15%] right-[10%] glass-card-premium p-5 rounded-2xl border-[var(--accent-border)] shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--brand-github-glow)] flex items-center justify-center">
                  <TbBrandKotlin className="w-5 h-5 text-[var(--brand-github)]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--text-primary)]">Kotlin & KMP</div>
                  <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">Mobile Engine</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-[20%] left-[20%] w-48 h-48 border border-[var(--accent-border)] rounded-full opacity-10"
            />
          </motion.div>

        </div>
      </div>

      {/* scroll indic */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: currentIndex >= fullText.length ? 1 : 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-[var(--accent-border)] rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-1 bg-[var(--highlight)] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};