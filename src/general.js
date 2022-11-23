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

export const setDataSetsToElements = (sections, page) => {
  for (const [index, section] of sections.entries()) {
    section.dataset.index = index;
    if (page === "home") {
      section.dataset.page = "home";
      index !== 0
        ? (section.dataset.active = "deactive")
        : (section.dataset.active = "active");
    } else if (page === "about") {
      section.dataset.page = "about";
      section.dataset.index = index + 3;
      section.dataset.active = "deactive";
    } else {
      section.dataset.page = "work";
      section.dataset.index = index + 6;
      section.dataset.active = "deactive";
    }
  }
};
