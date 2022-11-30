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
import { NavigationMoveToSides, NavigationMove } from "./src/navigation";
import { ContactClass } from "./src/contact";

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
const handleHorizontalCarousel = new HorizontalCarousel(mainContainers);
const moveNav = new NavigationMove(mainNav);
const moveNavToSides = new NavigationMoveToSides(mainNav);
let timer = false;
buttonToBottom.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (timer === false) {
      timer = true;
      if (findActiveSection(mainContainers).dataset.page === "home") {
        homePages.carousel("toBottom");
      } else if (findActiveSection(mainContainers).dataset.page === "about") {
        aboutPages.carousel("toBottom");
      } else {
        workPages.carousel("toBottom");
      }
      moveNav.handleNavigaion("toBottom");
      setTimeout(() => {
        timer = false;
      }, 250);
    }
  });
});
buttonToTop.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (timer === false) {
      timer = true;
      if (findActiveSection(mainContainers).dataset.page === "home") {
        homePages.carousel("toTop");
      } else if (findActiveSection(mainContainers).dataset.page === "about") {
        aboutPages.carousel("toTop");
      } else {
        workPages.carousel("toTop");
      }
      moveNav.handleNavigaion("toTop");
      setTimeout(() => {
        timer = false;
      }, 250);
    }
  });
});
buttonToLeft.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (timer === false) {
      timer = true;
      handleHorizontalCarousel.carouselHorizontal("toLeft");

      animatedHorizontalCarousel.carousel("toLeft");
      moveNavToSides.moveToside("toLeft");
      setTimeout(() => {
        timer = false;
      }, 250);
    }
  });
});
buttonToRight.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (timer === false) {
      timer = true;
      handleHorizontalCarousel.carouselHorizontal("toRight");

      animatedHorizontalCarousel.carousel("toRight");
      moveNavToSides.moveToside("toRight");
      setTimeout(() => {
        timer = false;
      }, 250);
    }
  });
});

const contact = new ContactClass();
contact.showContactForm();
contact.closeContactForm();
contact.closeIfClickOnDocument();
