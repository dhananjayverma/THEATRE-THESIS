# 🎭 Theatre Thesis - Academy of Dramatic Arts & Screen Acting

A premium, interactive web application built for **Theatre Thesis**, a professional acting academy and drama school. The application features a cinematic dark mode design, rich micro-animations, fully responsive layouts, and standard page-based routing.

---

## ✨ Features

- **🎬 Autoplay Video Background**: A high-contrast acting workshop video loop integrated on the Home Page hero, styled with responsive typography overlays.
- **🔄 Dynamic Value Rotator**: Smooth, sliding text animation cycling through the school's core services and training specialties.
- **🌟 Interactive Methodology Tabs**: An engaging tab switcher on the About Page enabling students to explore different acting methodologies (Stanislavski's System, Meisner Technique, Screen Nuances, Voice & Body Instrument).
- **📚 Curated Courses & Services**: Detailed, structured cards detailing Beginner Acting, Theatre Workshops, Camera Acting, and Voice/Body Training.
- **🖼️ Categorized Media Gallery**: A fully responsive filterable image gallery with lightbox support.
- **📬 Contact & Enrollment**: Interactive contact form and floating quick-action buttons for direct enrollment inquiries.
- **⚡ Page Transitions**: Standard page-based routes wrapper animated using Framer Motion with exit animations.

---

## 🛠️ Technology Stack

- **Core Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 5](https://vite.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + [PostCSS](https://postcss.org/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM 7](https://reactrouter.com/)
- **Database Integration**: [Supabase JS Client](https://supabase.com/)

---

## 📁 Directory Structure

```text
├── dist/                     # Production build output
├── public/                   # Static assets (favicons, etc.)
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── AnimatedCounter.tsx     # Stats counter animation
│   │   ├── CurtainTransition.tsx   # Theatre curtain page load effect
│   │   ├── FaqAccordion.tsx        # Accordion-style QA blocks
│   │   ├── FloatingActions.tsx     # Direct WhatsApp & call triggers
│   │   ├── Footer.tsx              # Footer layout with social links
│   │   ├── Header.tsx              # Responsive navigation header
│   │   ├── PageTransition.tsx      # Slide/fade route animations
│   │   └── ScrollToTop.tsx         # Auto scroll reset helper
│   ├── pages/                # Distinct page components
│   │   ├── About.tsx               # Studio pillars, methodology, faculty
│   │   ├── Contact.tsx             # Location, contact form
│   │   ├── Courses.tsx             # Program levels, highlights, FAQ
│   │   ├── Gallery.tsx             # Filterable lightbox media grid
│   │   ├── Home.tsx                # Video Hero, value scroller, previews
│   │   ├── Services.tsx            # 15 detailed training specialties
│   │   └── Testimonials.tsx        # Student success reviews
│   ├── App.tsx               # Main App wrapper & route configuration
│   ├── index.css             # Main stylesheet & custom utility declarations
│   └── main.tsx              # App bootstrap entry point
├── package.json              # Script and dependency registry
├── tailwind.config.js        # Custom theme color & font configurations
└── tsconfig.json             # TypeScript rules definition
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### Installation

1. Clone or download this project workspace.
2. Open your terminal in the project root folder.
3. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server with hot-module replacement (HMR):
```bash
npm run dev
```
The application will be served at `http://localhost:5173`.

### Production Build

To compile the application bundle for production:
```bash
npm run build
```
The built, minified assets will be compiled inside the `dist/` directory.

### Preview Production Build

To preview the built production bundle locally:
```bash
npm run preview
```

---

## 📝 Design Customizations

### Colors & Typography
- The custom color scheme is defined in `tailwind.config.js` under the `theatre-black`, `theatre-dark`, and `gold` palettes.
- Typography styles use standard display fonts styled with tracking letters, italics, and custom gradients.

### Media Assets
- All images are sourced from high-quality, verified Pexels CDNs. 
- Avoid using low-resolution or generic placeholder gradient images (e.g. `7130543` or `2777318`). Utilize verified active photos showing real subjects like `3785810`.
