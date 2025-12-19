'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import AIChat from '@/components/ui/AIChat';

const projects = [
  {
    id: 1,
    title: 'Rentera',
    tagline: 'Safe Rental Platform for Students & Workers',
    category: 'Web Platform',
    description: 'Web platform connecting renters and property owners directly, eliminating unsafe middleman-driven rental practices in Nepal.',
    problem: 'Unsafe, unverified, middleman-driven rental market in Nepal with no transparency or safety measures.',
    solution: 'Built direct connection platform with smart property verification, user authentication, and transparent communication.',
    architecture: 'Web-based application with user verification system, live chat integration, and rental history tracking.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQLite'],
    challenges: 'Ensuring property verification accuracy, building trust between users, managing real-time communication.',
    outcome: 'Provides safe rental transactions with verified user roles and transparent request system.',
    impact: 'Addresses critical housing safety issues for students and workers in Nepal.',
    image: '/projects/rentera.jpg',
  },
  {
    id: 2,
    title: 'Diet Guide',
    tagline: 'Personalized Nutrition & Health Platform',
    category: 'Health & Wellness',
    description: 'Web application providing accessible, personalized dietary guidance and health tracking with expert consultations.',
    problem: 'Limited access to affordable and personalized dietary guidance, especially in remote areas.',
    solution: 'Built comprehensive platform for health tracking, expert consultations, and customized diet plans.',
    architecture: 'Web application with booking system, payment integration, and personalized plan generation.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Python', 'PostgreSQL'],
    challenges: 'Creating affordable pricing models, ensuring expert availability, managing user health data.',
    outcome: 'Connects users with nutrition experts and provides lifestyle-specific diet plans.',
    impact: 'Makes professional dietary guidance accessible and affordable for broader population.',
    image: '/projects/diet-guide.jpg',
  },
  {
    id: 3,
    title: 'Therapist AI',
    tagline: 'Stigma-Free Mental Health Support Chatbot',
    category: 'AI & Health',
    description: 'AI chatbot providing safe, accessible emotional support with daily check-ins, mood tracking, and guided self-care.',
    problem: 'Mental health stigma and lack of accessible support systems prevent people from seeking help.',
    solution: 'Built supportive AI chatbot with anxiety/depression flows, mood tracking, and text-to-speech integration.',
    architecture: 'Streamlit-based application with NLP processing, mood analysis, and voice output capabilities.',
    techStack: ['Python', 'Streamlit', 'NLP Libraries', 'Text-to-Speech APIs'],
    challenges: 'Ensuring ethical responses, handling crisis situations appropriately, maintaining user privacy.',
    outcome: 'Provides daily emotional support and guided self-care routines in stigma-free environment.',
    impact: 'Offers accessible mental health support while clearly maintaining supportive (not diagnostic) role.',
    image: '/projects/therapist-ai.jpg',
  },
  {
    id: 4,
    title: 'Jarvis',
    tagline: 'Voice-Controlled Desktop Assistant',
    category: 'AI System',
    description: 'Voice-activated desktop assistant for efficient system interactions through natural language commands.',
    problem: 'Inefficient manual system interactions requiring multiple clicks and navigation steps.',
    solution: 'Built voice-controlled assistant handling app launching, browsing, media playbook, and file operations.',
    architecture: 'Python-based system with speech recognition, command processing, and OS-level integration.',
    techStack: ['Python', 'SpeechRecognition', 'pyttsx3', 'OS-level Libraries'],
    challenges: 'Accurate voice recognition, command disambiguation, system permission management.',
    outcome: 'Streamlines desktop operations through intuitive voice commands.',
    impact: 'Demonstrates practical application of speech processing and system automation.',
    image: '/projects/jarvis.jpg',
  },
  {
    id: 5,
    title: 'Canteen Management System',
    tagline: 'Automated Food Service Management',
    category: 'Systems Software',
    description: 'Desktop-based automated management system solving slow manual ordering and inventory issues in institutional canteens.',
    problem: 'Slow manual ordering and inventory tracking issues causing inefficiencies in canteens.',
    solution: 'Built comprehensive desktop system automating order processing, billing, inventory tracking, and menu management.',
    architecture: 'C++ desktop application with graphics interface and efficient data management algorithms.',
    techStack: ['C++', 'Graphics Libraries'],
    challenges: 'Real-time order processing, inventory synchronization, user interface design with graphics libraries.',
    outcome: 'Streamlines canteen operations with automated billing and inventory management.',
    impact: 'Demonstrates systems programming skills and practical problem-solving for institutional efficiency.',
    image: '/projects/canteen.jpg',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');
  const [showAIChat, setShowAIChat] = useState(false);
  const [aiChatProject, setAiChatProject] = useState<string | null>(null);

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-20 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">Featured Projects</h2>
          <p className="text-cream/60 max-w-2xl mx-auto">
            Real-world systems built from ideation to production. Each project tells a story of problem-solving, learning, and impact.
          </p>
        </motion.div>

        {/* Filter Buttons */}
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
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-navy-800 text-cream/70 hover:text-cream hover:bg-navy-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isSelected={selectedProject === project.id}
              onSelect={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            />
          ))}
        </div>

        {/* Expanded Project Details */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 p-8 glass rounded-xl border border-primary/20"
          >
            {(() => {
              const project = projects.find(p => p.id === selectedProject);
              if (!project) return null;

              return (
                <div className="space-y-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-cream mb-2">{project.title}</h3>
                      <p className="text-primary font-semibold">{project.tagline}</p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-cream/50 hover:text-cream transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Problem & Solution */}
                    <div>
                      <h4 className="text-lg font-bold text-cream mb-2">The Problem</h4>
                      <p className="text-cream/70">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-cream mb-2">The Solution</h4>
                      <p className="text-cream/70">{project.solution}</p>
                    </div>
                  </div>

                  {/* Architecture */}
                  <div>
                    <h4 className="text-lg font-bold text-cream mb-2">Architecture & Design</h4>
                    <p className="text-cream/70">{project.architecture}</p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-bold text-cream mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-cream text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Outcome */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-cream mb-2">Challenges</h4>
                      <p className="text-cream/70 text-sm">{project.challenges}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-cream mb-2">Outcome</h4>
                      <p className="text-cream/70 text-sm">{project.outcome}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-cream mb-2">Impact</h4>
                      <p className="text-cream/70 text-sm">{project.impact}</p>
                    </div>
                  </div>

                  {/* Explainer Button */}
                  <div className="pt-4 border-t border-primary/20">
                    <button 
                      onClick={() => {
                        setAiChatProject(project.title);
                        setShowAIChat(true);
                      }}
                      className="btn-primary"
                    >
                      Ask AI to Explain This Project
                    </button>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}
      </div>

      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      {/* AI Chat Modal */}
      {showAIChat && (
        <AIChat 
          project={aiChatProject || undefined}
          onClose={() => {
            setShowAIChat(false);
            setAiChatProject(null);
          }} 
        />
      )}
    </section>
  );
}
