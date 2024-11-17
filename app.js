const accordionBtn = document.querySelectorAll("#accordionBtn");

accordionBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const accordionBody = document.querySelectorAll(".accordion-body")[index];
    const accordionIcon = document.querySelectorAll(".accordion-icon")[index];

    accordionBody.classList.toggle("open");
    accordionIcon.classList.toggle("open");
  });
});

/////////// CHANGING TAB FEATURES////////////////

const tabTitles = document.querySelectorAll(".tab-title");
const tabContents = document.querySelectorAll(".tab-content");
function changeTab(tab) {
  tabTitles.forEach((title) => {
    title.classList.remove("active");
  });
  event.currentTarget.classList.add("active");

  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  document.getElementById(tab).classList.add("active");
}

/////////////// toggle menu///////////////

const menuBar = document.getElementById("menuBar");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

menuBar.addEventListener("click", () => {
  if (menuBar.getAttribute("src") === "./images/icon-hamburger.svg") {
    nav.classList.add("active");
    menuBar.setAttribute("src", "./images/icon-close.svg");
    overlay.classList.add("active");
    document.body.classList.add("open");
  } else {
    nav.classList.remove("active");
    menuBar.setAttribute("src", "./images/icon-hamburger.svg");
    overlay.classList.remove("active");

    document.body.classList.remove("open");
  }
});
