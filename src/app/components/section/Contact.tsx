"use client";
import { motion } from 'framer-motion';
import { PiGithubLogoFill, PiWhatsappLogoFill } from 'react-icons/pi';
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandLinkedinFilled } from "react-icons/tb";

export const ContactSection = () => {
  const contactLinks = [
    {
      icon: <TbBrandLinkedinFilled className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/inès-d-666768231",
      bgHover: "hover:bg-[var(--highlight-glow)]",
      textHover: "hover:text-[var(--highlight)]"
    },
    {
      icon: <PiGithubLogoFill className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/megumihfu",
      bgHover: "hover:bg-[var(--highlight-glow)]",
      textHover: "hover:text-[var(--highlight)]"
    },
    {
      icon: <PiWhatsappLogoFill className="w-6 h-6" />,
      label: "WhatsApp",
      href: "https://wa.me/+33611285128",
      bgHover: "hover:bg-[var(--highlight-glow)]",
      textHover: "hover:text-[var(--highlight)]"
    },
    {
      icon: <HiOutlineMail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:idaffef@gmail.com",
      bgHover: "hover:bg-[var(--highlight-glow)]",
      textHover: "hover:text-[var(--highlight)]"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-transparent relative overflow-hidden">
      <div className="container-custom">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-[var(--text-primary)] font-[family-name:var(--font-outfit)]">
            Let's Build Together
          </h2>
          <div className="w-12 h-1 bg-[var(--highlight)] rounded-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-premium p-10 md:p-14 rounded-3xl border-[var(--accent-border)]"
        >
          <div className="mb-10 text-center md:text-left">
            <p className="text-lg text-[var(--text-secondary)] max-w-none">
              Always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl border border-[var(--accent-border)] bg-[var(--bg-primary)]/40 backdrop-blur-sm transition-all duration-300 ${link.bgHover} ${link.textHover} group text-[var(--text-secondary)]`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {link.icon}
                </div>
                <span className="text-sm font-semibold tracking-wide">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* available tag */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--accent-border)] bg-[var(--bg-secondary)]/20 backdrop-blur-sm shadow-sm">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Available for opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};