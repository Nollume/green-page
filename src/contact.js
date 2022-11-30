export class ContactClass {
  constructor() {
    this.contactBtn = document.querySelector(".contact");
    this.aside = this.contactBtn.querySelector("aside");
    this.closeBtn = document.querySelector(".close");
  }
  showContactForm() {
    this.contactBtn.onclick = () => {
      this.aside.style.transform = "translateX(0)";
    };
  }
  closeContactForm() {
    this.closeBtn.onclick = (e) => {
      e.stopPropagation();
      this.aside.style.transform = "translateX(100%)";
    };
  }
  closeIfClickOnDocument() {
    document.addEventListener("click", (e) => {
      if (e.target === this.contactBtn || e.target.closest(".contact")) {
        return;
      } else this.aside.style.transform = "translateX(100%)";
    });
  }
}
