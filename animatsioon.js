const menu = document.querySelector(".menu");
const menuHeight = 150; 


const sections = [
  { el: document.querySelector("#home"), color: "light" },
  { el: document.querySelector("#works"), color: "dark" },
  { el: document.querySelector("#about"), color: "dark" },
  { el: document.querySelector("#contacts"), color: "dark" },
];

function updateMenuOnScroll() {
  const scrollY = window.scrollY || window.pageYOffset;

  for (let i = sections.length - 1; i >= 0; i--) {
    const sec = sections[i];

    
    const rect = sec.el.getBoundingClientRect();
    const offsetTop = rect.top + scrollY; 
    const offsetBottom = offsetTop + rect.height;

    
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
    console.log('section', entries[0]);
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

// Run on load, scroll, resize
window.addEventListener("load", updateMenuOnScroll);
window.addEventListener("scroll", updateMenuOnScroll);
window.addEventListener("resize", updateMenuOnScroll);

