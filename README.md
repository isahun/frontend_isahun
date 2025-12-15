# Sprint 1: Bookmark Landing Page

Responsive landing page for the **Bookmark** application, developed as part of **Sprint 1** of the Frontend learning path.

The project follows an **iterative development approach**, where each phase has been implemented in a **separate branch**.  
The `main` branch acts as a **documentation hub** for the project.

Here are the three iterations, each on its own branch:

- **feature/vanilla-implementation** – Layout built with **pure HTML, CSS and JS**, applying semantic structure, accessibility, and responsive design.  
- **feature/sass-implementation** – CSS refactored using **SASS (SCSS)**, with a modular structure, variables, and mixins.  
- **feature/tailwind-implementation** – Final refactor using Tailwind CSS with Vite: leveraging utility classes, theme customization, and an optimized production build.

Each branch is **self-contained** and fulfills the requirements of its corresponding iteration.

---

## 📌 Project Goals

- Practice semantic HTML and layout best practices
- Apply web accessibility guidelines (WCAG)
- Implement responsive design using a *Mobile First* approach
- Refactor styles using SASS
- Refactor the project using Tailwind CSS
- Work with Git using a professional branch-based workflow

---

## 🌿 Branch Structure

The project is organized into **three main branches**, one per iteration.  
No final merge has been performed into `main`, as each branch represents a complete and functional delivery.

---

## 📱 Responsive Design

- **Mobile First** approach
- Adapted to:
  - mobile devices
  - tablets
  - desktop screens
- Layout built with Flexbox mostly
- No fixed widths

---

## ♿ Accessibility

Basic accessibility guidelines have been applied:

- Semantic HTML structure
- `aria-label` attributes where needed
- Descriptive `alt` text for images
- Proper color contrast
- Keyboard-accessible interactive elements

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- SASS (SCSS)
- Tailwind CSS v4
- Vanilla JavaScript
- Vite
- Git & GitHub

---

## 🚀 Available Scripts

npm run dev       # Development environment
npm run build     # Production build
npm run preview   # Preview production build


.gitignore
The project ignores:

node_modules/
.DS_Store
*.log
frontend_isahun_workspace_16112025.code-workspace

---

## Installation

This project was developed following an **iterative approach**, and each branch uses a **different setup**, aligned with the goals of each iteration. For this reason, installation and execution steps **vary depending on the branch**.

### 
1️⃣ Clone the repository
git clone https://github.com/isahun/frontend_isahun.git
cd Sprint1
npm install

2️⃣ Switch to the branch you want to review
git checkout <branch-name>

🔹 feature/vanilla-implementation
  All code is located inside the Sprint1 directory
  No build tools required
  👉 Run: Open the HTML files directly in the browser

🔹 feature/sass-implementation
  The project remains inside the Sprint1 directory
  Styles are written using SASS (SCSS)
  👉 Compile styles:
  npx sass src/styles:dist/styles
  Then open the HTML files in the browser.

🔹 feature/tailwind-implementation
  This iteration uses Tailwind CSS with Vite
  The code is located inside the subdirectory:
  Sprint1/tailwind-implementation/
  👉 Steps:
  
  cd tailwind-implementation
  npm install
  npm run dev
  Or for production:
  npm run build
  npm run preview

  Note: this iteration uses Vite, so the project should not be opened directly with Live Server after the build.

  ℹ️ Structure note
  The difference in folder structure between branches is a deliberate decision:
    Early iterations focus on layout and styling fundamentals
    The final iteration introduces modern tooling (Vite + Tailwind)
    This approach helps illustrate the evolution of the project and different frontend workflows.
---
