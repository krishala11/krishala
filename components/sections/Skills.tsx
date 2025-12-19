'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const skillGroups = [
  {
    category: 'Backend & Systems',
    icon: '⚙️',
    skills: [
      { name: 'Python', level: 90, projects: ['Therapist AI', 'Diet Guide', 'Jarvis'] },
      { name: 'API Development', level: 85, projects: ['Rentera', 'Diet Guide'] },
      { name: 'Database Design', level: 80, projects: ['Diet Guide', 'Rentera'] },
      { name: 'PostgreSQL', level: 80, projects: ['Diet Guide', 'Data Management'] },
      { name: 'SQLite', level: 85, projects: ['Rentera', 'Local Storage'] },
    ],
  },
  {
    category: 'AI & ML',
    icon: '🧠',
    skills: [
      { name: 'NLP Fundamentals', level: 85, projects: ['Therapist AI', 'Text Analysis'] },
      { name: 'Chatbot Development', level: 88, projects: ['Therapist AI', 'Conversational AI'] },
      { name: 'AI-driven Reasoning', level: 80, projects: ['Problem Solving', 'Logic Systems'] },
      { name: 'Text-to-Speech Integration', level: 75, projects: ['Therapist AI', 'Jarvis'] },
    ],
  },
  {
    category: 'Web Development',
    icon: '🎨',
    skills: [
      { name: 'HTML', level: 90, projects: ['Rentera', 'Diet Guide'] },
      { name: 'CSS', level: 85, projects: ['Frontend Design', 'Responsive UI'] },
      { name: 'JavaScript', level: 85, projects: ['Rentera', 'Diet Guide'] },
      { name: 'MERN-stack Exposure', level: 75, projects: ['Web Applications', 'Full-stack'] },
    ],
  },
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Python', level: 90, projects: ['AI Projects', 'Backend Systems'] },
      { name: 'C++', level: 80, projects: ['Canteen Management', 'System Programming'] },
      { name: 'JavaScript', level: 85, projects: ['Web Development', 'Frontend'] },
      { name: 'SQL', level: 80, projects: ['Database Management', 'Data Queries'] },
    ],
  },
  {
    category: 'Soft Skills',
    icon: '🌟',
    skills: [
      { name: 'Public Speaking', level: 90, projects: ['Event Hosting', 'Presentations'] },
      { name: 'Leadership', level: 88, projects: ['AIESEC', 'Class Representative'] },
      { name: 'Pitching & Persuasion', level: 85, projects: ['Hult Prize', 'Competitions'] },
      { name: 'Event Planning', level: 85, projects: ['AIESEC Events', 'College Programs'] },
    ],
  },
];

export default function Skills() {
  const [expandedGroup, setExpandedGroup] = useState<number | null>(0);
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-20 bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            Skills & Expertise ⚡
          </h2>
          <p className="text-cream/60 max-w-2xl mx-auto text-lg">
            Grouped by domain. Each skill is tied to real projects where I applied it. 
            <span className="text-primary">Click to explore!</span>
          </p>
        </motion.div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-hover rounded-2xl border border-primary/20 overflow-hidden hover:border-primary/50 transition-all duration-500 group"
            >
              {/* Group Header */}
              <motion.button
                onClick={() => setExpandedGroup(expandedGroup === groupIndex ? null : groupIndex)}
                className="w-full p-8 flex items-center justify-between hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-6 relative z-10">
                  <motion.span 
                    className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300"
                    whileHover={{ scale: 1.3, rotate: 15 }}
                  >
                    {group.icon}
                  </motion.span>
                  <h3 className="text-xl font-bold text-cream group-hover:text-primary transition-colors">
                    {group.category}
                  </h3>
                </div>
                <motion.svg
                  animate={{ rotate: expandedGroup === groupIndex ? 180 : 0 }}
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </motion.button>

              {/* Expanded Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedGroup === groupIndex ? 'auto' : 0,
                  opacity: expandedGroup === groupIndex ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-primary/20"
              >
                <div className="p-6 space-y-4">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                    >
                      <button
                        onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                        className="w-full text-left"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-cream">{skill.name}</h4>
                          <span className="text-primary font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-navy-800 rounded-full h-2 overflow-hidden mb-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-primary to-purple-400"
                          />
                        </div>
                      </button>

                      {/* Projects Used */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedSkill === skill.name ? 'auto' : 0,
                          opacity: expandedSkill === skill.name ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="text-xs text-cream/60 pt-2 flex flex-wrap gap-2">
                          {skill.projects.map((project, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-navy-800 rounded-full"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skill Cloud Alternative View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 glass rounded-xl border border-primary/20"
        >
          <h3 className="text-xl font-bold text-cream mb-6">Tech Stack Summary</h3>
          <div className="flex flex-wrap gap-3">
            {['Python', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'PostgreSQL', 'APIs', 'NLP', 'ML', 'Tailwind CSS', 'System Design', 'C/C++', 'HTML/CSS', 'Leadership'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-cream hover:bg-primary/20 hover:border-primary/50 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
