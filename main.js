import "./assets/css/Restart.scss";
import "./assets/css/style.scss";
import logo from "./src/logo";
import getHeader from "./src/headerContent";
import { allSections } from "./src/mainContent";

document.querySelector("#app").innerHTML = `
 ${getHeader(logo)}
  <main>
    <section class="about"></section>
    <section class="home"></section>
    <section class="work"></section>
  </main>
`;
const aboutContainer = document.querySelector(".about");
const homeContainer = document.querySelector(".home");
const workContainer = document.querySelector(".work");

allSections.forEach((items, i) => {
  items.forEach((section) => {
    if (i === 0) {
      homeContainer.append(section);
    } else if (i === 1) {
      // aboutContainer.append(section);
    } else {
      // workContainer.append(section);
    }
  });
});
const homeSections = allSections[0]

for (const [index, section] of homeSections.entries()) {
  section.dataset.index = index;
  index !== 0
    ? (section.dataset.active = "deactive")
    : (section.dataset.active = "active");
}

let currentIndex = 0;
let transitionTime = 0.25;
let timeoutDuration = transitionTime * 1000;
const buttonToTop = document.querySelectorAll(".toTop");
const buttonToBottom = document.querySelectorAll(".toBottom");
const getNextIndex = (direction) => {
  if (direction === "toBottom") {
    currentIndex === 2 ? (currentIndex = 0) : currentIndex++;
  } else {
    currentIndex === 0 ? (currentIndex = 2) : currentIndex--;
  }
};

const getCurrentPage = () =>
  homeSections.find((section) => +section.dataset.index === currentIndex);

const getPreviousPage = (lastIndex) =>
  homeSections.find((section) => +section.dataset.index === lastIndex);

const setAnimation = (lastIndex, direction) => {
  getPreviousPage(
    lastIndex
  ).style.transition = `all ${transitionTime}s ease-in`;
  if (direction === "toBottom") {
    getPreviousPage(lastIndex).dataset.active = "to-bottom";
    getCurrentPage().dataset.active = "deactive";
  } else {
    getPreviousPage(lastIndex).dataset.active = "deactive";
    getCurrentPage().dataset.active = "to-bottom";
  }
};
const unsetAnimation = (lastIndex, direction) => {
  if (direction === "toBottom") {
    getPreviousPage(lastIndex).dataset.active = "deactive";
    getPreviousPage(lastIndex).style.transition = "unset";
  } else {
    getPreviousPage(lastIndex).dataset.active = "to-bottom";
    getPreviousPage(lastIndex).style.transition = "unset";
  }
};

const carousel = (direction) => {
  const lastIndex = currentIndex;
  getNextIndex(direction);
  setAnimation(lastIndex, direction);

  setTimeout(() => {
    getCurrentPage().style.transition = `all ${transitionTime}s ease-in`;
    getCurrentPage().dataset.active = "active";
  }, 0);
  setTimeout(() => {
    unsetAnimation(lastIndex, direction);
  }, timeoutDuration);
};

buttonToBottom.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    carousel("toBottom");
  });
});
buttonToTop.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    carousel("toTop");
  });
});
