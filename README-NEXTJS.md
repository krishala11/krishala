# 🚀 Modern AI-Powered Portfolio

A flagship portfolio website showcasing an AI & Backend Developer's expertise, projects, leadership, and passion for building intelligent systems.

## 🎯 What's Inside

- **Hero Section** - Instant positioning with AI assistant teaser
- **About Me** - Timeline-based narrative of the journey
- **Skills** - Grouped by domain with project context
- **Projects** - Story-driven project showcase with full details
- **Leadership** - Impact metrics and achievements
- **AI Playground** - Interactive AI demos (mental health check-in, problem reasoning, tech discussion)
- **Resume** - Education, trainings, and achievements
- **Contact** - Contact form and social links

## ⚡ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + Custom CSS
- **Animation**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel-ready (static-first with client-side dynamics)

## 🎨 Design System

- **Dark Blue Theme**: Navy/midnight blue background with off-white text
- **Primary Color**: Purple (#6244C5) for accents
- **Animations**: Smooth transitions, micro-interactions, scroll effects
- **Responsive**: Mobile-first, fully responsive design

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Deploy to Vercel

```bash
npx vercel deploy
```

## 📁 Project Structure

```
├── app/                      # Next.js App Router
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── layout/              # Navbar, Footer
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Leadership.tsx
│   │   ├── AIPlayground.tsx
│   │   ├── Resume.tsx
│   │   └── Contact.tsx
│   └── ui/                  # Reusable UI components
│       ├── AnimatedBackground.tsx
│       ├── AIAssistantTeaser.tsx
│       ├── AIChat.tsx
│       ├── AIPlaygroundDemo.tsx
│       └── ProjectCard.tsx
├── lib/                     # Utilities & services
│   └── ai-service.ts        # AI response logic
├── styles/                  # CSS files
│   └── globals.css
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🎯 Key Features

### Dynamic Interactivity
- Smooth scroll effects and animations
- Interactive timeline (About section)
- Expandable skill cards with project context
- Project detail expansion with AI explainer
- Animated leadership metrics

### AI Integration
- Client-side AI chatbot with smart responses
- AI playground with multiple lab scenarios
- Privacy-first design (no data transmission)
- Pre-trained on portfolio content

### Performance
- Optimized images and lazy loading
- Static generation where possible
- Client-side hydration for interactivity
- Fast page transitions

### Accessibility
- Semantic HTML
- Proper color contrast
- Keyboard navigation
- ARIA labels where needed

## 🔧 Customization

### Update Personal Information

Edit the following files to personalize:
- `lib/ai-service.ts` - AI chatbot responses
- `components/sections/Projects.tsx` - Project details
- `components/sections/Leadership.tsx` - Leadership achievements
- `components/layout/Footer.tsx` - Contact information

### Change Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
      secondary: '#YOUR_COLOR',
      // ... more colors
    }
  }
}
```

### Add New Sections

1. Create a new component in `components/sections/`
2. Import it in `app/page.tsx`
3. Add it to the component tree

## 🌐 Deployment Checklist

- [ ] Update contact information
- [ ] Add real email form handler (Formspree, SendGrid, etc.)
- [ ] Add real AI API integration (OpenAI, Anthropic, etc.)
- [ ] Update social links in Footer
- [ ] Add Google Analytics
- [ ] Test on mobile devices
- [ ] Optimize images
- [ ] Set up SEO metadata
- [ ] Enable HTTPS
- [ ] Test accessibility

## 📝 License

This portfolio template is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, customize, and make it your own!

## 📧 Support

For issues or questions, reach out at: ishwor@example.com

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
