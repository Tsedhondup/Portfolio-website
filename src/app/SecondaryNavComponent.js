import * as appComponent from "../app.js";
import { BrandComponent } from "./BrandComponent.js";
import { HomeComponent } from "./Home-component.js";
import { CounterElPositionComponent } from "../utility/CounterElPosition-component.js";
import { RenderClassesComponent } from "../utility/RenderClasses-component.js";
import { ElementPosition } from "../utility/ElementPostion-component.js";

export class SecondaryNavComponent {
  // rm for support
  // static secNavWrapper = document.querySelector(".sec-nav-wrapper");
  // static secondaryNav = this.secNavWrapper.querySelector(".secondary-nav");
  // static secondaryNavUlOne = this.secondaryNav.querySelector(".sec-nav-ul-one");
  // static listAnchorTag = document.querySelectorAll(".list-anchor a");
  // static searchIcons = document.querySelectorAll(".search-icon-wrapper i");

  static toggleDisplayForSecondaryNav() {
    const secNavWrapper = document.querySelector(".sec-nav-wrapper");
    const secondaryNav = secNavWrapper.querySelector(".secondary-nav");
    const secondaryNavUlOne = secondaryNav.querySelector(".sec-nav-ul-one");

    RenderClassesComponent.toggle__(secondaryNav, "js_display_flex");
    RenderClassesComponent.toggle__(secondaryNavUlOne, "js_display_none");
  }

  static toggleSecNavWrapperBckColor() {
    const secNavWrapper = document.querySelector(".sec-nav-wrapper");

    if (
      ElementPosition.getPostionTop(appComponent.ABOUT_ME) <= 65 &&
      ElementPosition.getPostionTop(appComponent.DUMMIES) > 65
    ) {
      // C-met
      RenderClassesComponent.add__(secNavWrapper, "js_blue-bck-color");
      BrandComponent.renderWithBlackBackColor();
      HomeComponent.renderHamburgerWithBlackColor();

      // C-not meet
      RenderClassesComponent.remove__(secNavWrapper, "js_white-bck-color");
      RenderClassesComponent.remove__(secNavWrapper, "js_black-bck-color");
      RenderClassesComponent.remove__(secNavWrapper, "js_red-bck-color");
    } else if (
      ElementPosition.getPostionTop(appComponent.DUMMIES) <= 65 &&
      ElementPosition.getPostionTop(appComponent.CONTACTS) > 65
    ) {
      // C-met
      RenderClassesComponent.add__(secNavWrapper, "js_white-bck-color");
      BrandComponent.renderWithBlueBackColor();
      // C-not meet
      RenderClassesComponent.remove__(secNavWrapper, "js_blue-bck-color");
      RenderClassesComponent.remove__(secNavWrapper, "js_black-bck-color");
      RenderClassesComponent.remove__(secNavWrapper, "js_red-bck-color");
    } else if (
      ElementPosition.getPostionTop(appComponent.CONTACTS) <= 65 &&
      ElementPosition.getPostionTop(appComponent.FOOTER) > 65
    ) {
      // C-met
      RenderClassesComponent.add__(secNavWrapper, "js_black-bck-color");
      BrandComponent.renderWithWhiteBackColor();
      // C-not meet
      RenderClassesComponent.remove__(secNavWrapper, "js_white-bck-color");
      RenderClassesComponent.remove__(secNavWrapper, "js_blue-bck-color");
      RenderClassesComponent.remove__(secNavWrapper, "js_red-bck-color");
    } else {
      // C-not meet
      RenderClassesComponent.remove__(secNavWrapper, "js_white-bck-color");
      RenderClassesComponent.remove__(secNavWrapper, "js_blue-bck-color");
      RenderClassesComponent.remove__(secNavWrapper, "js_black-bck-color");
      RenderClassesComponent.remove__(secNavWrapper, "js_red-bck-color");
      BrandComponent.removeAllJsClasses();
    }
  }

  static toggleTextColor() {
    const listAnchorTag = document.querySelectorAll(".list-anchor a");
    const searchIcons = document.querySelectorAll(".search-icon-wrapper i");
    const xArray = [...listAnchorTag, ...searchIcons];

    if (
      ElementPosition.getPostionTop(appComponent.ABOUT_ME) >=
      CounterElPositionComponent.counterElPostion(0)
    ) {
      listAnchorTag.forEach((item) => {
        item.disabled = true;
        item.classList.add("js_opacity-zero");
        item.classList.remove("js_color-black");
        item.classList.remove("js_color-white");
        // RenderClassesComponent.remove__(item, "js_color-white");
      });
      searchIcons.forEach((item) => {
        // RenderClassesComponent.add__(item, "js_color-black");
        RenderClassesComponent.remove__(item, "js_color-white");
      });
    } else if (
      ElementPosition.getPostionTop(appComponent.DUMMIES) <= 65 &&
      ElementPosition.getPostionTop(appComponent.CONTACTS) > 65
    ) {
      listAnchorTag.forEach((item) => {
        item.disabled = false;
        item.classList.add("js_color-black");
        item.classList.remove("js_opacity-zero");
        item.classList.remove("js_color-white");
      });
      searchIcons.forEach((item) => {
        item.classList.add("js_color-black");
        item.classList.remove("js_color-white");
      });
    } else {
      listAnchorTag.forEach((item) => {
        item.disabled = false;
      });
      xArray.forEach((item) => {
        item.classList.add("js_color-white");
        item.classList.remove("js_color-black");
      });
    }
  }
}
