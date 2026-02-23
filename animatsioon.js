const menu = document.querySelector(".menu");
const menuHeight = 385; // height of your fixed header

// Define sections and their desired menu text color
const sections = [
  { el: document.querySelector("#home"), color: "light" },
  { el: document.querySelector(".opingud"), color: "dark" },
  { el: document.querySelector(".#works"), color: "dark" },
  { el: document.querySelector("#about"), color: "dark" },
  { el: document.querySelector("#contacts"), color: "dark" },
];

function updateMenuOnScroll() {
  const scrollY = window.scrollY || window.pageYOffset;

  for (let i = sections.length - 1; i >= 0; i--) {
    const sec = sections[i];

    // Calculate top and bottom using getBoundingClientRect relative to viewport
    const rect = sec.el.getBoundingClientRect();
    const offsetTop = rect.top + scrollY; // element top relative to document
    const offsetBottom = offsetTop + rect.height;

    // Check if the top of the section has reached the menu
    if (scrollY +   menuHeight >= offsetTop) {
      if (sec.color === "dark") {
        menu.classList.add("menu-dark");
      } else {
        menu.classList.remove("menu-dark");
      }
      break;
    }
  }
}

const menuTexts = document.querySelectorAll('.menu-text');

const intersectionObserver = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio <= 0) {
    menuTexts.forEach((text) => {
      text.classList.remove('dark-text');
    })
    return;
  }

  menuTexts.forEach((text) => {
    text.classList.add('dark-text');
  })
})

intersectionObserver.observe(document.querySelector("#about"));
intersectionObserver.observe(document.querySelector(".opingud"))

// Run on load, scroll, resize
window.addEventListener("load", updateMenuOnScroll);
window.addEventListener("scroll", updateMenuOnScroll);
window.addEventListener("resize", updateMenuOnScroll);
