# 🛒 Load More Project

Welcome to the **Load More** project! This is a clean, interactive, and responsive web application built to master state management, side effects (API data fetching), asynchronous logic, and dynamic UI transitions in React.

---

# 🌍 Load More App

A modern, responsive React UI utility for fetching and displaying product cards from an API. Built with React and Vite, this app features a paginated load-more workflow, interactive item selection, and responsive grid styling.

> **Master state controls, asynchronous data fetching, responsive layout, and interactive product detail rendering**

---

## 🛠️ Tech Stack
* **Framework:** React.js (Vite Template)
* **Styling:** Custom CSS
* **Language:** JavaScript (ES6+), HTML, CSS

---

## ✨ Features

- 🔄 **Asynchronous Fetching** – Fetches product data from `https://dummyjson.com/products` using async/await and React side effects.
- 📦 **Load More Pagination** – Loads products in batches of 20 and supports progressive page loading.
- 📱 **Fully Responsive** – Responsive product grid with tablet and mobile breakpoints.
- 🎯 **Interactive Product Cards** – Clickable cards show selected product details in a separate panel.
- ⚙️ **Loading & Disable State** – Button updates while loading and disables after reaching the data limit.
- 🧩 **Clean UI Design** – Modern card layout, hover states, and detail panel styling.

---

## 🛠️ Tech Stack & Dependencies

| Technology / Library | Version | Purpose |
|----------------------|---------|---------|
| **React** | ^19.2.7 | UI framework |
| **Vite** | ^8.1.1 | Build tool & dev server |
| **CSS** | native | Custom responsive styles |
| **JavaScript** | ES6+ | Language |

---

## 📂 Project Structure

**Generated:** 7/10/2026, 4:03:36 PM

**Root Path:** `/workspaces/React_Projects`

```

├── 📁 Projects
│   └── 📁 Load_More
│       ├── 📁 public
│       │   ├── 🟢 favicon.svg
│       │   └── 🟢 index.html
│       ├── 📁 src
│       │   ├── 📁 Components
│       │   │   ├── 📄 Index.jsx
│       │   │   └── 🎨 Styles.css
│       │   ├── 🎨 App.css
│       │   ├── 📄 App.jsx
│       │   ├── 🎨 index.css
│       │   └── 📄 main.jsx
│       ├── ⚙️ .gitignore
│       ├── 📝 README.md
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
| **Index.jsx** | Fetches products, tracks current pagination count, and renders the product grid with interactive selection. |
| **Styles.css** | Defines responsive grid layout, card interactions, buttons, and detail panel styling. |

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

Project Name: Load_More 

Package Name: load_more 

Select a framework: React 

Select a variant: JavaScript 

With oxy? No 

Install with npm? Yes 

---

## 💻 How to Run the Project Local Environment 

If you want to pull this project and run it again locally, simply execute these commands:

```bash
# Navigate to the project folder
cd Projects/Load_More

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
cd React_Projects/Projects/Load_More
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

## 🎨 Styling Guide

This project uses responsive CSS grid layout and card-based UI styling. Product cards are layered with hover states, selected card highlighting, and dedicated detail sections for the active item.

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)

---

## 💡 Core Concepts Covered

- ✅ **Asynchronous Effects** – Fetching product data with `useEffect` and `async/await`
- ✅ **Pagination Controls** – Load more logic with button disablement after reaching the API data limit
- ✅ **Interactive UI** – Click-to-select cards that show detail panels
- ✅ **Responsive Layout** – Grid design that adapts across desktop, tablet, and mobile
- ✅ **State & Loading Handling** – Clean loading and error safe state management

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
- ✨ Implemented asynchronous product fetching using fetch
- 🎯 Added progressive load-more pagination
- 💅 Added responsive interactive card layout with detail panels

---

### **Happy coding without chai ! ☕**