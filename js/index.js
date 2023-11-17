//A library callled typed.js where you can do the typing effect using its useful functions  "https://github.com/mattboldt/typed.js"

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
//Section where is set my icons to either open the nav menu by clicking on bars or close when clicking on time
//hamburger menu

const navButton = document.querySelector("#nav-btn").addEventListener("click", displayMenu);
const navMenuClose = document.querySelector(".nav-close-btn").addEventListener("click", hideMenu);
const navMenu = document.querySelector(".nav-menu");

const menuIcon = document.querySelector("#nav-btn");
//function to bars button to open nev menu
function displayMenu() {
  if (navMenu.style.display !== "block") {
    navMenu.style.display = "block";
  }
}
//function to times button to close nev menu
function hideMenu() {
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  }
}

//tabs section , where i used the data attributes to get the data in it (target data , color data , and which tab)
//setting the one i want to see to active and removing it from others
//and setting background color of section + spans to same selected color
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
    //setting the tab section color same as desired section color
    const sectionColor = tab.dataset.sectionColor;
    tabSection.style.backgroundColor = sectionColor;
    //setting the tab color same as desired section color
    tab.style.color = sectionColor;
    //setting the span in section color same as desired section color
    tabSpans.forEach((span) => {
      span.style.color = sectionColor;
    });
  });
});
//slide where doing the same as above setting all slides to not active by removing this class then the one chosen according
//to the index will appear , by setting it to active
let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");
slides[0].style.display = "block"; //setting the span in section color same as desired section color
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
//when clicking on a dot an index which is the same index as the image will be sent to display
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    setSlide(index);
  });
});
//A toggle function to display or hide the faq item in FAQS section
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
