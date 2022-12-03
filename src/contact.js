export class ContactClass {
  constructor() {
    this.contactBtnHeader = document.querySelector(".contact");
    this.asideHeader = this.contactBtnHeader.querySelector("aside");
    this.closeBtnHeader = document.querySelector(".close");
    this.contactBtnMain = document.getElementsByClassName(".contact")[1];
    // this.asideMain = this.contactBtnMain.querySelector("aside");
    // this.closeBtnMain = this.contactBtnMain.querySelector(".close");
  }
  showContactForm() {
    this.contactBtnHeader.onclick = () => {
      this.asideHeader.style.transform = "translateX(0)";
    };
    
  }
  closeContactForm() {
    this.closeBtnHeader.onclick = (e) => {
      e.stopPropagation();
      this.asideHeader.style.transform = "translateX(101%)";
    };
  }
  closeIfClickOnDocument() {
    document.addEventListener("click", (e) => {
      if (e.target === this.contactBtnHeader || e.target.closest(".contact")) {
        return;
      } else this.asideHeader.style.transform = "translateX(101%)";
    });
  }
}
