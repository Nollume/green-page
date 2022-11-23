import "./assets/css/Restart.scss";
import "./assets/css/style.scss";
import logo from "./src/logo";
import getHeader from "./src/headerContent";
import { allSections } from "./src/mainContent";
import { setDataSetsToElements, appendElementsToSections } from "./src/general";
import { Carousel } from "./src/carousel";

document.querySelector("#app").innerHTML = `
 ${getHeader(logo)}
  <main>
    <section class="home"></section>
    <section class="about"></section>
    <section class="work"></section>
  </main>
`;
const homeContainer = document.querySelector(".home");
const aboutContainer = document.querySelector(".about");
const workContainer = document.querySelector(".work");

appendElementsToSections(
  allSections,
  homeContainer,
  aboutContainer,
  workContainer
);

const homeSections = allSections[0];
const aboutSections = allSections[1];
const workSections = allSections[2];
const buttonToTop = document.querySelectorAll(".toTop");
const buttonToBottom = document.querySelectorAll(".toBottom");

setDataSetsToElements(homeSections, "home");
setDataSetsToElements(aboutSections, "about");
setDataSetsToElements(workSections, "work");

const carousel = new Carousel(homeSections);

buttonToBottom.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    carousel.carousel("toBottom");
  });
});
buttonToTop.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    carousel.carousel("toTop");
  });
});


