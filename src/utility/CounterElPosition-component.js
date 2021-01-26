export class CounterElPositionComponent {
  static counterElPostion(nPixel) {
    let windowHeight = document.documentElement.clientHeight;
    let counterHeight = windowHeight - nPixel;
    return counterHeight;
  }
}
