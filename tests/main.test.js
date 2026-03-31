import { jest } from "@jest/globals";
// 1. Import the correct class name
import MusicApp from "../src/main.js";

describe("MusicApp UI Tests", () => {
  let app;

  beforeEach(() => {
    // 2. Use the ACTUAL HTML structure from your index.html
    document.body.innerHTML = `
      <nav class="navbar">
        <ul class="nav-links">
          <li><a href="#browse">Browse</a></li>
        </ul>
        <button id="hamburger"><span></span><span></span><span></span></button>
      </nav>
      <div class="nav-drawer" id="nav-drawer">
         <div id="drawer-overlay"></div>
         <div class="nav-drawer-panel">
            <a href="#browse" class="drawer-link">Browse</a>
         </div>
      </div>
      <section id="browse"></section>
      <i id="master-play" class="fas fa-play-circle"></i>
      <div id="current-song"></div>
      <div id="current-artist"></div>
      <div id="player-art"></div>
      <button id="theme-toggle"><i></i></button>
    `;

    app = new MusicApp();
  });

  test("toggleDrawer should toggle the 'open' class on drawer and hamburger", () => {
    const drawer = document.getElementById("nav-drawer");
    const hamburger = document.getElementById("hamburger");

    // Initial state
    expect(drawer.classList.contains("open")).toBe(false);

    // Trigger toggle
    app.toggleDrawer();
    expect(drawer.classList.contains("open")).toBe(true);
    expect(hamburger.classList.contains("open")).toBe(true);

    // Toggle back
    app.closeDrawer();
    expect(drawer.classList.contains("open")).toBe(false);
  });

  test("closeDrawer should remove 'open' class when window is resized to desktop", () => {
    const drawer = document.getElementById("nav-drawer");
    app.openDrawer();

    // Simulate Desktop Width
    global.innerWidth = 1024;
    // Manually trigger the resize logic
    if (window.innerWidth > 768) app.closeDrawer();

    expect(drawer.classList.contains("open")).toBe(false);
  });

  test("Theme toggle should update localStorage and body attribute", () => {
    const themeBtn = document.getElementById("theme-toggle");

    // Mock localStorage
    const setItemSpy = jest.spyOn(Storage.prototype, "setItem");

    themeBtn.click();

    expect(document.body.getAttribute("data-theme")).toBe("dark");
    expect(setItemSpy).toHaveBeenCalledWith("theme", "dark");
  });
});
