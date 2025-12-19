'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AIPlaygroundDemo from '@/components/ui/AIPlaygroundDemo';

const labs = [
  {
    id: 1,
    title: 'Mental Health Check-in',
    icon: '🧠',
    description: 'Chat with Therapist AI to explore your thoughts and feelings.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Problem Reasoning',
    icon: '🔍',
    description: 'Watch AI analyze and solve complex reasoning problems.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Tech Discussion',
    icon: '💻',
    description: 'Discuss architecture, design patterns, and coding best practices.',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function AIPlayground() {
  const [selectedLab, setSelectedLab] = useState<number | null>(null);
  const [disclaimer, setDisclaimer] = useState(true);

  return (
    <section id="ai-playground" className="relative py-20 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">AI Playground</h2>
          <p className="text-cream/60 max-w-2xl mx-auto">
            Experience interactive AI demos. These are working prototypes showcasing different AI capabilities.
          </p>
        </motion.div>

        {/* Ethics Disclaimer */}
        {disclaimer && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-start gap-4"
          >
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <div className="flex-grow">
              <p className="font-semibold text-yellow-100 mb-1">Important Notice</p>
              <p className="text-yellow-100/80 text-sm">
                These AI demos are for educational purposes only. They are not substitutes for professional medical, legal, or expert advice.
                Results are generated locally and respectfully. Your privacy is protected.
              </p>
            </div>
            <button
              onClick={() => setDisclaimer(false)}
              className="text-yellow-100/50 hover:text-yellow-100 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        )}

        {/* Lab Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {labs.map((lab, index) => (
            <motion.button
              key={lab.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedLab(selectedLab === lab.id ? null : lab.id)}
              className="text-left h-full"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className={`glass rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all cursor-pointer group h-full flex flex-col ${
                  selectedLab === lab.id ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{lab.icon}</div>
                <h3 className="text-xl font-bold text-cream mb-2 group-hover:text-primary transition-colors">
                  {lab.title}
                </h3>
                <p className="text-cream/70 text-sm flex-grow">{lab.description}</p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
                  {selectedLab === lab.id ? 'Close Demo' : 'Launch Demo'}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            </motion.button>
          ))}
        </div>

        {/* Demo Area */}
        {selectedLab && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-12"
          >
            <AIPlaygroundDemo labId={selectedLab} />
          </motion.div>
        )}

        {/* Features Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass rounded-xl p-6 border border-primary/20">
            <div className="text-3xl mb-3">🚀</div>
            <h4 className="font-bold text-cream mb-2">Real-time Processing</h4>
            <p className="text-cream/60 text-sm">
              Responses generated instantly with intelligent reasoning.
            </p>
          </div>
          <div className="glass rounded-xl p-6 border border-primary/20">
            <div className="text-3xl mb-3">🔒</div>
            <h4 className="font-bold text-cream mb-2">Privacy First</h4>
            <p className="text-cream/60 text-sm">
              All processing happens locally. No data is stored or transmitted.
            </p>
          </div>
          <div className="glass rounded-xl p-6 border border-primary/20">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-bold text-cream mb-2">Always Learning</h4>
            <p className="text-cream/60 text-sm">
              These demos continuously improve based on interaction patterns.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
