# 🧩 Menu UI Project

Welcome to the **Menu UI** project! This is a clean, interactive, and responsive React application built to master nested menu state management, UI transitions, and polished responsive layout styling.

---

# 🌍 Menu UI App

A modern, responsive React navigation utility for displaying a collapsible multi-level menu tree. Built with React, Vite, and styled with custom CSS, this app supports nested menu toggles, smooth interactive hover effects, and compact mobile-friendly spacing.

> **Master nested state control, conditional rendering, responsive layout, and icon-based menu toggles**

---

## 🛠️ Tech Stack
* **Framework:** React.js (Vite Template)
* **Styling:** Custom CSS
* **Language:** JavaScript (ES6+), HTML, CSS

---

## ✨ Features

- ➕ **Nested Menu Toggle** – Expand and collapse nested menu sections with icon buttons
- 📱 **Responsive Design** – Adapts cleanly to mobile and desktop screen sizes using modern CSS layout techniques
- 🎯 **Interactive Hover States** – Smooth hover and focus styling for improved usability
- ⚡ **Fast Reloads** – Vite-powered development with HMR for quick feedback loops
- 🧠 **State-Driven UI** – Uses React `useState` for managing open/closed menu levels
- 🎨 **Polished Visual Theme** – Glassmorphism-inspired backgrounds and subtle shadows for a modern menu appearance

---

## 🛠️ Tech Stack & Dependencies

| Technology / Library | Version | Purpose |
|----------------------|---------|---------|
| **React** | ^19.2.7 | UI framework |
| **Vite** | ^8.1.1 | Build tool & dev server |
| **React Icons** | ^5.7.0 | Expand/collapse icon buttons |
| **CSS** | Custom | Responsive menu styling |
| **JavaScript** | ES6+ | Language |

---

## 📂 Project Structure

**Generated:** 7/12/2026

**Root Path:** `/workspaces/React_Projects`

```

├── 📁 Projects
│   └── 📁 Menu_UI
│       ├── ⚙️ .gitignore
│       ├── ⚙️ .oxlintrc.json
│       ├── 🌐 index.html
│       ├── 📁 node_modules
│       ├── 📁 public
│       │   ├── 🖼️ favicon.svg
│       │   └── 🖼️ icons.svg
│       ├── ⚙️ package-lock.json
│       ├── ⚙️ package.json
│       ├── 📁 src
│       │   ├── 📄 App.jsx
│       │   ├── 📁 Components
│       │   │   ├── 📄 Data.jsx
│       │   │   ├── 📄 Index.jsx
│       │   │   ├── 📄 Menu-Items.jsx
│       │   │   ├── 📄 Menu-List.jsx
│       │   │   └── 🎨 Styles.css
│       │   └── 📄 main.jsx
│       ├── 📝 README.md
│       └── ⚙️ vite.config.js
└── 📝 README.md

```

---

## 🎯 Component Overview

### Core Components

| Component / File | Purpose |
|-----------|---------|
| **App.jsx** | Renders the top-level menu UI and passes menu data into the component tree. |
| **Data.jsx** | Contains the menu configuration and nested menu structure. |
| **Index.jsx** | Wraps the menu list and applies global menu container layout. |
| **Menu-List.jsx** | Renders a menu list and maps menu items into expandable entries. |
| **Menu-Items.jsx** | Handles nested state toggles, icon display, and conditional rendering of child menus. |
| **Styles.css** | Provides responsive styles, hover effects, nested indentation, and layout polish. |

---

## 📦 How to Setup & Build This Project From Scratch

### Step 1: Initialize Vite Project
Run the following command in your terminal:
```bash
npm create vite@latest
```

## During the prompt configuration, fill out the selections exactly like this:

Proceed? y 

Project Name: Menu_UI 

Package Name: menu_ui 

Select a framework: React 

Select a variant: JavaScript 

With oxy? No 

Install with npm? Yes 

---

## 💻 How to Run the Project Local Environment 

If you want to pull this project and run it again locally, simply execute these commands:

```bash
# Navigate to the project folder
cd Projects/Menu_UI

# Start the local development server
npm install
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
git clone https://github.com/<your-repo>.git
cd React_Projects/Projects/Menu_UI
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

This project uses the `react-icons` library to display expand/collapse menu icons.

### Step 1: Install Package
Run the following command inside your project folder in the terminal:
```bash
npm install react-icons
```

### Step 2: Import & Use in File
Import the library at the top of the file and use it inside JSX:
```jsx
import { FaMinus, FaPlus } from 'react-icons/fa';
```

---

## 🎨 Styling Guide

This project uses responsive menu layout styling with a glassy container, nested list indentation, and hover transforms. Child menus are rendered with safe width calculation so the nested UI remains inside the parent container.

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [React Icons Docs](https://react-icons.github.io/react-icons/)

---

## 💡 Core Concepts Covered

- ✅ **Nested State Management** – Controlling menu expansion using React `useState`
- ✅ **Conditional Rendering** – Showing/hiding child menu content dynamically
- ✅ **Responsive Layouts** – Handling small-screen menu layout with CSS media queries
- ✅ **Component Composition** – Building reusable menu components with props
- ✅ **UI Polish** – Adding hover and focus states for a better user experience

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
- ✨ Implemented collapsible nested menu structure using React state
- 🎯 Added responsive menu container styling and hover interaction effects
- 💅 Added icon toggle controls with clean layout polish

---

### **Happy coding without chai ! ☕**
