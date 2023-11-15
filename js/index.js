let colorOverlay = document.querySelector(".hero-left .color-overlay");
let typedInput = document.querySelector(".auto-input");
let heroDesc = document.querySelector(".hero-left-desc");
let typed = new Typed(".auto-input", {
   strings: ["SOFTWARE ENGINEER?", "DATA ENGINEER?", "UI/UX DESIGNER?"],
   typeSpeed: 70,
   backSpeed: 70,
   loop: true,
   loopCount: false,
   cursorChar: "_",
   preStringTyped: function (arrayPos, self) {
      switch (arrayPos) {
         case 0:
            colorOverlay.style.background = "var(--overlay-green)";
            typedInput.style.color = "var(--black)";
            self.cursor.style.color = "var(--black)";
            heroDesc.style.color = "var(--black)";

            break;
         case 1:
            colorOverlay.style.background = "var(--purple-overlay)";
            typedInput.style.color = "var(--white)";
            self.cursor.style.color = "var(--white)";
            heroDesc.style.color = "var(--white)";
            break;
         case 2:
            colorOverlay.style.background = "var(--pink-overlay)";
            break;
      }
   },
});

const navButton = document.querySelector("#nav-btn").addEventListener("click", displayMenu);
const navMenu = document.querySelector(".nav-menu");
const menuIcon = document.querySelector("#nav-btn");
const mainSection = document.querySelector(".main-section");

function displayMenu() {
   if (navMenu.style.display === "block") {
      navMenu.style.display = "none";
      menuIcon.innerHTML = '<i class="fa fa-bars"></i>';
   } else {
      navMenu.style.display = "block";
      menuIcon.innerHTML = '<i class="fa fa-times"></i>';
   }
}

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
   tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach((tabContent) => {
         tabContent.classList.remove("active");
      });
      tabs.forEach((tab) => {
         tab.classList.remove("active");
      });
      tab.classList.add("active");
      target.classList.add("active");
   });
});

let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
   slides.forEach((slide) => {
      slide.style.display = "none";
   });

   dots.forEach((dot) => {
      dot.classList.remove("active");
   });

   slides[index].style.display = "block";
   dots[index].classList.add("active");
}

function nextSlide() {
   currentSlide = (currentSlide + 1) % slides.length;
   showSlide(currentSlide);
}

function prevSlide() {
   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
   showSlide(currentSlide);
}

function setSlide(index) {
   currentSlide = index;
   showSlide(currentSlide);
}

setInterval(nextSlide, 5000);

dots.forEach((dot, index) => {
   dot.addEventListener("click", () => {
      setSlide(index);
   });
});
