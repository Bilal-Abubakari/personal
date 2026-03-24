# Bilal Abubakari — Fullstack Software Engineer Portfolio

A modern, professional portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Designed to showcase engineering expertise with a clean, structured, and minimal aesthetic.

## 🎯 Design Philosophy

This portfolio is built with the mindset of a **serious, high-caliber engineer**:

- **Structured**: Clear information hierarchy and logical content flow
- **Minimal**: No unnecessary animations or visual clutter
- **Technical**: Showcases real engineering work and system thinking
- **Intentional**: Every design decision serves a purpose
- **Accessible**: Full keyboard navigation and screen reader support

## ✨ Features

- ⚡ **Next.js 15** with App Router for optimal performance
- 🎨 **Tailwind CSS** for responsive, utility-first styling
- 🌙 **Dark/Light Mode** with system preference detection
- 📱 **Fully Responsive** design for all devices
- 🔍 **SEO Optimized** with metadata, Open Graph, and JSON-LD
- ♿ **Accessible** following WCAG guidelines
- 🚀 **Performance Optimized** for 90+ Lighthouse scores
- 📝 **TypeScript** for type safety throughout

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (Strict Mode) |
| Styling | Tailwind CSS |
| Animations | Framer Motion (subtle) |
| Icons | Lucide React |
| UI Components | Custom primitives + Radix UI |
| Deployment | Vercel-ready |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt configuration
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, About, Experience, etc.
│   ├── ui/                 # Reusable UI primitives
│   └── theme-provider.tsx  # Dark mode context
├── data/
│   └── resume.ts           # Experience, projects, skills data
├── lib/
│   ├── constants.ts        # Site configuration
│   ├── schema.ts           # JSON-LD structured data
│   └── utils.ts            # Utility functions
└── types/
    └── index.ts            # TypeScript interfaces
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/bilalabubakari/portfolio.git

# Navigate to project
cd portfolio-next

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information

1. Edit `src/lib/constants.ts` for site metadata and social links
2. Edit `src/data/resume.ts` for experience, projects, and skills
3. Replace `public/profile.jpg` with your photo

### Modify Sections

Each section is a self-contained component in `src/components/sections/`. Edit individual files to customize content and layout.

### Theme Colors

The color scheme uses Tailwind's slate palette with blue accents. Modify `src/app/globals.css` to adjust the color variables.

## 🔍 SEO Features

- **Metadata API**: Dynamic title, description, and keywords
- **Open Graph**: Social media preview cards
- **Twitter Cards**: Optimized for Twitter sharing
- **JSON-LD**: Structured data for Person and Website schemas
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives

## 📊 Performance Targets

| Metric | Target |
|--------|--------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 95+ |

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

## 👤 Author

**Bilal Abubakari**
- Website: [bilalabubakari.dev](https://bilalabubakari.dev)
- LinkedIn: [/in/bilalabubakari](https://linkedin.com/in/bilalabubakari)
- GitHub: [@bilalabubakari](https://github.com/bilalabubakari)

---

Built with precision and intent. 🏗️
