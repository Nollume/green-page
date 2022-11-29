import "./assets/css/Restart.scss";
import "./assets/css/style.scss";
import logo from "./src/logo";
import getHeader from "./src/headerContent";
import { allSections } from "./src/mainContent";
import {
  setDataSetsToElements,
  appendElementsToSections,
  findActiveSection,
} from "./src/general";
import { Carousel, HorizontalCarousel } from "./src/carousel";
import { handleNavigaion, moveToside } from "./src/navigation";

document.querySelector("#app").innerHTML = `
 ${getHeader(logo)}
  <main>
    <section class="home main-container"></section>
    <section class="about main-container"></section>
    <section class="work main-container"></section>
  </main>
`;
let mainContainers = document.querySelectorAll(".main-container");
mainContainers = Array.from(mainContainers);

setDataSetsToElements(mainContainers, true, true);

appendElementsToSections(
  allSections,
  mainContainers[0],
  mainContainers[1],
  mainContainers[2]
);

const homeSections = allSections[0];
const aboutSections = allSections[1];
const workSections = allSections[2];
const buttonToTop = document.querySelectorAll(".toTop");
const buttonToBottom = document.querySelectorAll(".toBottom");
const buttonToLeft = document.querySelectorAll(".toLeft");
const buttonToRight = document.querySelectorAll(".toRight");
let mainNav = document.querySelector(".main-nav");

setDataSetsToElements(homeSections, true);
setDataSetsToElements(aboutSections, false);
setDataSetsToElements(workSections, false);

const homePages = new Carousel(homeSections);
const aboutPages = new Carousel(aboutSections);
const workPages = new Carousel(workSections);
const animatedHorizontalCarousel = new Carousel(mainContainers);
const handleHorizontalCarousel = new HorizontalCarousel();

buttonToBottom.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (findActiveSection(mainContainers).dataset.page === "home") {
      homePages.carousel("toBottom");
    } else if (findActiveSection(mainContainers).dataset.page === "about") {
      aboutPages.carousel("toBottom");
    } else {
      workPages.carousel("toBottom");
    }

    handleNavigaion(mainNav, "toBottom");
  });
});
buttonToTop.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (findActiveSection(mainContainers).dataset.page === "home") {
      homePages.carousel("toTop");
    } else if (findActiveSection(mainContainers).dataset.page === "about") {
      aboutPages.carousel("toTop");
    } else {
      workPages.carousel("toTop");
    }

    handleNavigaion(mainNav, "toTop");
  });
});
buttonToLeft.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleHorizontalCarousel.carouselHorizontal(e, "toLeft");
    animatedHorizontalCarousel.carousel("toLeft");
    moveToside(mainNav, "toLeft");
  });
});
buttonToRight.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleHorizontalCarousel.carouselHorizontal(e, "toRight");
    animatedHorizontalCarousel.carousel("toRight");
    moveToside(mainNav, "toRight");
  });
});

const contactBtn = document.querySelector(".contact");
const aside = contactBtn.querySelector("aside");
const closeBtn = document.querySelector(".close");

contactBtn.onclick = () => {
  aside.style.transform = "translateX(0)";
};

closeBtn.onclick = (e) => {
  e.stopPropagation();
  aside.style.transform = "translateX(100%)";
};

document.addEventListener("click", (e) => {
  if (e.target === contactBtn || e.target.closest(".contact")) {
    return;
  } else aside.style.transform = "translateX(100%)";
});
