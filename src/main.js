import { musicData } from "./musicData.js";

class MusicApp {
  constructor() {
    this.navLinks = document.querySelectorAll(".nav-links a");
    this.themeToggle = document.getElementById("theme-toggle");
    this.hamburger = document.getElementById("hamburger");
    this.navDrawer = document.getElementById("nav-drawer");
    this.drawerOverlay = document.getElementById("drawer-overlay");
    this.drawerLinks = document.querySelectorAll(".drawer-link");
    this.init();
  }

  init() {
    this.renderMusic();
    this.setupEventListeners();
    this.loadTheme();
    this.playRandomTrack();
  }

  displayTrack(track) {
    const masterPlay = document.getElementById("master-play");
    document.getElementById("current-song").innerText = track.title;
    document.getElementById("current-artist").innerText = track.artist;
    document.getElementById("player-art").style.backgroundImage =
      `url(${track.img})`;
  }

  playRandomTrack() {
    if (musicData.length > 0) {
      const randomIndex = Math.floor(Math.random() * musicData.length);
      const randomTrack = musicData[randomIndex];
      this.displayTrack(randomTrack);
    }
  }

  renderMusic() {
    const browseGrid = document.querySelector("#browse .media-grid");
    const radioGrid = document.querySelector("#radio .media-grid");
    const songList = document.querySelector("#songs .song-list");

    musicData.forEach((track) => {
      const cardHtml = `
        <div class="album-card" data-title="${track.title}" data-artist="${track.artist}" data-img="${track.img}">
          <div class="art-wrapper">
            <img src="${track.img}" alt="${track.title}" loading="lazy">
          </div>
          <span class="card-title">${track.title}</span>
          <span class="card-artist">${track.artist}</span>
        </div>
      `;

      if (track.section === "browse" && browseGrid)
        browseGrid.innerHTML += cardHtml;
      if (track.section === "radio" && radioGrid)
        radioGrid.innerHTML += cardHtml;

      if (songList && track.section !== "radio") {
        songList.innerHTML += `
          <div class="song-item" data-title="${track.title}" data-artist="${track.artist}" data-img="${track.img}">
            <img src="${track.img}" alt="${track.title}" loading="lazy">
            <div class="song-info">
              <b>${track.title}</b>
              <small>${track.artist}</small>
            </div>
            <span class="song-duration">${track.duration}</span>
          </div>
        `;
      }
    });
  }

  setupEventListeners() {
    const masterPlay = document.getElementById("master-play");

    // Play / Pause
    masterPlay.addEventListener("click", () => {
      if (masterPlay.classList.contains("fa-play-circle")) {
        masterPlay.classList.replace("fa-play-circle", "fa-pause-circle");
      } else {
        masterPlay.classList.replace("fa-pause-circle", "fa-play-circle");
      }
    });

    // Theme Toggle
    this.themeToggle.addEventListener("click", () => {
      const isDark = document.body.hasAttribute("data-theme");
      if (isDark) {
        document.body.removeAttribute("data-theme");
        this.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem("theme", "light");
      } else {
        document.body.setAttribute("data-theme", "dark");
        this.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem("theme", "dark");
      }
    });

    // Hamburger + Drawer
    this.hamburger.addEventListener("click", () => this.toggleDrawer());
    this.drawerOverlay.addEventListener("click", () => this.closeDrawer());
    this.drawerLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.closeDrawer();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          setTimeout(() => {
            window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
          }, 200);
        }
      });
    });

    // Select track
    document.addEventListener("click", (e) => {
      const el = e.target.closest("[data-title]");
      if (el) {
        this.displayTrack(el.dataset);
        const masterPlay = document.getElementById("master-play");
        masterPlay.classList.replace("fa-play-circle", "fa-pause-circle");
      }
    });

    // Smooth Scroll (desktop nav)
    this.navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
        }
      });
    });

    // Close drawer on resize to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) this.closeDrawer();
    });
  }

  toggleDrawer() {
    const isOpen = this.navDrawer.classList.contains("open");
    if (isOpen) {
      this.closeDrawer();
    } else {
      this.openDrawer();
    }
  }

  openDrawer() {
    this.navDrawer.classList.add("open");
    this.hamburger.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  closeDrawer() {
    this.navDrawer.classList.remove("open");
    this.hamburger.classList.remove("open");
    document.body.style.overflow = "";
  }

  loadTheme() {
    if (localStorage.getItem("theme") === "dark") {
      document.body.setAttribute("data-theme", "dark");
      this.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }
}

if (typeof process === "undefined" || process.env.NODE_ENV !== "test") {
  new MusicApp();
}

export default MusicApp;
