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
  preStringTyped: function (index, self) {
    switch (index) {
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
const tabSection = document.getElementById("tabs-section");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    const tabSpans = target.querySelectorAll(".tab-span");
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.style.color = "var(--black)";
    });

    tab.classList.add("active");
    target.classList.add("active");

    const sectionColor = tab.dataset.sectionColor;
    tabSection.style.backgroundColor = sectionColor;

    tab.style.color = sectionColor;

    tabSpans.forEach((span) => {
      span.style.color = sectionColor;
    });
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(event) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[event].style.display = "block";
  dots[event].classList.add("active");
}
function setSlide(event) {
  currentSlide = event;
  showSlide(currentSlide);
}
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    setSlide(index);
  });
});

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
