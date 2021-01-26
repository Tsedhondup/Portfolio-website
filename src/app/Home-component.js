import * as appComponent from "../app.js";
import { ElementPosition } from "../utility/ElementPostion-component.js";
import { RenderClassesComponent } from "../utility/RenderClasses-component.js";

export class HomeComponent {
  // static socialsMobile = document.querySelectorAll(".socials a"); - rm for support
  // static hamburgerAnchorTag = appComponent.HAMBURGER.querySelector("a"); - rm for support
  // static socialHamArray = [...this.socialsMobile, this.hamburgerAnchorTag]; - rm for support

  static toggleSocialPosition() {
    const socialsMobile = document.querySelectorAll(".socials a");

    if (ElementPosition.getPostionTop(appComponent.HOMEPAGE_CONTENT) <= -300) {
      socialsMobile.forEach((item) => {
        RenderClassesComponent.replace__(
          item,
          "js_left-minus-20",
          "js_left-plus-15"
        );
      });
    } else if (
      ElementPosition.getPostionTop(appComponent.HOMEPAGE_CONTENT) > -200 &&
      ElementPosition.getPostionTop(appComponent.HOMEPAGE_CONTENT) < 200
    ) {
      socialsMobile.forEach((item) => {
        RenderClassesComponent.replace__(
          item,
          "js_left-plus-15",
          "js_left-minus-20"
        );
      });
    }
  }

  static toggleSocialColor() {
    const socialsMobile = document.querySelectorAll(".socials a");
    const hamburgerAnchorTag = appComponent.HAMBURGER.querySelector("a");
    const socialHamArray = [...socialsMobile, hamburgerAnchorTag]; // array socialMobile & hamburgerAnchorTag

    ElementPosition.getPostionTop(appComponent.HOMEPAGE_CONTENT) < 0
      ? socialHamArray.forEach((item) => {
          RenderClassesComponent.add__(item, "js_color-white");
        })
      : socialHamArray.forEach((item) => {
          RenderClassesComponent.remove__(item, "js_color-white");
        });
  }

  static renderHamburgerWithBlackColor() {
    const hamburgerAnchorTag = appComponent.HAMBURGER.querySelector("a");

    RenderClassesComponent.add__(hamburgerAnchorTag, "js_black-text-color");
  }

  constructor() {}
}
