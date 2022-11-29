const getNavChildren = (mainNav) => {
  const navChildrens = Array.from(mainNav.children);
  const activeLi = navChildrens.find((child) => {
    return Array.from(child.children).find((children) => {
      return children.dataset.isActive === "active";
    });
  });
  return activeLi;
};
const getActiveDiv = (activeLi) => {
  return Array.from(activeLi.children).find((child) => {
    return child.dataset.isActive === "active";
  });
};
const getActiveIndex = (activeLi) => {
  const activeDiv = getActiveDiv(activeLi);
  return activeDiv.dataset.index;
};

export const handleNavigaion = (mainNav, direction) => {
  const activeLi = getNavChildren(mainNav);
  const activeDiv = getActiveDiv(activeLi);
  const activeIndex = getActiveIndex(activeLi);

  activeDiv.dataset.isActive = "inactive";

  if (direction === "toBottom") {
    if (+activeIndex !== 2) {
      activeDiv.previousElementSibling.dataset.isActive = "active";
    } else {
      activeLi.lastElementChild.dataset.isActive = "active";
    }
  } else {
    if (+activeIndex !== 3) {
      activeDiv.nextElementSibling.dataset.isActive = "active";
    } else {
      activeLi.firstElementChild.dataset.isActive = "active";
    }
  }
};
const setActiveChild = (el, activeDivIndex) => {
  Array.from(el.children).find(
    (child) => +child.dataset.index === activeDivIndex
  ).dataset.isActive = "active";
};

export const moveToside = (mainNav, direction) => {
  const activeLi = getNavChildren(mainNav);
  const liIndex = +activeLi.dataset.index;
  const activeDiv = getActiveDiv(activeLi);
  const activeDivIndex = +getActiveIndex(activeLi);

  activeDiv.dataset.isActive = "inactive";

  if (direction === "toRight") {
    if (liIndex !== 3) {
      setActiveChild(activeLi.nextElementSibling, activeDivIndex);
    } else {
      setActiveChild(activeLi.parentElement.firstElementChild, activeDivIndex);
    }
  } else {
    if (liIndex !== 1) {
      setActiveChild(activeLi.previousElementSibling, activeDivIndex);
    } else {
      setActiveChild(activeLi.parentElement.lastElementChild, activeDivIndex);
    }
  }
};
