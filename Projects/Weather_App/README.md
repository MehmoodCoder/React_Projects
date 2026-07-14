# 🧩 Weather App Project

Welcome to the **Weather App** project! This is a clean, interactive, and responsive React application built to display live weather details for cities using OpenWeatherMap API data.

---

# 🌍 Weather App

A modern, responsive React utility for checking weather conditions and essential metrics quickly. Built with React and Vite, this app features live city search, animated hover states, and responsive layout behavior for any screen size.

> **Master data fetching, conditional rendering, responsive layout, and intuitive user interactions**

---

## Link

- 🌐 Weather App: [Weather App Link](https://mh56-weather-app.vercel.app)

---

## 🛠️ Tech Stack
* **Framework:** React.js (Vite Template)
* **Styling:** Custom CSS
* **Language:** JavaScript (ES6+), HTML, CSS

---

## ✨ Features

- ☁️ **Live City Search** – Enter any city name and retrieve weather details instantly
- 🔄 **API Data Fetching** – Uses OpenWeatherMap API to get current weather data
- 📱 **Fully Responsive** – Optimized for desktop, tablet, and mobile screens
- 🎯 **Interactive Hover States** – Buttons and weather cards include hover feedback
- ⚡ **Fast Dev Cycle** – Vite-powered development with HMR
- 🧠 **Clean UI Layout** – Styled weather dashboard with temperature, humidity, and wind info

---

## 🛠️ Tech Stack & Dependencies

| Technology / Library | Version | Purpose |
|----------------------|---------|---------|
| **React** | ^19.2.7 | UI framework |
| **Vite** | ^8.1.1 | Build tool & dev server |
| **CSS** | Custom | Styling and responsive layout |
| **JavaScript** | ES6+ | Language |

---

## 📂 Project Structure

**Generated:** 7/13/2026

**Root Path:** `workspace\React_Projects`

```

├── 📁 Projects
│   └── 📁 Weather_App
│       ├── ⚙️ .gitignore
│       ├── ⚙️ .oxlintrc.json
│       ├── ⚙️ package-lock.json
│       ├── ⚙️ package.json
│       ├── 🌐 index.html
│       ├── 📁 node_modules
│       ├── 📁 public
│       ├── 📁 src
│       │   ├── 🎨 App.css
│       │   ├── 📄 App.jsx
│       │   ├── 📁 Components
│       │   │   ├── 📄 Search.jsx
│       │   │   └── 📄 Weather.jsx
│       │   └── 📄 main.jsx
│       └── 📝 README.md
└── 📝 README.md

```

---

## 🎯 Component Overview

### Core Components

| Component / File | Purpose |
|-----------|---------|
| **App.jsx** | Wraps the weather UI and renders the main weather component. |
| **Weather.jsx** | Fetches weather data, handles loading state, and renders current weather details. |
| **Search.jsx** | Provides the search input and button for user city queries. |
| **App.css** | Responsive styling, hover effects, layout spacing, and visual polish. |

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

This project uses the OpenWeatherMap API to retrieve current weather data for searched cities.

- **API endpoint used:** `https://api.openweathermap.org/data/2.5/weather`
- **Query format:** `?q={CITY_NAME}&appid={API_KEY}`

> Note: The API key is currently embedded in `src/Components/Weather.jsx` for this demo.

---

## 🎨 Styling Guide

This project uses responsive card-style layout with gradient backgrounds, readable typography, and interactive hover states on buttons and weather cards. The design is optimized for both desktop and mobile devices.

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## 💡 Core Concepts Covered

- ✅ **Data Fetching** – Using `fetch()` and React hooks to load API data
- ✅ **Conditional Rendering** – Loading state, error handling, and weather results
- ✅ **Responsive Design** – Mobile-first CSS and layout adjustments
- ✅ **Component Composition** – Separating UI into reusable components

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
