let sliderImages = document.querySelectorAll(".slide");
let arrowRight = document.querySelector("#arrow-right");
let arrowLeft = document.querySelector("#arrow-left");
let current = 0;

// clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// initializes slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

startSlide();
