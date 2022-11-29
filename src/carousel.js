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
  constructor() {
    this.currentChilds = [];
    this.isAnimated = false;
  }
  getPreviousSection(event) {
    return event.target.closest(".main-container");
  }
  getPreviousElChildrens(event) {
    return Array.from(this.getPreviousSection(event).children);
  }
  getActivePreviousChild(event) {
    return this.getPreviousElChildrens(event).find(
      (child) => child.dataset.active === "active"
    );
  }
  getPreviousSectionChildIndex(event) {
    return +this.getActivePreviousChild(event).dataset.index;
  }
  getCurrentActiveChild(event) {
    return this.currentChilds.find(
      (el) => +el.dataset.index === this.getPreviousSectionChildIndex(event)
    );
  }
  unsetChildrenEl(event) {
    this.getPreviousElChildrens(event).forEach(
      (child) => (child.dataset.active = "deactive")
    );
  }
  setDirection(event, direction) {
    if (direction === "toRight") {
      if (+this.getPreviousSection(event).dataset.index !== 2) {
        this.currentChilds = Array.from(
          this.getPreviousSection(event).nextElementSibling.children
        );
      } else {
        this.currentChilds = Array.from(
          this.getPreviousSection(event).parentElement.firstElementChild
            .children
        );
      }
    } else {
      if (+this.getPreviousSection(event).dataset.index !== 0) {
        this.currentChilds = Array.from(
          this.getPreviousSection(event).previousElementSibling.children
        );
      } else {
        this.currentChilds = Array.from(
          this.getPreviousSection(event).parentElement.lastElementChild.children
        );
      }
    }
  }

  carouselHorizontal(event, direction) {
    if (this.isAnimated === false) {
      this.isAnimated = true;

      this.getActivePreviousChild(event).style.transition = "unset";
      this.setDirection(event, direction);
      this.getCurrentActiveChild(event).dataset.active = "active";

      setTimeout(() => {
        this.unsetChildrenEl(event);
        this.isAnimated = false;
      }, 250);
    }
  }
}
