'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: '🐙', label: 'GitHub', href: 'https://github.com/krishala-shrestha' },
    { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/krishala-shrestha' },
    { icon: '🐦', label: 'Twitter', href: 'https://twitter.com/krishala_dev' },
    { icon: '✉️', label: 'Email', href: 'mailto:krishalashrestha@example.com' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
  ];

  return (
    <footer className="bg-navy-950 border-t border-primary/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-2xl font-bold gradient-text">Krishala Shrestha</h3>
            <p className="text-cream/60 text-sm">
              Building AI-powered systems and solving real-world problems.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-cream mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'React', 'Next.js', 'AI/ML'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-cream text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-cream mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center text-lg hover:bg-primary/20 hover:border-primary/50 transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-cream/50 text-sm">
            © {currentYear} Krishala Shrestha. All rights reserved.
          </p>
          <p className="text-cream/50 text-sm">
            Designed & Built with <span className="text-primary">❤</span> using Next.js & Tailwind CSS
          </p>
          <a
            href="#home"
            className="text-cream/50 hover:text-primary transition-colors text-sm font-semibold"
          >
            Back to top ↑
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
