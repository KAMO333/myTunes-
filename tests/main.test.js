import { jest } from "@jest/globals";
// 1. IMPORT the class (Critical for ESM)
import NavigationController from "../src/main.js";

describe("NavigationController UI Tests", () => {
  let controller;

  beforeEach(() => {
    // Mock the HTML structure required by the class
    document.body.innerHTML = `
      <nav>
        <ul>
          <li><a href="#music">Music</a></li>
        </ul>
        <a href="#" id="openup">Toggle</a>
      </nav>
      <div id="music"></div>
    `;

    // 2. Initialize the imported class
    controller = new NavigationController();
  });

  test("toggleMenu should toggle the 'show' class on the menu", () => {
    const menu = document.querySelector("nav ul");

    // Initial state
    expect(menu.classList.contains("show")).toBe(false);

    // Trigger toggle
    controller.toggleMenu();
    expect(menu.classList.contains("show")).toBe(true);

    // Toggle back
    controller.toggleMenu();
    expect(menu.classList.contains("show")).toBe(false);
  });

  test("handleResize should remove 'show' class when window is desktop size", () => {
    const menu = document.querySelector("nav ul");
    menu.classList.add("show");

    // 3. Simulate Desktop Width and trigger resize
    global.innerWidth = 1024;
    controller.handleResize();

    expect(menu.classList.contains("show")).toBe(false);
  });

  test("handleSmoothScroll should call window.scrollTo", () => {
    // Mock window.scrollTo since JSDOM doesn't implement smooth scrolling
    window.scrollTo = jest.fn();

    const event = {
      preventDefault: jest.fn(),
      currentTarget: { hash: "#music" },
    };

    controller.handleSmoothScroll(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(window.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({ behavior: "smooth" }),
    );
  });
});
