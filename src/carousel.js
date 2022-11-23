export class Carousel {
  constructor(sections) {
    this.sections = sections;
    this.currentIndex = 0;
    this.transitionTime = 0.25;
    this.timeoutDuration = this.transitionTime * 1000;
    this.page = "home";
    this.lastIndex = null;
  }

  getNextIndex(direction) {
    if (this.page === "home") {
      if (direction === "toBottom") {
        this.currentIndex === 2 ? (this.currentIndex = 0) : this.currentIndex++;
      } else {
        this.currentIndex === 0 ? (this.currentIndex = 2) : this.currentIndex--;
      }
    } else if (this.page === "about") {
      if (direction === "toBottom") {
        this.currentIndex === 5 ? (this.currentIndex = 3) : this.currentIndex++;
      } else {
        this.currentIndex === 3 ? (this.currentIndex = 5) : this.currentIndex--;
      }
    } else {
      if (direction === "toBottom") {
        this.currentIndex === 8 ? (this.currentIndex = 6) : this.currentIndex++;
      } else {
        this.currentIndex === 6 ? (this.currentIndex = 8) : this.currentIndex--;
      }
    }
  }
  getCurrentPage() {
    return this.sections.find(
      (section) => +section.dataset.index === this.currentIndex
    );
  }
  getPreviousPage() {
    return this.sections.find(
      (section) => +section.dataset.index === this.lastIndex
    );
  }
  setAnimation(direction) {
    this.getPreviousPage(
      this.lastIndex
    ).style.transition = `all ${this.transitionTime}s ease-in`;
    if (direction === "toBottom") {
      this.getPreviousPage(this.lastIndex).dataset.active = "to-bottom";
      this.getCurrentPage().dataset.active = "deactive";
    } else {
      this.getPreviousPage(this.lastIndex).dataset.active = "deactive";
      this.getCurrentPage().dataset.active = "to-bottom";
    }
  }
  unsetAnimation(direction) {
    if (direction === "toBottom") {
      this.getPreviousPage(this.lastIndex).dataset.active = "deactive";
      this.getPreviousPage(this.lastIndex).style.transition = "unset";
    } else {
      this.getPreviousPage(this.lastIndex).dataset.active = "to-bottom";
      this.getPreviousPage(this.lastIndex).style.transition = "unset";
    }
  }
  carousel(direction) {
    this.lastIndex = this.currentIndex;
    this.getNextIndex(direction);
    this.setAnimation(direction);

    setTimeout(() => {
      this.getCurrentPage().style.transition = `all ${this.transitionTime}s ease-in`;
      this.getCurrentPage().dataset.active = "active";
    }, 0);
    setTimeout(() => {
      this.unsetAnimation(direction);
    }, this.timeoutDuration);
  }
}
