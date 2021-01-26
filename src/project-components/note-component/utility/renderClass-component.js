export class RenderClassComponent {
  renderClass(targetElement, input, output1, output2) {
    targetElement.classList.add(input);
    targetElement.classList.remove(output1);
    targetElement.classList.remove(output2);
  }
  constructor() {}
}

export const renderClassObj = new RenderClassComponent();
