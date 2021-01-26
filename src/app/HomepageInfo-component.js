import * as appComponent from "../app.js";
import { ElementPosition } from "../utility/ElementPostion-component.js";
import { CounterElPositionComponent } from "../utility/CounterElPosition-component.js";
import { RenderClassesComponent } from "../utility/RenderClasses-component.js";
export class HomePageInfoComponent {
  // static homePageInfo = document.querySelector(".home-page-info"); - rm for support

  static renderDisplay() {
    const homePageInfo = document.querySelector(".home-page-info");

    ElementPosition.getPostionTop(appComponent.ABOUT_ME) <=
    CounterElPositionComponent.counterElPostion(150)
      ? RenderClassesComponent.add__(homePageInfo, "js_display-none")
      : RenderClassesComponent.remove__(homePageInfo, "js_display-none");
  }
}
