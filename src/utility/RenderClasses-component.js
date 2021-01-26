export class RenderClassesComponent {
  static replace__(el, addClass, rmClass) {
    el.classList.add(addClass);
    el.classList.remove(rmClass);
  }

  static toggle__(el, nameClass) {
    el.classList.toggle(nameClass);
  }
  static add__(el, nameClass) {
    el.classList.add(nameClass);
  }

  static remove__(el, nameClass) {
    el.classList.remove(nameClass);
  }
}
