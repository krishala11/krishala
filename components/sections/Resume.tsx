'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const education = [
  {
    institution: 'Khwopa Engineering College',
    qualification: 'Bachelor of Computer Engineering',
    period: '2022 - Present',
    status: 'Full Scholarship',
    details: 'Focus on systems, AI, and backend development with strong academic performance',
  },
  {
    institution: 'SOS Hermann Gmeiner School',
    qualification: '+2 Science',
    period: '2020 - 2022',
    status: 'Completed',
    details: 'Strong foundation in mathematics, physics, and programming fundamentals',
  },
  {
    institution: 'Medha Secondary School',
    qualification: 'SEE (Secondary Education Examination)',
    period: '2020',
    status: 'Completed',
    details: 'Achieved excellent results leading to scholarship opportunities',
  },
];

const trainings = [
  {
    title: 'AI & Machine Learning Fundamentals',
    provider: '10-day intensive program',
    year: '2023',
    skills: ['NLP', 'Machine Learning', 'AI Algorithms'],
  },
  {
    title: 'Cybersecurity Training',
    provider: 'Professional Development',
    year: '2023',
    skills: ['Security Protocols', 'Threat Analysis', 'Secure Coding'],
  },
  {
    title: 'Nobel Internship Program',
    provider: 'Industry Experience',
    year: '2022',
    skills: ['Professional Skills', 'Industry Practices', 'Team Collaboration'],
  },
];

const achievements = [
  { title: 'Full Scholarship Award', description: 'Complete Computer Engineering scholarship at Khwopa Engineering College', year: '2022' },
  { title: 'Hult Prize Runner-up', description: 'KHEC 2023 - Runner-up in global entrepreneurship competition', year: '2023' },
  { title: 'AIESEC Team Leadership', description: 'Team Leader of IR in ICX, managing 12+ partnerships', year: '2023-2024' },
  { title: 'Class Representative', description: 'Elected student representative for academic advocacy', year: '2022-Present' },
];

export default function Resume() {
  const [expandedSection, setExpandedSection] = useState<string | null>('education');

  return (
    <section id="resume" className="relative py-20 bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">Resume & Achievements</h2>
          <p className="text-cream/60 max-w-2xl mx-auto">
            Education, trainings, and recognitions that shaped my journey.
          </p>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <a href="/Krishala-Shrestha-CV.pdf" download="Krishala-Shrestha-CV.pdf" className="btn-primary inline-flex items-center gap-2">
            <span>📄</span>
            <span>Download Full CV</span>
          </a>
        </motion.div>

        {/* Education & Trainings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-cream mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-1">{edu.qualification}</h4>
                      <p className="text-cream font-semibold">{edu.institution}</p>
                    </div>
                    <span className="px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-primary text-xs font-semibold flex-shrink-0">
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-cream/70 text-sm mb-2">{edu.details}</p>
                  <p className="text-cream/50 text-xs">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trainings */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-cream mb-6">Trainings & Certifications</h3>
            <div className="space-y-4">
              {trainings.map((training, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-cream mb-1">{training.title}</h4>
                      <p className="text-cream/70 text-sm">{training.provider}</p>
                    </div>
                    <span className="text-primary font-semibold text-sm flex-shrink-0">{training.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {training.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-navy-800 border border-primary/30 rounded text-cream text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-cream mb-6">Awards & Recognitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all group cursor-pointer"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🏅</span>
                  <div className="flex-grow">
                    <h4 className="font-bold text-cream mb-1 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-cream/60 text-sm mb-2">{achievement.description}</p>
                    <p className="text-primary font-semibold text-xs">{achievement.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
