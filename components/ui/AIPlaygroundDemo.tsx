'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import AIChat from './AIChat';

interface AIPlaygroundDemoProps {
  labId: number;
}

export default function AIPlaygroundDemo({ labId }: AIPlaygroundDemoProps) {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initialize with greeting based on lab
    const greetings = {
      1: "Hi! I'm here to listen. How are you feeling today?",
      2: "I'm ready to analyze problems. Give me a reasoning challenge!",
      3: "Let's discuss tech! What's on your mind?",
    };
    setMessages([{ role: 'ai', content: greetings[labId as keyof typeof greetings] || 'Hello!' }]);
  }, [labId]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { role: 'user', content: input }]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        1: [
          "That's important. Can you tell me more about what's triggering these feelings?",
          "I hear you. It sounds like you're dealing with quite a bit.",
          "That's a valid concern. What do you think would help?",
        ],
        2: [
          "Interesting problem. Let me break this down... The key insight is that we need to balance complexity with efficiency.",
          "This is a classic trade-off. Consider: what's the constraint that matters most?",
          "Smart approach. Have you considered the edge cases?",
        ],
        3: [
          "Great question! In my experience, the best architecture is the one you can maintain.",
          "That's a common pattern in production systems. The trade-off is between flexibility and simplicity.",
          "Totally agree. Clean code is an investment, not a cost.",
        ],
      };

      const labResponses = responses[labId as keyof typeof responses] || responses[1];
      const response = labResponses[Math.floor(Math.random() * labResponses.length)];
      setMessages((prev) => [...prev, { role: 'ai', content: response }]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl border border-primary/20 p-6"
    >
      {/* Demo Header */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-primary/20">
        <h3 className="text-xl font-bold text-cream">Live Demo</h3>
        <span className="text-sm text-primary">Connected & Ready</span>
      </div>

      {/* Messages Area */}
      <div className="bg-navy-900/50 rounded-lg p-4 h-64 overflow-y-auto mb-4 space-y-4">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-navy-700 text-cream'
              }`}
            >
              <p className="text-sm">{msg.content}</p>
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSendMessage} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={isLoading}
          className="flex-1 bg-navy-800 text-cream rounded-lg px-4 py-2 placeholder-cream/40 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-primary hover:bg-purple-700 disabled:bg-navy-600 text-white px-6 py-2 rounded-lg transition-colors font-semibold"
        >
          Send
        </button>
      </form>

      <p className="text-xs text-cream/40 mt-3 text-center">
        * This is a demo. Responses are simulated for demonstration purposes.
      </p>
    </motion.div>
  );
}
