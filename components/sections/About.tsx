'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const timelineEvents = [
  {
    id: 1,
    category: 'Education',
    title: 'BE Computer Engineering at Khwopa Engineering College',
    year: '2022-Present',
    description: 'Full scholarship Computer Engineering student focusing on backend systems, AI, and practical problem-solving.',
    icon: '🎓',
    details: 'Building strong foundation in algorithms, system design, database architecture, and AI/ML applications.'
  },
  {
    id: 2,
    category: 'Leadership',
    title: 'Team Leader of IR in ICX at AIESEC',
    year: '2023-2024',
    description: 'Led international relations team managing 12+ partnerships and coordinating global initiatives.',
    icon: '🌍',
    details: 'Developed leadership skills while managing partnerships, organizing events, and driving social impact through blood donation drives and health camps.'
  },
  {
    id: 3,
    category: 'Achievement',
    title: 'Hult Prize KHEC 2023 Runner-up',
    year: '2023',
    description: 'Runner-up in competitive entrepreneurship challenge, demonstrating innovative problem-solving.',
    icon: '🏆',
    details: 'Pitched scalable solution addressing real-world social challenges before panel of international judges.'
  },
  {
    id: 4,
    category: 'Speaking',
    title: 'Emcee & Event Host',
    year: '2023-2024',
    description: 'Host and emcee for AIESEC international events, Hult Prize events, and college cultural programs.',
    icon: '🎤',
    details: 'Developed strong communication and presentation skills while inspiring audiences on technology and innovation.'
  },
  {
    id: 5,
    category: 'Projects',
    title: 'Building Real-World Solutions',
    year: '2023-Present',
    description: 'From rental platforms to AI chatbots—creating systems that address practical social problems.',
    icon: '💻',
    details: 'Focus on backend development, AI integration, and user-centered solutions for real-world challenges.'
  },
];

const categories = ['All', 'Education', 'Leadership', 'Achievement', 'Speaking', 'Projects'];

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents =
    selectedCategory === 'All'
      ? timelineEvents
      : timelineEvents.filter(e => e.category === selectedCategory);

  return (
    <section id="about" className="relative py-20 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">My Journey</h2>
          <p className="text-cream/60 max-w-2xl mx-auto">
            Full scholarship Computer Engineering student at Khwopa Engineering College with a passion for backend systems and AI applications. 
            Through leadership roles at AIESEC, academic representation, and social impact initiatives, I've developed strong communication skills 
            while building technology solutions that address real-world problems. My motivation stems from believing that technology should serve 
            humanity—whether it's making rental housing safer in Nepal or providing accessible mental health support.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-navy-800 text-cream/70 hover:text-cream hover:bg-navy-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-transparent opacity-30" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:grid-cols-2 md:[&>div:nth-child(2)]:order-first'
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                  <motion.div
                    className="group glass rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-3xl">{event.icon}</span>
                      <div>
                        <p className="text-primary font-semibold text-sm">{event.year}</p>
                        <h3 className="text-xl font-bold text-cream mb-1">{event.title}</h3>
                      </div>
                    </div>
                    <p className="text-cream/70 mb-3">{event.description}</p>
                    <p className="text-cream/50 text-sm italic">{event.details}</p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex justify-center">
                  <motion.div
                    className="w-4 h-4 bg-primary rounded-full ring-4 ring-navy-900"
                    whileInView={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Spacer for layout */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
