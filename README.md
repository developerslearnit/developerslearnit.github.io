# Premium Senior Software Engineer Portfolio Website

A premium, modern, and production-ready developer portfolio website built using React, Vite, TypeScript, Tailwind CSS, and Framer Motion. 

This portfolio showcases expertise in **ASP.NET Core**, **Cloud Native Architectures (Kubernetes, Docker, Azure)**, **AI Integration (Azure OpenAI)**, and **React Native Mobile Development**.

---

## 🚀 Key Features

*   **Modern Visual Aesthetics**: Glassmorphism cards, glowing grids, custom deep dark slate gradient colors, and elegant fonts (Outfit & Inter).
*   **Interactive Background**: Canvas-based interactive particle stream connecting to the user's cursor.
*   **DevOps Deployment Pipeline Map**: Dynamic step-by-step pipeline layout visualizing deployment from local code to Docker container, Kubernetes AKS cluster orchestration, Azure cloud services, and end-users.
*   **Interactive AI Feature Previews**: Realistic simulation panels for AI Assistants (RAG queries), Workflow Automation Agents (logs), and Intelligent Search (vector embeddings).
*   **Mobile Screen Simulator**: Responsive smartphone mockup displaying mock app metrics and dynamic interface pages.
*   **Active Navigation & Smooth Scroll**: Glassmorphic sticky header with intersection scroll-spy detection.
*   **Telemetry Preloader**: System boot loading screen counting up to 100% with mock assemblies loading text.
*   **GitHub Pages Ready**: Out-of-the-box support for CI/CD automated deployment or manual command line execution.
*   **SEO Optimization & Accessibility**: Rich meta tags, search keywords, unique component IDs, and semantic tags.

---

## 🛠️ Technology Stack

*   **Bundler/Framework**: [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
src/
 ├── assets/             # Global assets (images, logos, styles)
 ├── components/         # Premium modular components
 │    ├── AIEngineering.tsx       # AI and OpenAI integration panels
 │    ├── About.tsx               # Career pill overview cards
 │    ├── BackendEngineering.tsx  # C# and Clean Architecture mockups
 │    ├── CloudDevOps.tsx         # Docker, K8s, and Pipeline maps
 │    ├── Contact.tsx             # Validated form and social SVGs
 │    ├── Experience.tsx          # Vertical progress timeline
 │    ├── Footer.tsx              # Copyright and secondary navigation
 │    ├── Hero.tsx                # Dynamic headline and terminal simulator
 │    ├── Navbar.tsx              # Active sticky menu bar
 │    ├── ParticleBackground.tsx  # Interactive canvas stars
 │    ├── Projects.tsx            # Portfolio cards with details
 │    ├── ReactNativeMobile.tsx   # Phone mockup with screens
 │    └── Statistics.tsx          # Scroll-triggered count metrics
 ├── pages/              # Primary route pages
 │    └── Home.tsx                # Home coordinator and loader
 ├── App.tsx             # App layout wrapper
 └── main.tsx            # App bootstrap entry
```

---

## 💻 Local Development Setup

Follow these instructions to download dependencies, start the hot-reloading development server, and compile production assets.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or above recommended) installed on your system.

### 1. Install Dependencies

In the project root, run:

```bash
npm install
```

### 2. Run in Development Mode

To start the local developer server, run:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to see the site.

### 3. Verify TypeScript Compilation

To compile and verify typing structures without generating files:

```bash
npx tsc --noEmit
```

### 4. Build Production Bundle

To build optimized assets in the `dist` directory:

```bash
npm run build
```

---

## 🚀 GitHub Pages Deployment

The project is preconfigured to load assets correctly inside the subdirectories of a GitHub repository base.

### Option A: Automatic Deployment via GitHub Actions (Recommended)

A workflow file is located in `.github/workflows/deploy.yml`. When you push code to the `main` or `master` branch on GitHub, the pipeline will:
1.  Check out the repository.
2.  Install dependencies and build the static files.
3.  Automatically commit and push the build to the `gh-pages` branch.

### Option B: Local CLI Deployment

To build and deploy the application manually directly from your local terminal:

```bash
npm run deploy
```

This runs `predeploy` (which builds the application inside the `/dist` folder) and then publishes the directory directly to your repository's `gh-pages` branch using the `gh-pages` CLI package.
