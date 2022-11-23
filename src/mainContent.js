import { data } from "../data";
import logo from "./logo";
const createLiElements = (arr) => {
  return arr.map((item) => {
    const items = [
      `<li>
      <div>
        ${item.icon}
      </div>
      <article>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    </li>`,
    ];

    return items;
  });
};
const allSections = data.map((section) => {
  return section.data.map((page) => {
    const sections = document.createElement("section");

    sections.innerHTML = `
            <article class="headline">
              <h1>${page.headline}</h1>
              ${logo}
            </article>
            <article class="main-content">
              <ul>
              ${createLiElements(page.mainContent)
                .join(",")
                .replaceAll(",", "")}                    
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
            <aside class="tools">
              <h4 class="page-index">${page.index}</h4>
              <div>
                <p>&copy; 2022</p>
                <p>Professional Memberships</p>
                <p>Professional Achievements</p>
                <p>Publications & Research</p>
              </div>
            </aside>
            <div class="image"></div>
   `.trim();
    return sections;
  });
});
allSections.map((items, i) => {
  return items.map((section) => {
    if (i === 0) {
      section.classList.add("home-sections");
    } else if (i === 1) {
      section.classList.add("about-sections");
    } else {
      section.classList.add("work-sections");
    }
  });
});

export { allSections };

