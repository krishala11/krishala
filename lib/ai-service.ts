// AI Service - Client-side responses
// This service provides intelligent responses about the portfolio

const portfolioContext = {
  name: 'Krishala Shrestha',
  role: 'Computer Engineering Student | Backend & AI Developer',
  education: 'Computer Engineering at Khwopa Engineering College (Full Scholarship)',
  techStack: ['Python', 'JavaScript', 'HTML/CSS', 'C++', 'PostgreSQL', 'SQLite', 'Streamlit', 'NLP', 'Text-to-Speech'],
  projects: [
    {
      name: 'Rentera',
      description: 'Safe rental platform for students & workers',
      tech: 'HTML, CSS, JavaScript, Python, SQLite'
    },
    {
      name: 'Diet Guide',
      description: 'Personalized nutrition & health platform',
      tech: 'HTML, CSS, JavaScript, Python, PostgreSQL'
    },
    {
      name: 'Therapist AI',
      description: 'Stigma-free mental health support chatbot',
      tech: 'Python, Streamlit, NLP Libraries, Text-to-Speech APIs'
    },
    {
      name: 'Jarvis',
      description: 'Voice-controlled desktop assistant',
      tech: 'Python, SpeechRecognition, pyttsx3, OS-level Libraries'
    },
    {
      name: 'Canteen Management System',
      description: 'Automated food service management',
      tech: 'C++, Graphics Libraries'
    }
  ],
  leadership: ['AIESEC Team Leader', 'Hult Prize Runner-up', 'Class Representative', 'Event Host', 'Social Impact Work'],
  skills: {
    backend: ['Python', 'API Development', 'Database Design', 'PostgreSQL', 'SQLite'],
    ai: ['NLP Fundamentals', 'Chatbot Development', 'AI-driven Reasoning', 'Text-to-Speech'],
    web: ['HTML', 'CSS', 'JavaScript', 'MERN-stack'],
    programming: ['Python', 'C++'],
    leadership: ['Public Speaking', 'Team Leadership', 'Event Planning', 'Pitching']
  }
};

// Keyword matching for smart responses
const responses: Record<string, string[]> = {
  projects: [
    `I've built several impactful projects: Rentera (safe rental platform for Nepal), Diet Guide (accessible nutrition platform), Therapist AI (stigma-free mental health chatbot), Jarvis (voice assistant), and a Canteen Management System. Each solves real-world problems.`,
    `My projects range from addressing housing safety in Nepal with Rentera, to making mental health support accessible through Therapist AI. I focus on building technology that creates tangible social impact.`,
  ],
  skills: [
    `I work with Python for backend and AI, JavaScript/HTML/CSS for web development, C++ for systems programming, and databases like PostgreSQL and SQLite. I'm experienced with NLP, speech processing, and chatbot development.`,
    `Backend systems with Python, web technologies (HTML/CSS/JS), databases (PostgreSQL/SQLite), AI/NLP systems, and C++ for low-level programming. I choose tools based on the problem's requirements.`,
  ],
  techstack: [
    `Backend: Python, PostgreSQL, SQLite. Web: HTML, CSS, JavaScript. AI: NLP libraries, Streamlit, Text-to-Speech APIs. Systems: C++, Graphics libraries. I believe in using the right tool for each problem.`,
    `Python for backend/AI work, web technologies for user interfaces, databases for data management, and C++ for performance-critical systems. I focus on practical, efficient solutions.`,
  ],
  experience: [
    `I'm a full-scholarship Computer Engineering student at Khwopa Engineering College. I've been Team Leader at AIESEC, achieved runner-up at Hult Prize, served as Class Representative, and organized multiple social impact initiatives.`,
    `Currently studying Computer Engineering with full scholarship at Khwopa Engineering College. Leadership experience through AIESEC, academic representation, and social impact work including health camps and blood donation drives.`,
  ],
  ai: [
    `I'm passionate about AI because it can solve real human problems. My work on Therapist AI focuses on accessible mental health support, while Jarvis demonstrates practical voice interaction. I believe AI should be helpful and ethical.`,
    `AI should serve humanity, not replace it. That's why I build systems like Therapist AI for mental health support and voice assistants that make technology more accessible. I focus on practical, ethical applications.`,
  ],
  leadership: [
    `Through AIESEC, I've led teams, organized international events, and mentored students. As Class Representative, I bridged communication between students and faculty. I've also organized health camps, blood donation drives, and community initiatives.`,
    `Leadership means creating positive impact. Whether it's organizing events that reach thousands, mentoring fellow students, or running health camps for underserved communities, I believe in leading by serving others.`,
  ],
  hiring: [
    `I'm looking for opportunities in backend development, AI systems, or startups solving real-world problems. I want to join a team where I can contribute meaningfully while learning from experienced engineers.`,
    `I'm interested in roles involving backend systems, AI/NLP, or impact-driven technology. I prefer environments where I can grow technically while working on projects that matter to people's lives.`,
  ],
  approach: [
    `I start by deeply understanding the problem before thinking about solutions. I design for simplicity, maintainability, and real-world impact. Every project I build aims to solve a genuine problem I've observed.`,
    `Problem-first approach. I believe technology should serve people, not the other way around. I focus on building systems that are reliable, maintainable, and actually useful to their users.`,
  ],
};

// Smart response generator
export async function getAIResponse(query: string, projectContext?: string): Promise<string> {
  const lowerQuery = query.toLowerCase();

  // If we have project context, provide project-specific responses
  if (projectContext) {
    const project = portfolioContext.projects.find(p => p.name === projectContext);
    if (project) {
      return `Let me tell you about ${project.name}: ${project.description}. It's built with ${project.tech}. What specific aspect would you like to know more about?`;
    }
  }

  // Find matching category
  let selectedResponses = responses['approach']; // default

  if (
    lowerQuery.includes('project') ||
    lowerQuery.includes('built') ||
    lowerQuery.includes('work')
  ) {
    selectedResponses = responses.projects;
  } else if (
    lowerQuery.includes('skill') ||
    lowerQuery.includes('expertise') ||
    lowerQuery.includes('tech')
  ) {
    selectedResponses = responses.skills;
  } else if (
    lowerQuery.includes('stack') ||
    lowerQuery.includes('technology') ||
    lowerQuery.includes('language')
  ) {
    selectedResponses = responses.techstack;
  } else if (
    lowerQuery.includes('experience') ||
    lowerQuery.includes('background') ||
    lowerQuery.includes('education')
  ) {
    selectedResponses = responses.experience;
  } else if (
    lowerQuery.includes('ai') ||
    lowerQuery.includes('machine learning') ||
    lowerQuery.includes('intelligence')
  ) {
    selectedResponses = responses.ai;
  } else if (
    lowerQuery.includes('leader') ||
    lowerQuery.includes('leadership') ||
    lowerQuery.includes('aiesec')
  ) {
    selectedResponses = responses.leadership;
  } else if (
    lowerQuery.includes('hire') ||
    lowerQuery.includes('opportunity') ||
    lowerQuery.includes('intern')
  ) {
    selectedResponses = responses.hiring;
  } else if (
    lowerQuery.includes('approach') ||
    lowerQuery.includes('philosophy') ||
    lowerQuery.includes('think')
  ) {
    selectedResponses = responses.approach;
  }

  // Return random response from category
  const response = selectedResponses[Math.floor(Math.random() * selectedResponses.length)];
  
  // Simulate async delay for realistic feel
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
  
  return response;
}
