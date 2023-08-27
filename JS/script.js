//==========================================
//  Resposive navigation bar
// Access menu and close button
const mobile_nav = document.querySelector(".mobile-navbar-btn");

// Access header
const header = document.querySelector("#header");

mobile_nav.addEventListener("click", () => toggleNavbar());
const toggleNavbar = () => {
  header.classList.toggle("active");
};

const main = document.querySelector("#hero-section");

main.addEventListener("click", () => {
  header.classList.remove("active");
});
//==========================================

//==========================================
//  header shadow

let headerSection = document.querySelector("#header");
// console.log(headerSection);
let body = document.querySelector("body");
body.addEventListener("mouseover", (dets) => {});
//==========================================

//==========================================
//  Smooth scroll

let heroSection = document.querySelector("#hero-section");
let homeSection = document.querySelector("#home");
let homeLeft = document.querySelector("#home .l-h-section");
let homeRight = document.querySelector("#home .r-h-section");
let skillsSection = document.querySelector("#skills");
let projectSection = document.querySelector("#project");
let contactSection = document.querySelector("#contact");
let cards = document.querySelector(".cards");

document.querySelector(".home-link").addEventListener("click", () => {
  homeSection.scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".skill-link").addEventListener("click", () => {
  skillsSection.scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".project-link").addEventListener("click", () => {
  projectSection.scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".contact-link").addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});
//===========================================

// ==========================================
// Cursor

let cursor = document.querySelector("#cursor");

homeLeft.addEventListener("mousemove", (e) => {
  cursor.style.left = (e.x + 50) + "px";
  cursor.style.top = (e.y - 50) + "px";
  cursor.style.scale = "4";
  cursor.style.mixBlendMode = "difference";
});
homeRight.addEventListener("mousemove", (e) => {
  cursor.style.left = e.x + "px";
  cursor.style.top = (e.y - 50) + "px";
  cursor.style.scale = "1";
});

// ==========================================

// ==========================================
// sticky navbar

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    // console.log(ent);
    ent.isIntersecting === false
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    rootMargin: "-100px",
    threshold: 0,
  }
);

observer.observe(homeSection);
// ==========================================
