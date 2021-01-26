import * as appComponent from "../app.js";
import { RenderClassesComponent } from "../utility/RenderClasses-component.js";
import { CounterElPositionComponent } from "../utility/CounterElPosition-component.js";
import { ElementPosition } from "../utility/ElementPostion-component.js";

export class BrandComponent {
  // static brandName = document.querySelector("#brand-name"); - remove for support
  // static brandSubTitle = document.querySelector(".brand-sub-title"); - remove for support

  // condition is met and only class is assign at a time = C-met
  // condition revoke thus classes are being removed = C-not meet

  static renderWithBlackBackColor() {
    const brandName = document.querySelector("#brand-name");
    // C-met
    RenderClassesComponent.add__(brandName, "js_black-bck-color");
    // C-not meet

    RenderClassesComponent.remove__(brandName, "js_white-bck-color");
    RenderClassesComponent.remove__(brandName, "js_blue-bck-color");
  }

  static renderWithBlueBackColor() {
    const brandName = document.querySelector("#brand-name");
    // C-met
    RenderClassesComponent.add__(brandName, "js_blue-bck-color");
    // C-not meet

    RenderClassesComponent.remove__(brandName, "js_white-bck-color");
    RenderClassesComponent.remove__(brandName, "js_black-bck-color");
  }

  static renderWithWhiteBackColor() {
    const brandName = document.querySelector("#brand-name");
    // C-met
    RenderClassesComponent.add__(brandName, "js_white-bck-color");
    // C-not meet

    RenderClassesComponent.remove__(brandName, "js_blue-bck-color");
    RenderClassesComponent.remove__(brandName, "js_black-bck-color");
  }

  static removeAllJsClasses() {
    const brandName = document.querySelector("#brand-name");
    RenderClassesComponent.remove__(brandName, "js_white-bck-color");
    RenderClassesComponent.remove__(brandName, "js_blue-bck-color");
    RenderClassesComponent.remove__(brandName, "js_black-bck-color");
  }

  static toggleTitleOpacity() {
    const brandSubTitle = document.querySelector(".brand-sub-title");

    ElementPosition.getPostionTop(appComponent.ABOUT_ME) <=
    CounterElPositionComponent.counterElPostion(70)
      ? RenderClassesComponent.add__(brandSubTitle, "js_opacityZero")
      : RenderClassesComponent.remove__(brandSubTitle, "js_opacityZero");
  }
}
