'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import AIAssistantTeaser from '@/components/ui/AIAssistantTeaser';
import AIChat from '@/components/ui/AIChat';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-navy-900 pt-20"
    >
      {/* Animated background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <p className="text-primary text-lg font-semibold tracking-wider">
                Welcome to My Portfolio
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold text-cream leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Krishala Shrestha</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl text-cream/80 font-light">
                Computer Engineering Student | Backend & AI Developer
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 pt-4">
              <p className="text-lg text-cream/70 leading-relaxed">
                I'm a backend and AI developer driven by curiosity and a belief that thoughtfully built technology can create real impact. I focus on building core systems where logic and architecture matter.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-8"
            >
              <a href="#projects" className="btn-primary">
                View My Projects
              </a>
              <button onClick={() => setShowAIChat(true)} className="btn-secondary">
                Talk to My AI
              </button>
              <a href="/Krishala-Shrestha-CV.pdf" download="Krishala-Shrestha-CV.pdf" className="btn-secondary">
                Download CV
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="pt-12"
            >
              <p className="text-cream/50 text-sm mb-2">Scroll to explore</p>
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </div>

          {/* Right Column - AI Assistant Teaser */}
          <motion.div variants={itemVariants}>
            <AIAssistantTeaser />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* AI Chat Modal */}
      {showAIChat && <AIChat onClose={() => setShowAIChat(false)} />}
    </section>
  );
}
