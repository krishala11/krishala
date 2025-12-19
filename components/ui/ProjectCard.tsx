'use client';

import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  tagline: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  challenges: string;
  outcome: string;
  impact: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}

export default function ProjectCard({
  project,
  index,
  isSelected,
  onSelect,
}: ProjectCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={onSelect}
      className="text-left h-full"
    >
      <motion.div
        whileHover={{ y: -12, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`glass-hover rounded-2xl p-8 border transition-all duration-500 h-full flex flex-col cursor-pointer group relative overflow-hidden ${
          isSelected
            ? 'border-primary/60 shadow-2xl shadow-primary/30 bg-white/10'
            : 'border-primary/20 hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20'
        }`}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-primary/20 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10">
        {/* Category Badge */}
        <div className="flex items-start justify-between mb-6">
          <motion.span 
            className="px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-primary text-xs font-semibold group-hover:bg-primary/30 group-hover:border-primary/70 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            {project.category}
          </motion.span>
          <motion.span 
            className="text-3xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300"
            whileHover={{ scale: 1.4, rotate: 20 }}
          >
            {project.category === 'Web Platform' && '🌐'}
            {project.category === 'Health & Wellness' && '❤️'}
            {project.category === 'AI & Health' && '🧠'}
            {project.category === 'AI System' && '🤖'}
            {project.category === 'Systems Software' && '⚙️'}
          </motion.span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-cream mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-primary font-semibold text-base mb-4 group-hover:text-purple-300 transition-colors">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-cream/70 text-sm mb-6 flex-grow leading-relaxed group-hover:text-cream/80 transition-colors">
          {project.description}
        </p>

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 bg-navy-700/50 border border-navy-600 text-cream/80 text-xs rounded-lg font-medium group-hover:bg-navy-600/70 group-hover:border-primary/30 group-hover:text-cream transition-all"
            >
              {tech}
            </motion.span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 text-cream/60 text-xs">
              +{project.techStack.length - 3} more
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
          {isSelected ? 'Hide Details' : 'View Details'}
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        </div>
      </motion.div>
    </motion.button>
  );
}
