export class ElementPosition {
  static getPostionTop(el) {
    let rect = el.getBoundingClientRect();
    let x = rect.left;
    let y = rect.top;
    let w = rect.width;
    let h = rect.height;
    return y;
  }
}
