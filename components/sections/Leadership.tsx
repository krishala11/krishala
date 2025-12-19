'use client';

import { motion } from 'framer-motion';

const leadershipItems = [
  {
    icon: '🌍',
    title: 'AIESEC Leadership',
    role: 'Team Lead & Organizer',
    period: '2022 - 2024',
    description: 'Led cross-functional teams to organize international events and social initiatives.',
    achievements: [
      '50+ students mentored in entrepreneurship',
      'International events reaching 1000+ participants',
      'Structured team workflows and processes',
    ],
    impact: 'Developed leadership skills, team coordination, and social impact awareness.',
  },
  {
    icon: '🏆',
    title: 'Hult Prize Runner-up',
    role: 'Co-founder & Pitch Lead',
    period: '2023',
    description: 'Pitched innovative solution to global social challenge before international jury.',
    achievements: [
      'Finalist among 1000+ global teams',
      'Delivered compelling pitch to judges',
      'Conceptualized scalable solution',
    ],
    impact: 'Demonstrated ability to identify problems, ideate solutions, and pitch convincingly.',
  },
  {
    icon: '�',
    title: 'Class Representative',
    role: 'Student Leader',
    period: '2020 - 2024',
    description: 'Elected representative for Computer Engineering cohort, bridging students and faculty.',
    achievements: [
      'Facilitated academic improvements',
      'Organized student events and activities',
      'Advocated for student needs and concerns',
    ],
    impact: 'Built strong communication and advocacy skills while serving the student community.',
  },
  {
    icon: '�🎤',
    title: 'Event Hosting & Public Speaking',
    role: 'Emcee & Speaker',
    period: '2023 - 2024',
    description: 'Hosted and spoke at university events, conferences, and international forums.',
    achievements: [
      'Hosted 15+ major events',
      'Spoken to 5000+ attendees across events',
      'Delivered keynotes on tech & innovation',
    ],
    impact: 'Built communication skills and personal brand as a thought leader.',
  },
  {
    icon: '❤️',
    title: 'Social Impact Work',
    role: 'Organizer & Volunteer',
    period: 'Ongoing',
    description: 'Organized health camps, blood donation drives, and community development initiatives.',
    achievements: [
      '500+ individuals reached through health camps',
      '200+ blood units collected via drives',
      'Regular mentoring of underprivileged students',
    ],
    impact: 'Commitment to creating positive change beyond technology.',
  },
];

const metrics = [
  { label: 'Events Organized', value: '50+', icon: '📊' },
  { label: 'People Impacted', value: '5000+', icon: '👥' },
  { label: 'Teams Led', value: '10+', icon: '👨‍💼' },
  { label: 'Public Speeches', value: '20+', icon: '🎙️' },
];

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-20 bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">Leadership & Impact</h2>
          <p className="text-cream/60 max-w-2xl mx-auto">
            Beyond code. Driving change through teams, events, and community initiatives.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-primary/20 text-center hover:border-primary/50 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-2">{metric.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-sm text-cream/60">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Items */}
        <div className="space-y-6">
          {leadershipItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-8 border border-primary/20 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-cream mb-1">{item.title}</h3>
                      <p className="text-primary font-semibold">{item.role}</p>
                    </div>
                    <span className="text-sm text-cream/50 flex-shrink-0">{item.period}</span>
                  </div>

                  <p className="text-cream/70 mb-4">{item.description}</p>

                  {/* Achievements */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {item.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <p className="text-sm text-cream/80">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-sm text-primary font-semibold">💡 Key Impact: </p>
                    <p className="text-sm text-cream/70 mt-1">{item.impact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 glass rounded-xl border border-primary/20 text-center"
        >
          <h3 className="text-2xl font-bold text-cream mb-4">Leadership Philosophy</h3>
          <p className="text-lg text-cream/70 max-w-3xl mx-auto leading-relaxed">
            "Leadership isn't about titles or commands. It's about inspiring others to believe in a vision and empowering them to execute it. 
            I lead by example, with empathy, and always putting impact before ego. Technology amplifies human potential—my role is to ensure that potential serves 
            something meaningful."
          </p>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
