# ⭐ Rating Stars Project

Welcome to the **Rating Stars** project! This is a clean, interactive, and responsive web application built to master state management, hover effects, mouse events, and dynamic icon rendering in React.

---

# 🌍 Rating Stars App

A modern, responsive React UI component for creating an interactive star rating system. Built with React, Vite, and designed with real-time mouse hover and click state tracking to handle dynamic star selections.

> **Master state controls, mouse events (onMouseEnter, onMouseLeave, onClick), and conditional styling**

---

## 🛠️ Tech Stack
* **Framework:** React.js (Vite Template)
* **Styling:** Custom CSS (Modular & Responsive)
* **Language:** JavaScript (ES6+), HTML, CSS

---

## ✨ Features

- ⭐ **Interactive Rating** – Click to lock in a rating or hover to preview stars dynamically
- 🎨 **Live Hover State** – Stars change color instantly on hover and reset correctly on mouse leave
- 📱 **Fully Responsive** – Centralized layout optimized for all screen sizes
- ⚡ **Lightning Fast** – Vite-powered development with Hot Module Replacement (HMR)
- 🚀 **Production Ready** – Clean, maintainable, and modular multi-file codebase

---

## 🛠️ Tech Stack & Dependencies

| Technology / Library | Version | Purpose |
|----------------------|---------|---------|
| **React** | ^19.2.7 | UI framework |
| **Vite** | ^8.1.1 | Build tool & dev server |
| **React Icons** | ^5.0.0 | High-quality SVG star icons |
| **CSS** | ^3.7.18 | Custom responsive layout & star transitions |
| **JavaScript** | ES6+ | Language |

---

## 📂 Project Structure

**Generated:** 7/9/2026, 6:03:06 PM

**Root Path:** `/workspaces/React_Projects`

```

├── 📁 Projects
│   └── 📁 Rating_Stars
│       ├── 📁 public
│       │   ├── 🖼️ favicon.svg
│       │   └── 🖼️ icons.svg
│       ├── 📁 src
│       │   ├── 📁 Components
│       │   │   ├── 📄 Index.jsx
│       │   │   └── 🎨 star.css
│       │   ├── 🎨 App.css
│       │   ├── 📄 App.jsx
│       │   ├── 🎨 index.css
│       │   └── 📄 main.jsx
│       ├── ⚙️ .gitignore
│       ├── ⚙️ .oxlintrc.json
│       ├── 📝 README.md
│       ├── 🌐 index.html
│       ├── ⚙️ package-lock.json
│       ├── ⚙️ package.json
│       └── 📄 vite.config.js
└── 📝 README.md

```

---

## 🎯 Component Overview

### Core Components

| Component / File | Purpose |
|-----------|---------|
| **Index.jsx** | Tracks rating and hover states, handles mouse events (`onClick`, `onMouseMove`, `onMouseLeave`), and renders the dynamic star row. |
| **star.css** | Manages custom active/inactive star colors, sizing, and smooth hover transitions. |

---

## 📦 How to Setup & Build This Project From Scratch

Every time I initialize a new React project, I follow these exact standard steps. You can use this guide to recreate or understand the workspace structure:

### Step 1: Initialize Vite Project
Run the following command in your terminal:
```bash
npm create vite@latest
```

## During the prompt configuration, fill out the selections exactly like this:

Proceed? y 

Project Name: Rating_Stars 

Package Name: rating_stars 

Select a framework: React 

Select a variant: JavaScript 

With oxy? No 

Install with npm? Yes 

---

## 💻 How to Run the Project Local Environment 

If you want to pull this project and run it again locally, simply execute these commands:

```bash
# Navigate to the project folder
cd Projects/Rating_Stars

# Start the local development server
npm run dev
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** package manager
- Basic knowledge of React and JavaScript

### Installation

1. **Clone the repository**
```bash
git clone https://github.com
cd React_Projects/Projects/Rating_Stars
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

---

## 📜 Available Scripts

### Development
```bash
npm run dev
```

---

## 📦 React Icons Installation & Setup

This project uses the `react-icons` library to display stars. Here is how to set it up:

### Step 1: Install Package
Run the following command inside your project folder in the terminal:
```bash
npm i react-icons
```

### Step 2: Import & Use in File
Import the library at the top of whichever file you want to use it in (such as `Components/Index.jsx`), and implement it inside your JSX:
```jsx
// Import at the top of the file (e.g., FontAwesome Star Icons)
import { FaStar } from 'react-icons/fa';

// Use it inside your component like this
function StarComponent() {
  return (
    <FaStar 
      size={40} 
      color="gold" 
    />
  );
}
```

---

## 🎨 Styling Guide

This project uses standard external **CSS** classes combined with conditional class names (e.g., `active` / `inactive`) to change the star colors dynamically based on state indices.

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [React Icons Docs](https://github.io)

---

## 💡 Core Concepts Covered

- ✅ **State Hooks** – Tracking index positions for clicks and hovers using `useState`
- ✅ **Mouse Event Handlers** – Precise management of `onClick`, `onMouseEnter`, and `onMouseLeave`
- ✅ **Dynamic Class Assignment** – Injecting CSS classes conditionally based on index comparisons
- ✅ **Array Mapping** – Generating a specific number of components using `[...Array(noOfStars)]`
- ✅ **Responsive Design** – Center viewport alignment using standard Flexbox layouts

---

## 👤 Author

**MehmoodCoder**

- 🔗 GitHub: [https://github.com/MehmoodCoder](https://github.com/MehmoodCoder)
- 🌐 Portfolio: [My Portfolio Link](https://mh56-portfolio.vercel.app)

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 Changelog

### v1.0.0 (Initial Release)
- ✨ Implemented star rows using dynamic mapping
- 🎯 Added interactive preview states via mouse hover tracking
- 💅 Smooth gold color transition equipped for active ratings

---

### **Happy coding without chai ! ☕**
