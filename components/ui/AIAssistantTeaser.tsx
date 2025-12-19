'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AIChat from './AIChat';

export default function AIAssistantTeaser() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating AI Button */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="relative h-96 bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-8 glass border border-primary/20 overflow-hidden group">
          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4"
              >
                <span className="text-2xl">🤖</span>
              </motion.div>
              <h3 className="text-xl font-bold text-cream mb-2">Ask About My Work</h3>
              <p className="text-cream/60 text-sm">
                Curious about my projects, tech stack, or approach? Talk to my AI.
              </p>
            </div>

            {/* Quick Questions */}
            <div className="space-y-2">
              <p className="text-xs text-cream/50 font-semibold">Quick Questions:</p>
              <div className="space-y-1 text-xs">
                <p className="text-cream/70">• "What projects have you built?"</p>
                <p className="text-cream/70">• "Tell me about your tech stack"</p>
                <p className="text-cream/70">• "What drives your work?"</p>
              </div>
            </div>

            {/* Start Chat Button */}
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-primary hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 mt-4"
            >
              Start Chat
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* AI Chat Modal */}
      <AnimatePresence>
        {isOpen && <AIChat onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
