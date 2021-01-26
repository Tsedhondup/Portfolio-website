import * as appComponent from "../app.js";
import { RenderClassesComponent } from "../utility/RenderClasses-component.js";
import { ElementPosition } from "../utility/ElementPostion-component.js";
import { CounterElPositionComponent } from "../utility/CounterElPosition-component.js";

export class ShadowDivComponent {
  // static shadowDiv = document.querySelector(".shadow-div"); rm for support

  static renderShadowDiv() {
    const shadowDiv = document.querySelector(".shadow-div");

    const aboutMe = document.querySelector(".about");

    ElementPosition.getPostionTop(appComponent.ABOUT_ME) <
    CounterElPositionComponent.counterElPostion(1)
      ? RenderClassesComponent.replace__(
          shadowDiv,
          "js_display-block",
          "js_display-none"
        )
      : RenderClassesComponent.replace__(
          shadowDiv,
          "js_display-none",
          "js_display-block"
        );
  }

  static renderWithWhiteBackColor() {
    const shadowDiv = document.querySelector(".shadow-div");

    ElementPosition.getPostionTop(appComponent.ABOUT_ME) <= 100
      ? RenderClassesComponent.add__(shadowDiv, "js_white-back-color")
      : RenderClassesComponent.remove__(shadowDiv, "js_white-back-color");
  }
}
