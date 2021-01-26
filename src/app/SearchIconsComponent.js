export class SearchIconComponent {
  static icons = document.querySelectorAll(".search-icon-wrapper i");
  static renderTextColor() {
    let windowHeight = document.documentElement.clientHeight;
    let counterHeight = windowHeight - 2;
    if (ElementPosition.getPostionTop(ABOUT_ME) <= counterHeight) {
      this.icons.forEach((item) => {
        item.classList.add("js_text-secondary");
      });
    } else {
      this.icons.forEach((item) => {
        item.classList.remove("js_text-secondary");
      });
    }
  }
}
