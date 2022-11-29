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

