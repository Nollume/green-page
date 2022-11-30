export class Carousel {
  static sectionsCurrentIndex = 0;
  static sectionsLastIndex = null;
  static isAnimated = false;

  constructor(sections) {
    this.sections = sections;
    this.containerCurrentIndex = 0;
    this.containerLastIndex = null;
    this.transitionTime = 0.25;
    this.timeOutDuration = this.transitionTime * 1000;
  }

  getNextIndex(direction) {
    if (direction === "toBottom") {
      Carousel.sectionsCurrentIndex === 2
        ? (Carousel.sectionsCurrentIndex = 0)
        : Carousel.sectionsCurrentIndex++;
    } else if (direction === "toTop") {
      Carousel.sectionsCurrentIndex === 0
        ? (Carousel.sectionsCurrentIndex = 2)
        : Carousel.sectionsCurrentIndex--;
    } else if (direction === "toRight") {
      this.containerCurrentIndex === 2
        ? (this.containerCurrentIndex = 0)
        : this.containerCurrentIndex++;
    } else {
      this.containerCurrentIndex === 0
        ? (this.containerCurrentIndex = 2)
        : this.containerCurrentIndex--;
    }
  }

  getCurrentPage(direction) {
    if (direction === "toTop" || direction === "toBottom") {
      return this.sections.find(
        (section) => +section.dataset.index === Carousel.sectionsCurrentIndex
      );
    } else {
      return this.sections.find(
        (section) => +section.dataset.index === this.containerCurrentIndex
      );
    }
  }

  getPreviousPage(direction) {
    if (direction === "toTop" || direction === "toBottom") {
      return this.sections.find(
        (section) => +section.dataset.index === this.sectionsLastIndex
      );
    } else {
      return this.sections.find(
        (section) => +section.dataset.index === this.containerLastIndex
      );
    }
  }
  getPreviousIndex(direction) {
    if (direction === "toTop" || direction === "toBottom") {
      this.sectionsLastIndex = Carousel.sectionsCurrentIndex;
    } else {
      this.containerLastIndex = this.containerCurrentIndex;
    }
  }

  setAnimation(direction) {
    this.getPreviousPage(
      direction
    ).style.transition = `all ${this.transitionTime}s ease-in`;
    if (direction === "toBottom" || direction === "toRight") {
      this.getPreviousPage(direction).dataset.active = "oposite-side-deactive";
      this.getCurrentPage(direction).dataset.active = "deactive";
    } else if (direction === "toTop" || direction === "toLeft") {
      this.getPreviousPage(direction).dataset.active = "deactive";
      this.getCurrentPage(direction).dataset.active = "oposite-side-deactive";
    }
  }
  unsetAnimation(direction) {
    this.getPreviousPage(direction).style.transition = "unset";

    if (direction === "toBottom" || direction === "toRight") {
      this.getPreviousPage(direction).dataset.active = "deactive";
    } else if (direction === "toTop" || direction === "toLeft") {
      this.getPreviousPage(direction).dataset.active = "oposite-side-deactive";
    }
  }

  carousel(direction) {
    if (Carousel.isAnimated === false) {
      Carousel.isAnimated = true;
      this.getPreviousIndex(direction);

      this.getNextIndex(direction);
      this.setAnimation(direction);
      setTimeout(() => {
        this.getCurrentPage(
          direction
        ).style.transition = `all ${this.transitionTime}s ease-in`;
        this.getCurrentPage(direction).dataset.active = "active";
      }, 0);

      setTimeout(() => {
        this.unsetAnimation(direction);
        Carousel.isAnimated = false;
      }, this.timeOutDuration);
    }
  }
}

export class HorizontalCarousel {
  constructor(mainContainers) {
    this.mainContainers = mainContainers;
    this.isAnimated = false;
    this.activeChild;
  }
  getPreviousSection() {
    return this.mainContainers.find(
      (section) => section.dataset.active === "active"
    );
  }
  getPreviousElChildrens() {
    return Array.from(this.getPreviousSection().children);
  }
  getActivePreviousChild() {
    return this.getPreviousElChildrens().find(
      (child) => child.dataset.active === "active"
    );
  }
  setActiveChild(el, activeDivIndex) {
    Array.from(el.children).find(
      (child) => child.dataset.index === activeDivIndex
    ).dataset.active = "active";
  }

  setDirection(direction) {
    this.activeChild = this.getPreviousElChildrens().find(
      (child) => child.dataset.active === "active"
    );
    const index = this.activeChild.dataset.index;

    if (direction === "toLeft") {
      if (+this.getPreviousSection().dataset.index !== 0) {
        this.setActiveChild(
          this.activeChild.parentElement.previousElementSibling,
          index
        );
      } else {
        this.setActiveChild(
          this.activeChild.parentElement.parentElement.lastElementChild,
          index
        );
      }
    } else {
      if (+this.getPreviousSection().dataset.index !== 2) {
        this.setActiveChild(
          this.activeChild.parentElement.nextElementSibling,
          index
        );
      } else {
        this.setActiveChild(
          this.activeChild.parentElement.parentElement.firstElementChild,
          index
        );
      }
    }
  }
  carouselHorizontal(direction) {
    if (this.isAnimated === false) {
      this.isAnimated = true;
      this.getActivePreviousChild().style.transition = "unset";
      this.setDirection(direction);

      setTimeout(() => {
        this.isAnimated = false;
        this.activeChild.dataset.active = "deactive";
      }, 250);
    }
  }
}
