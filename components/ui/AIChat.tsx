'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getAIResponse } from '@/lib/ai-service';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export default function AIChat({ onClose, project }: { onClose: () => void; project?: string }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: project 
        ? `Hi! 👋 I'm here to explain the ${project} project. Ask me anything about its features, technology, challenges, or impact!`
        : 'Hi! 👋 I\'m Krishala\'s AI assistant. Ask me anything about her projects, skills, or approach to problem-solving!',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Get AI response
    const aiResponse = await getAIResponse(input, project);
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'ai',
      content: aiResponse,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, aiMessage]);
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="glass-hover bg-navy-800/90 rounded-3xl w-full max-w-lg h-[500px] max-h-[90vh] flex flex-col border border-primary/30 shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-primary/20 relative z-10">
          <div className="flex items-center gap-3">
            <motion.div 
              className="text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🤖
            </motion.div>
            <div>
              <h3 className="text-lg font-bold text-cream">
                {project ? `${project} AI Assistant` : "Krishala's AI Assistant"}
              </h3>
              <p className="text-xs text-cream/60">Always here to help! ✨</p>
            </div>
          </div>
          <motion.button
            onClick={onClose}
            className="text-cream/50 hover:text-cream transition-colors text-xl hover:bg-white/10 rounded-full p-2"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 relative z-10">
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <motion.div
                className={`max-w-[80%] px-4 py-3 rounded-2xl relative ${
                  msg.type === 'user'
                    ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/30'
                    : 'glass bg-navy-700/80 text-cream border border-primary/20'
                }`}
                whileHover={{ scale: 1.02 }}
                layout
              >
                {msg.type === 'ai' && (
                  <motion.div 
                    className="absolute -left-2 top-2 text-lg"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🤖
                  </motion.div>
                )}
                <p className={`text-sm leading-relaxed ${msg.type === 'ai' ? 'ml-4' : ''}`}>
                  {msg.content}
                </p>
                <div className={`text-xs mt-2 opacity-60 ${msg.type === 'user' ? 'text-white/70' : 'text-cream/50'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </motion.div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex justify-start"
            >
              <div className="glass bg-navy-700/80 px-4 py-3 rounded-2xl border border-primary/20 max-w-[80%]">
                <div className="flex items-center gap-2 ml-4">
                  <motion.div 
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                  />
                  <motion.div 
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                  />
                </div>
                <motion.div 
                  className="absolute -left-2 top-2 text-lg"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  🤖
                </motion.div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="border-t border-primary/20 p-6 relative z-10">
          <div className="flex gap-3">
            <motion.input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={project ? `Ask about ${project}...` : "Ask me anything! 💬"}
              disabled={isLoading}
              className="flex-1 glass bg-navy-700/50 text-cream rounded-2xl px-4 py-3 text-sm placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-navy-700/70 transition-all border border-primary/20"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary disabled:from-navy-600 disabled:to-navy-600 text-white px-6 py-3 rounded-2xl transition-all text-sm font-semibold shadow-lg shadow-primary/30 disabled:shadow-none relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                {isLoading ? (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    ⏳
                  </motion.div>
                ) : (
                  <motion.span
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>
                )}
                Send
              </span>
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
