// Selecting the class 
const containers = document.querySelectorAll(".container");
const scroll = document.querySelector(".scroll-wrapper");

scroll.addEventListener("scroll", scrollAnimation); //Using scroll EventListener 


// Logic for zooming the container which is center on the viewport
function scrollAnimation() {
  const viewport = window.innerHeight / 2;

  containers.forEach((container) => {
    const rect = container.getBoundingClientRect(); // Give the distance of container in px.Like distance of container from the top .
    const containerCenter = rect.top + rect.height / 2; 
    
    if (Math.abs(containerCenter - viewport) < rect.height / 2) {
      container.classList.add("active");
    } else {
      container.classList.remove("active");
    }
  });
}
