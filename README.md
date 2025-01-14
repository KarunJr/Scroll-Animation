# Scroll Animation with Zoom Effect

This project implements a scroll animation effect where the container (representing a post) at the center of the viewport zooms in, similar to the behavior seen in social media feeds.

## Features
- Zoom effect for the centered container while scrolling.
- Smooth animations to enhance user experience.

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Code Explanation](#code-explanation)
    - [HTML Structure](#html-structure)
    - [CSS Styling](#css-styling)
    - [JavaScript Logic](#javascript-logic)


## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/KarunJr/Scroll-Animation.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Scroll-Animation
   ```
3. Open `index.html` in your browser to view the project.

## Usage
Simply scroll through the page, and the container in the center of the viewport will zoom in for a visual emphasis. The animation ensures that only the centered post gets highlighted while others remain in their default state.

## Code Explanation

### HTML Structure
- **Wrapper (`.scroll-wrapper`)**:
  - A scrollable container holding multiple `.container` elements.
  - Each `.container` represents a post.

- **Container (`.container`)**:
  - Contains the main content (`.content_box`) and placeholders for additional content like headings (`.heading`) and status indicators (`.status`).

### CSS Styling
- **Scroll Wrapper**:
  ```css
  .scroll-wrapper {
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      height: 100vh;
      gap: 30px;
  }
  ```
  Ensures vertical scrolling with spaced-out containers.

- **Zoom Animation**:
  ```css
  .container.active {
      transform: scale(1.2); /* Zoom in */
      transition: transform 0.5s ease-in-out; /* Smooth animation */
  }
  ```
  Highlights the centered container by scaling it up.

### JavaScript Logic
1. **Element Selection**:
   ```javascript
   const containers = document.querySelectorAll(".container");
   const scroll = document.querySelector(".scroll-wrapper");
   ```
   Targets all `.container` elements and the scroll wrapper for event handling.

2. **Scroll Event Listener**:
   ```javascript
   scroll.addEventListener("scroll", scrollAnimation);
   ```
   Triggers the `scrollAnimation` function whenever the user scrolls.

3. **Logic for Zoom Effect**:
   ```javascript
   function scrollAnimation() {
       const viewport = window.innerHeight / 2; // Find viewport center

       containers.forEach((container) => {
           const rect = container.getBoundingClientRect();
           const containerCenter = rect.top + rect.height / 2; // Find container center

           if (Math.abs(containerCenter - viewport) < rect.height / 2) {
               container.classList.add("active"); // Zoom in centered container
           } else {
               container.classList.remove("active");
           }
       });
   }
   ```
   - **`window.innerHeight`**: Determines the height of the viewport.
   - **`getBoundingClientRect()`**: Calculates the position of each container relative to the viewport.
   - **Zoom Logic**: Compares the container's center with the viewport center to decide if it should zoom in.


---
Feel free to modify the design and logic to suit your specific project requirements. Happy coding!
