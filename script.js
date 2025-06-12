const images = document.querySelectorAll(".image-tile");

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  images.forEach((img, index) => {
    setTimeout(() => {
      img.style.opacity = "0.8";
      img.style.transform = "translateY(0)";
    }, index * 100);
  });
});

images.forEach((img) => {
  // Preload images
  if (img.complete) {
    img.classList.add("loaded");
  } else {
    img.addEventListener("load", () => {
      img.classList.add("loaded");
    });
  }

  img.addEventListener("click", () => {
    const wasExpanded = img.classList.contains("expanded");

    images.forEach((i) => {
      i.classList.remove("expanded");
      i.style.filter = "brightness(0.9)";
    });

    if (!wasExpanded) {
      img.classList.add("expanded");
      img.style.filter = "brightness(1.2)";
    }
  });
});
