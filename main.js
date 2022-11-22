import "./assets/css/Restart.scss";
import "./assets/css/style.scss";
import { data } from "./data";

document.querySelector("#app").innerHTML = `
<header>
        <div class="logo">
          <img src="assets/img/logo.svg" alt="logo" />
          <div>
            <p>GREEN</p>
            <p>_PAGE</p>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
          </ul>
        </nav>
        <ul class="social-icons">
          <li>
            <a href="#"><img src="assets/img/facebook.svg" alt="Fb logo" /></a>
          </li>
          <li>
            <a href="#"
              ><img src="assets/img/twitter.svg" alt="Twitter logo"
            /></a>
          </li>
          <li>
            <a href="#"><img src="assets/img/social.svg" alt="logo" /></a>
          </li>
        </ul>
        <div class="contact"><p>Get in touch</p></div>
      </header>
      <main>
        
      </main>

`;

const mainElement = document.querySelector("main");
data.forEach((page) => {
  const section = document.createElement("section");
  section.classList.add("main-section");
  section.innerHTML = `
       <article class="headline">
            <h1>${page.headline}</h1>
            <img src="assets/img/logo.svg" alt="logo" />
          </article>
          <article class="main-content">
            <ul>
              <li>
                <div>
                  ${page.mainContent[0].icon}
                </div>
                <article>
                  <h3>${page.mainContent[0].title}</h3>
                  <p>${page.mainContent[0].description}</p>
                </article>
              </li>
              <li>
                <div>
                  ${page.mainContent[1].icon}
                </div>
                <article>
                 <h3>${page.mainContent[1].title}</h3>
                  <p>${page.mainContent[1].description}</p>
                </article>
              </li>
              <li>
                <div>
                 ${page.mainContent[2].icon}
                </div>
                <article>
                 <h3>${page.mainContent[2].title}</h3>
                  <p>${page.mainContent[2].description}</p>
                </article>
              </li>
              <li>
                <div>
                 ${page.mainContent[3].icon}
                </div>
                <article>
                  <h3>${page.mainContent[3].title}</h3>
                  <p>${page.mainContent[3].description}</p>
                </article>
              </li>
            </ul>
          </article>
          <div class="buttons">
            <button class="toTop">
              <div>
                ${page.arrow}
              </div>
            </button>
            <button class="toBottom">
              <div>
              ${page.arrow}
              </div>
            </button>
          </div>
          <div class="tools">
            <h4 class="page-index">${page.index}</h4>
            <div>
              <p>&copy; 2022</p>
              <p>Professional Memberships</p>
              <p>Professional Achievements</p>
              <p>Publications & Research</p>
            </div>
          </div>
          <aside class="image"></aside>
 `.trim();
  mainElement.append(section);
});

let sections = document.querySelectorAll(".main-section");
sections = Array.from(sections);

for (const [index, section] of sections.entries()) {
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
  sections.find((section) => +section.dataset.index === currentIndex);

const getPreviousPage = (lastIndex) =>
  sections.find((section) => +section.dataset.index === lastIndex);

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
