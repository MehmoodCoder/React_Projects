# 🍳 Food Recipe App Project

Welcome to the **Food Recipe App**! A clean, interactive, and fully responsive React application built to search, explore, and save your favorite dishes using live recipe API data.

---

# ⚛️ Food_Recipe_App

🚀 **React Hooks Mastery Pack** — A modern, responsive React utility for checking recipes and ingredients. Built with React, React Router v7, and styled using Tailwind CSS v4. This app features real-time search, dynamic filtering, routing transitions, and a clean favorites system.

> **Master data fetching, Context API state management, React Router v7, and Tailwind CSS v4 utility layouts**

---

## 🔗 Live

- 🌐 **Food Recipe App (Live):** [https://mh56-food-recipe-app.vercel.app](https://mh56-food-recipe-app.vercel.app)

---

## ✨ Features

- 🔍 **Real-Time Recipe Search** – Enter any recipe or ingredient name to instantly fetch matching dishes from the live API.
- 💾 **Persistent Favorites System** – Bookmark your favorite recipes seamlessly; your choices are saved automatically using local storage.
- 📱 **Fully Responsive Layout** – Styled with Tailwind CSS v4, providing an optimized experience across mobile, tablet, and desktop screens.
- ⚡ **Dynamic Detail Views** – Deep dive into any dish to view publisher details, clear ingredient lists, and dynamic bookmark toggling.
- 🎯 **Smooth Navigation & Routing** – Fast client-side transitions powered by React Router v7 with active link highlights.
- 🔄 **Global State Management** – Powered by React Context API to ensure clean search state, loading screens, and favorites sync across all pages.

---

## 🛠️ Tech Stack
* **Framework:** React.js (Vite Template)
* **Styling:** Tailwind, CSS
* **Language:** JavaScript (ES6+), HTML, CSS

---

## 🎯 Component & Page Overview

### Core Components & Context

| Component / File | Purpose |
|------------------|---------|
| **NavBar.jsx** | Header component with a search input, active route highlights, and dynamic saved-item counters. |
| **RecipeItems.jsx** | Clean, hover-effect responsive recipe card displaying the publisher, title, and detailed redirection CTA. |
| **Index.jsx (Context)** | Central state provider managing fetching statuses, favorite state lists, and input bindings. |

### Route Pages

- **Home** – Main landing page combining hero sections, real-time recipe cards, and search feedback.
- **Favorite** – Dedicated dashboard showcasing user-saved items from persistent state storage.
- **Details** – Specific recipe item details showing publisher credits, full ingredient lists, and dynamic bookmark toggling.

---

## 🛠️ Tech Stack & Dependencies

| Technology / Library | Version | Purpose |
|----------------------|---------|---------|
| **React** | `^19.2.7` | Core UI library |
| **React DOM** | `^19.2.7` | Browser DOM rendering engine |
| **React Router DOM** | `^7.18.1` | Decoupled client-side route bindings |
| **Tailwind CSS** | `^4.3.x` | Utility-first responsive component structures |
| **@tailwindcss/vite**| `^4.3.x` | Tailwind v4 compilation plugin |
| **Vite** | `^8.1.4` | Superfast HMR development server |

---

## 📂 Project Structure

**Generated:** 7/14/2026, 9:55:00 PM
**Root Path:** `workspace\React_Projects`

```text
├── 📁 Projects
│   └── 📁 Food_Recipe_App
│       ├── 📁 public
│       │   ├── 🖼️ favicon.svg
│       │   └── 🖼️ icons.svg
│       ├── 📁 src
│       │   ├── 📁 Components
│       │   │   ├── 📄 NavBar.jsx
│       │   │   └── 📄 RecipeItems.jsx
│       │   ├── 📁 Context
│       │   │   └── 📄 Index.jsx
│       │   ├── 📁 Pages
│       │   │   ├── 📄 Details.jsx
│       │   │   ├── 📄 Favorite.jsx
│       │   │   └── 📄 Home.jsx
│       │   ├── 🎨 App.css
│       │   ├── 📄 App.jsx
│       │   ├── 🎨 index.css
│       │   ├── 📄 main.jsx
│       │   └── 📄 reportWebVitals.js
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

## 📦 How to Setup & Build This Project From Scratch

### Step 1: Initialize Vite Project
Run the following command in your terminal:
```bash
npm create vite@latest
```

## During the prompt configuration, fill out the selections exactly like this:

Proceed? y 

Project Name: Weather_App 

Package Name: weather_app 

Select a framework: React 

Select a variant: JavaScript 

With oxy? No 

Install with npm? Yes 

---

## 💻 How to Run the Project Local Environment 

If you want to pull this project and run it again locally, simply execute these commands:

```bash
# Navigate to the project folder
cd Projects/Weather_App

# Install dependencies and start the dev server
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
cd React_Projects/Projects/Weather_App
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

### Installing Tailwind CSS v4 (Vite)

```bash
npm install tailwindcss @tailwindcss/vite
```

Add plugin to `vite.config.js`:
```js
import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [tailwindcss()],
}
```

Add to `index.css`:
```css
@import "tailwindcss";
```

### Setting Up React Router v7 (via `create-react-router`)

Installed using the official React Router CLI as per [reactrouter.com](https://reactrouter.com):

```bash
npx create-react-router@latest
cd my-project
npm run dev
```

Or add to an existing Vite project:

```bash
npm install react-router-dom
```

---

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Connect your GitHub repository
5. Connect the exact project folder containing `package.json` to avoid nested directory issues
6. Vercel automatically detects Vite settings
7. Toggle the "Build Command" and write `npm run build` manually to override it
8. Click "Deploy"

---

## 🌐 API Link

This project consumes the public **Forkify API** to process fast query matches and recipe details.

- **API Base Endpoint:** `https://forkify-api.herokuapp.com/api/v2/recipes`
- **Dynamic Search Query:** `?search={RECIPE_OR_INGREDIENT}`
- **Specific Details Query:** `/recipe-item/{ID}`

> **Note:** Make sure to append your custom query to the base endpoint when performing searches, or use the dynamic parameters setup to fetch the ingredients list directly.

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## 🚀 Core Concepts Covered

- **JSX & Functional Components:** Building modular, reusable, and responsive UI components.
- **State Management (Context API):** Handling global states, loading phases, favorites mapping, and input queries.
- **Side Effects (`useEffect`):** Fetching dynamic recipe search lists and detailed ingredient datasets asynchronously.
- **Client-Side Routing (React Router v7):** Responsive navbar rendering, page switching, and dynamic param-based routing.
- **Utility-First Styling (Tailwind CSS v4):** Modern utility-based UI alignment, custom inputs, active NavLink styles, and mobile scaling.

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
- ✨ Added responsive weather search UI
- 🎯 Integrated OpenWeatherMap API data fetching
- 💅 Added hover effects and clean styling

---

### **Happy coding without chai ! ☕**

