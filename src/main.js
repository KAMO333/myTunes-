class NavigationController {
  constructor() {
    this.menu = document.querySelector("nav ul");
    this.toggleButton = document.getElementById("openup");
    this.navLinks = document.querySelectorAll("nav li");
    this.scrollLinks = document.querySelectorAll(".cf a");
    this.openMenuContainer = document.querySelector(".open-menu");
    this.mobileBreakpoint = 580; // Updated to match your CSS media query

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.handleResize();
    this.setMenuHeight();
  }

  setupEventListeners() {
    this.toggleButton?.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggleMenu();
    });

    window.addEventListener("resize", () => this.handleResize());

    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < this.mobileBreakpoint) {
          this.toggleMenu();
        }
      });
    });

    this.scrollLinks.forEach((link) => {
      link.addEventListener("click", (e) => this.handleSmoothScroll(e));
    });
  }

  toggleMenu() {
    // Instead of style.display, we use a CSS class for better performance
    this.menu.classList.toggle("show");
  }

  handleResize() {
    if (window.innerWidth > this.mobileBreakpoint) {
      this.menu.classList.remove("show");
      this.menu.style.display = "";
    }
    this.setMenuHeight();
  }

  setMenuHeight() {
    if (this.openMenuContainer) {
      this.openMenuContainer.style.height = `${window.innerHeight}px`;
    }
  }

  handleSmoothScroll(event) {
    const hash = event.currentTarget.hash;
    if (hash && hash !== "") {
      event.preventDefault();
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 40,
          behavior: "smooth",
        });
        history.pushState(null, null, hash);
      }
    }
  }
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      () => new NavigationController(),
    );
  } else {
    // This prevents double-init if the script is loaded after DOM is ready
    // But for Jest, we want to make sure we aren't auto-running if there's no nav
    if (document.querySelector("nav ul")) {
      new NavigationController();
    }
  }
}

export default NavigationController;
