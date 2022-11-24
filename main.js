import "./assets/css/Restart.scss";
import "./assets/css/style.scss";
import logo from "./src/logo";
import getHeader from "./src/headerContent";
import { allSections } from "./src/mainContent";
import {
  setDataSetsToElements,
  appendElementsToSections,
  findActiveSection,
  carouselHorizontaly,
} from "./src/general";
import { Carousel } from "./src/carousel";

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

setDataSetsToElements(homeSections, true);
setDataSetsToElements(aboutSections, false);
setDataSetsToElements(workSections, false);

const homePages = new Carousel(homeSections);
const aboutPages = new Carousel(aboutSections);
const workPages = new Carousel(workSections);
const horizontalCarousel = new Carousel(mainContainers);

buttonToBottom.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (
      !homePages.isAnimated &&
      !aboutPages.isAnimated &&
      !workPages.isAnimated
    ) {
      if (findActiveSection(mainContainers).dataset.page === "home") {
        homePages.carousel("toBottom");
      } else if (findActiveSection(mainContainers).dataset.page === "about") {
        aboutPages.carousel("toBottom");
      } else {
        workPages.carousel("toBottom");
      }
    }
  });
});
buttonToTop.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (
      !homePages.isAnimated &&
      !aboutPages.isAnimated &&
      !workPages.isAnimated
    ) {
      if (findActiveSection(mainContainers).dataset.page === "home") {
        homePages.carousel("toTop");
      } else if (findActiveSection(mainContainers).dataset.page === "about") {
        aboutPages.carousel("toTop");
      } else {
        workPages.carousel("toTop");
      }
    }
  });
});
buttonToLeft.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!horizontalCarousel.isAnimated) {
      carouselHorizontaly(e, "toLeft");
    }
    horizontalCarousel.carousel("toLeft");
  });
});
buttonToRight.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!horizontalCarousel.isAnimated) {
      carouselHorizontaly(e, "toRight");
    }
    horizontalCarousel.carousel("toRight");
  });
});
