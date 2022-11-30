export class NavigationMove {
  constructor(mainNav) {
    this.mainNav = mainNav;
  }
  getNavChildren() {
    const navChildrens = Array.from(this.mainNav.children);
    return navChildrens.find((child) => {
      return Array.from(child.children).find(
        (children) => children.dataset.isActive === "active"
      );
    });
  }
  getActiveDiv() {
    return Array.from(this.getNavChildren().children).find(
      (child) => child.dataset.isActive === "active"
    );
  }
  getActiveIndex() {
    return +this.getActiveDiv().dataset.index;
  }
  setDatasetToElements(direction) {
    const activeLi = this.getNavChildren();
    const activeDiv = this.getActiveDiv();
    const activeIndex = this.getActiveIndex();

    activeDiv.dataset.isActive = "inactive";
    if (direction === "toBottom") {
      if (activeIndex !== 2) {
        activeDiv.previousElementSibling.dataset.isActive = "active";
      } else {
        activeLi.lastElementChild.dataset.isActive = "active";
      }
    } else {
      if (activeIndex !== 3) {
        activeDiv.nextElementSibling.dataset.isActive = "active";
      } else {
        activeLi.firstElementChild.dataset.isActive = "active";
      }
    }
  }
  handleNavigaion(direction) {
    this.setDatasetToElements(direction);
  }
}
export class NavigationMoveToSides extends NavigationMove {
  constructor(...arg) {
    super(...arg);
  }
  setActiveChild(el, activeDivIndex) {
    Array.from(el.children).find(
      (child) => +child.dataset.index === activeDivIndex
    ).dataset.isActive = "active";
  }
  moveToside(direction) {
    const activeLi = super.getNavChildren();
    const liIndex = +activeLi.dataset.index;
    const activeDiv = super.getActiveDiv(activeLi);
    const activeDivIndex = super.getActiveIndex(activeLi);

    activeDiv.dataset.isActive = "inactive";

    if (direction === "toRight") {
      if (liIndex !== 3) {
        this.setActiveChild(activeLi.nextElementSibling, activeDivIndex);
      } else {
        this.setActiveChild(
          activeLi.parentElement.firstElementChild,
          activeDivIndex
        );
      }
    } else {
      if (liIndex !== 1) {
        this.setActiveChild(activeLi.previousElementSibling, activeDivIndex);
      } else {
        this.setActiveChild(
          activeLi.parentElement.lastElementChild,
          activeDivIndex
        );
      }
    }
  }
}
