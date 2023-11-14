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
   onComplete: function () {
      console.log("complete");
   },
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

let navButton = document.querySelector("#nav-btn").addEventListener("click", displayMenu);
let navMenu = document.querySelector(".nav-menu");
let menuIcon = document.querySelector("#nav-btn");
function displayMenu() {
   if (navMenu.style.display === "block") {
      navMenu.style.display = "none";
      menuIcon.innerHTML = '<i class="fa fa-bars"></i>';
   } else {
      navMenu.style.display = "block";
      menuIcon.innerHTML = '<i class="fa fa-times"></i>';
   }
}
