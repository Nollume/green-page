export const appendElementsToSections = (
  allSections,
  homeContainer,
  aboutContainer,
  workContainer
) => {
  allSections.forEach((items, i) => {
    items.forEach((section) => {
      if (i === 0) {
        homeContainer.append(section);
      } else if (i === 1) {
        aboutContainer.append(section);
      } else {
        workContainer.append(section);
      }
    });
  });
};

export const setDataSetsToElements = (
  sections,
  initialPage,
  container = false
) => {
  for (const [index, section] of sections.entries()) {
    section.dataset.index = index;
    if (index === 0) {
      if (container) section.dataset.page = "home";

      if (initialPage) {
        section.dataset.active = "active";
      } else section.dataset.active = "deactive";
    } else if (index === 1) {
      if (container) section.dataset.page = "about";
      section.dataset.active = "deactive";
    } else {
      if (container) section.dataset.page = "work";
      section.dataset.active = "deactive";
    }
  }
};

export const findActiveSection = (sections) => {
  return sections.find((section) => section.dataset.active === "active");
};

export const carouselHorizontaly = (event, direction) => {
  const previousSection = event.target.closest(".main-container");
  const previousElChildrens = Array.from(previousSection.children);
  const activePreviousChild = previousElChildrens.find(
    (child) => child.dataset.active === "active"
  );
  activePreviousChild.style.transition = "unset";
  const previousSectionChildIndex = +activePreviousChild.dataset.index;
  let currentChilds = [];
  if (direction === "toRight") {
    if (+previousSection.dataset.index !== 2) {
      currentChilds = Array.from(previousSection.nextElementSibling.children);
    } else {
      currentChilds = Array.from(
        previousSection.parentElement.firstElementChild.children
      );
    }
  } else {
    if (+previousSection.dataset.index !== 0) {
      currentChilds = Array.from(
        previousSection.previousElementSibling.children
      );
    } else {
      currentChilds = Array.from(
        previousSection.parentElement.lastElementChild.children
      );
    }
  }
  const currentActiveChild = currentChilds.find(
    (el) => +el.dataset.index === previousSectionChildIndex
  );
  
    currentActiveChild.dataset.active = "active";
  

  setTimeout(() => {
    previousElChildrens.forEach((child) => (child.dataset.active = "deactive"));
  }, 250);
};
