# 🧩 QR Code Project

Welcome to the **QR Code** project! This is a clean, interactive, and responsive React application built to generate and share QR codes easily from text or URLs.

---

# 🌍 QR Code App

A modern, responsive React utility for generating QR codes on-demand. Built with React, Vite, and `react-qr-code`, this app includes keyboard support, copy-to-clipboard, and fully responsive rendering for mobile and desktop.

> **Master controlled inputs, conditional rendering, responsive layout, and accessibility-friendly interactions**

---

## 🛠️ Tech Stack
* **Framework:** React.js (Vite Template)
* **Styling:** Custom CSS
* **Language:** JavaScript (ES6+), HTML, CSS

---

## ✨ Features

- 🔲 **Generate QR Codes** – Create QR codes from URLs or plain text instantly
- ⌨️ **Keyboard Support** – Press Enter to generate without clicking the button
- 📋 **Copy-to-Clipboard** – Copy the generated text/URL quickly
- 📱 **Fully Responsive** – QR box scales for mobile and desktop using CSS clamp and media queries
- 🎨 **Interactive UI** – Focus, hover, and subtle motion for a polished UX
- ⚡ **Fast Dev Cycle** – Vite-powered development with HMR

---

## 🛠️ Tech Stack & Dependencies

| Technology / Library | Version | Purpose |
|----------------------|---------|---------|
| **React** | ^19.2.7 | UI framework |
| **Vite** | ^8.1.1 | Build tool & dev server |
| **react-qr-code** | ^2.x | QR code generator component |
| **CSS** | Custom | Responsive styling |
| **JavaScript** | ES6+ | Language |

---

## 📂 Project Structure

**Generated:** 7/13/2026

**Root Path:** `c:\Users\mehmo\OneDrive\Desktop\MehmoodsCode\React_Projects`

```

├── 📁 Projects
│   └── 📁 QR_Code
│       ├── ⚙️ .gitignore
│       ├── ⚙️ package-lock.json
│       ├── ⚙️ package.json
│       ├── 🌐 index.html
│       ├── 📁 node_modules
│       ├── 📁 public
│       ├── 📁 src
│       │   ├── 📄 App.jsx
│       │   ├── 📁 Components
│       │   │   ├── 📄 QRCode.jsx
│       │   │   └── 🎨 Styles.css
│       │   └── 📄 main.jsx
│       └── 📝 README.md
└── 📝 README.md

```

---

## 🎯 Component Overview

### Core Components

| Component / File | Purpose |
|-----------|---------|
| **App.jsx** | Renders the page and the `QRCodeGen` component. |
| **QRCode.jsx** | Handles input state, generation logic, copy/clear actions, and renders the QR code using `react-qr-code`. |
| **Styles.css** | Responsive card layout, input/button styles, QR box sizing and mobile breakpoints. |

---

## 📦 How to Setup & Build This Project From Scratch

### Step 1: Initialize Vite Project
Run the following command in your terminal:
```bash
npm create vite@latest
```

## During the prompt configuration, fill out the selections exactly like this:

Proceed? y 

Project Name: QR_Code 

Package Name: qr_code 

Select a framework: React 

Select a variant: JavaScript 

With oxy? No 

Install with npm? Yes 

---

## 💻 How to Run the Project Local Environment 

If you want to pull this project and run it again locally, simply execute these commands:

```bash
# Navigate to the project folder
cd Projects/QR_Code

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
cd React_Projects/Projects/QR_Code
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

## 📦 `react-qr-code` Installation & Setup

This project uses the `react-qr-code` library to render QR codes.

### Step 1: Install Package
Run the following command inside your project folder in the terminal:
```bash
npm install react-qr-code
```

### Step 2: Import & Use in File
Import the library at the top of the file and use it inside JSX (already used in `src/Components/QRCode.jsx`):
```jsx
import QRCode from 'react-qr-code'
```

---

## 🎨 Styling Guide

This project uses a centered card layout with a responsive QR box that uses `clamp()` to scale SVG size. Inputs and buttons include focus and hover states for accessibility and a polished feel.

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [react-qr-code GitHub](https://github.com/awesome-react/react-qr-code)

---

## 💡 Core Concepts Covered

- ✅ **Controlled Inputs** – Managing form state with React `useState`
- ✅ **Conditional Rendering** – Showing placeholder or QR code based on state
- ✅ **Responsive UI** – Using modern CSS techniques for mobile-friendly layout
- ✅ **Browser APIs** – Using `navigator.clipboard` for copy-to-clipboard actions

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
- ✨ Implemented responsive QR code generation component
- 🎯 Added copy-to-clipboard and Enter-key generation
- 💅 Improved responsive layout and visual polish

---

### **Happy coding without chai ! ☕**
