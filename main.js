import "./assets/css/Restart.scss";
import "./assets/css/style.scss";
import { data } from "./data";

const logo = `<div class="logo">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trees" width="44" height="44"
viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8fafc" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none" />
<path d="M16 5l3 3l-2 1l4 4l-3 1l4 4h-9" />
<line x1="15" y1="21" x2="15" y2="18" />
<path d="M8 13l-2 -2" />
<path d="M8 12l2 -2" />
<path d="M8 21v-13" />
<path
  d="M5.824 15.995a3 3 0 0 1 -2.743 -3.69a2.998 2.998 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a2.997 2.997 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4z" />
</svg>
  <div>
    <p>GREEN</p>
    <p>_PAGE</p>
  </div>
</div>`;

document.querySelector("#app").innerHTML = `
<header>
        ${logo}
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
          </ul>
        </nav>
        <ul class="social-icons">
          <li>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="30" height="30"
            viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8fafc" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg></a>
          </li>
          <li>
            <a href="#"
              ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="30" height="30"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8fafc" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg></a>
          </li>
          <li>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-battery-eco" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8fafc" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 9a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-5.5" />
            <path d="M3 16.143c0 -2.84 2.09 -5.143 4.667 -5.143h2.333v.857c0 2.84 -2.09 5.143 -4.667 5.143h-2.333v-.857z" />
            <path d="M3 20v-3" />
          </svg></a>
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
            ${logo}
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
