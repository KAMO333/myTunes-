# 🎵 myTunes — Dynamic House Music Experience

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

---

## 📖 Project Overview

**myTunes** has been transformed from a static landing page into a sophisticated, **Data-Driven Single Page Application (SPA)**. Inspired by the premium aesthetics of Apple Music and the content-first approach of Bandcamp, this platform showcases a curated collection of global House Music legends.

The project features a sleek, glassmorphic UI, a persistent "Floating Island" media player, and a fully responsive architecture optimized for both desktop and mobile "Listen Now" experiences.

---

## 🚀 Key Features & Architectural Upgrades

- **💎 Premium "Neo-iTunes" UI**
  Featuring a glassmorphic navbar with a custom cherry-inspired logo, high-contrast typography using the native Apple system font stack, and a fixed, functional player bar.

- **🌑 Advanced Theme Engine**
  Integrated Dark/Light mode with persistence using `localStorage` and smooth CSS variable transitions.

- **📊 Dynamic Data Rendering**
  Gone are the hardcoded HTML blocks. The entire music library is rendered dynamically from a centralized `musicData.js` module, allowing for instant scalability.

- **📱 Mobile-First Design**
  Includes a custom-built hamburger menu and an animated side drawer for seamless navigation on smaller screens.

- **🎶 Interactive Media Player**
  A custom-designed footer that tracks the current state, updates track metadata (artist, title, artwork) instantly upon selection, and features a functional play/pause toggle.

---

## 📂 Project Structure

```text
myTunes/
├── src/
│   ├── index.html      # Main Entry Point (SPA Shell)
│   ├── main.js         # MusicApp Engine (ES6 Modules)
│   ├── musicData.js    # Centralized Track & Artist Data
│   └── style.css       # Premium Glassmorphic Styling
├── tests/
│   └── main.test.js    # Jest/JSDOM UI Logic Tests
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

#### 1️⃣ Clone and Navigate

```bash
git clone https://github.com/KAMO333/myTunes-.git
cd myTunes-
```

#### 2️⃣ Install Development Dependencies

```bash
npm install
```

#### 3️⃣ Launch the App

Because the project uses ES6 Modules, it must be run via a local server. If using VS Code, right-click `index.html` and select "Open with Live Server".

---

## 🧪 Testing Suite

Validated with Jest and JSDOM to ensure the navigation logic and rendering engine remain stable.

```bash
npm test
```

---

## 💻 Tech Stack & Principles

| Category    | Technology                              |
| ----------- | --------------------------------------- |
| Frontend    | HTML5, CSS3 (Variables & Grid), JS ES6+ |
| Pattern     | Singleton / Object-Oriented (OOP)       |
| Design      | Glassmorphism, Apple System UI          |
| Performance | Dynamic DOM Injection, Lazy Loading     |

---

## 👨🏾‍💻 Author

**Kamogelo Mmopane** — Full Stack Developer · Johannesburg 🇿🇦

- GitHub: [KAMO333](https://github.com/KAMO333)
- LinkedIn: [Kamogelo Mmopane](https://www.linkedin.com/in/kamogelommopane/)

---

## ⭐ Support

If you find this project useful for learning SPA architecture or CSS glassmorphism:

- ⭐ Star the repository
- 🍴 Fork it to build your own music app
- 🧠 Feel free to contribute to the UI/UX enhancements

---

## 📄 License

This project is licensed under the MIT License.
