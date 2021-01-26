import * as appComponent from "../app.js";
import * as secondaryNavComponent from "./SecondaryNavComponent.js";
import { RenderClassesComponent } from "../utility/RenderClasses-component.js";

export class SearchComponent {
  // resources elementNodes - not part of this component - rm for support
  // static searchElements = document.querySelector(".search-elements");
  // static listAnchorTag = document.querySelectorAll(".list-anchor");
  // static secNavUlTwo = document.querySelector(".sec-nav-ul-two");
  // static dayNightList = document.querySelector(".dayNightList");

  static displaySearch() {
    const searchElements = document.querySelector(".search-elements");
    const listAnchorTag = document.querySelectorAll(".list-anchor");
    const secNavUlTwo = document.querySelector(".sec-nav-ul-two");
    const dayNightList = document.querySelector(".dayNightList");
    let documentWidth = document.documentElement.clientWidth;
    documentWidth <= 600
      ? secondaryNavComponent.SecondaryNavComponent.toggleDisplayForSecondaryNav()
      : null;

    appComponent.SEARCH_INPUT_FIELD.focus();

    RenderClassesComponent.toggle__(
      appComponent.SEARCH_INPUT_WRAPPER,
      "js_display-flex"
    );

    RenderClassesComponent.replace__(
      appComponent.SEARCH_ICON_OPEN,
      "js_display-none",
      "js_display-flex"
    );

    RenderClassesComponent.replace__(
      appComponent.SEARCH_ICON_CLOSE,
      "js_display-flex",
      "js_display-none"
    );

    RenderClassesComponent.add__(searchElements, "js_display-grid");

    listAnchorTag.forEach((item) => {
      RenderClassesComponent.add__(item, "js_display-none");
    });
    RenderClassesComponent.add__(secNavUlTwo, "js_display-flex");

    RenderClassesComponent.add__(dayNightList, "js_display-none");
  }

  static hideSearch() {
    const secondaryNav = document.querySelector(".secondary-nav");
    const secondaryNavUlOne = document.querySelector(
      ".sec-nav-ul-one"
    );
    const searchElements = document.querySelector(".search-elements");
    const listAnchorTag = document.querySelectorAll(".list-anchor");
    const secNavUlTwo = document.querySelector(".sec-nav-ul-two");
    const dayNightList = document.querySelector(".dayNightList");
    appComponent.SEARCH_INPUT_FIELD.blur();
    appComponent.SEARCH_INPUT_FIELD.value = "";

    RenderClassesComponent.toggle__(
      appComponent.SEARCH_INPUT_WRAPPER,
      "js_display-flex"
    );

    RenderClassesComponent.replace__(
      appComponent.SEARCH_ICON_OPEN,
      "js_display-flex",
      "js_display-none"
    );

    RenderClassesComponent.replace__(
      appComponent.SEARCH_ICON_CLOSE,
      "js_display-none",
      "js_display-flex"
    );

    RenderClassesComponent.remove__(searchElements, "js_display-grid");

    listAnchorTag.forEach((item) => {
      RenderClassesComponent.remove__(item, "js_display-none");
    });

    RenderClassesComponent.remove__(secNavUlTwo, "js_display-flex");

    RenderClassesComponent.remove__(dayNightList, "js_display-none");

    RenderClassesComponent.remove__(secondaryNav, "js_display_flex");

    RenderClassesComponent.remove__(secondaryNavUlOne, "js_display_none");
  }

  static checkInput() {
    if (appComponent.SEARCH_INPUT_FIELD.value.length > 0) {
      // appComponent.SEARCH_INPUT_FIELD.classList.add("js_bckColor"); //
      RenderClassesComponent.add__(
        appComponent.SEARCH_INPUT_FIELD,
        "js_bckColor"
      );
    } else {
      this.hideSearch();
      // appComponent.SEARCH_INPUT_FIELD.classList.remove("js_bckColor"); //
      RenderClassesComponent.remove__(
        appComponent.SEARCH_INPUT_FIELD,
        "js_bckColor"
      );
    }
  }

  static findComponent() {
    const inputValue = appComponent.SEARCH_INPUT_FIELD.value;
    const homepage = document.querySelector(".homepage");
    const about = document.querySelector(".about");
    const project = document.querySelector(".dummies");
    const contact = document.querySelector(".contact");
    const credits = document.querySelector("footer");

    if (
      inputValue === "h" ||
      inputValue === "ho" ||
      inputValue === "hom" ||
      inputValue === "home"
    ) {
      homepage.scrollIntoView();
    } else if (
      inputValue === "a" ||
      inputValue === "ab" ||
      inputValue === "abo" ||
      inputValue === "abou" ||
      inputValue === "about"
    ) {
      about.scrollIntoView();
      // window.scrollTo(0, document.documentElement.clientHeight + 300);
    } else if (
      inputValue === "p" ||
      inputValue === "pr" ||
      inputValue === "pro" ||
      inputValue === "proj" ||
      inputValue === "projec" ||
      inputValue === "projects"
    ) {
      project.scrollIntoView(); // pword
    } else if (
      inputValue === "c" ||
      inputValue === "co" ||
      inputValue === "con" ||
      inputValue === "cont" ||
      inputValue === "conta" ||
      inputValue === "contac" ||
      inputValue === "contact"
    ) {
      contact.scrollIntoView(); // non-static field of class Contact only available via build object
    } else if (
      inputValue === "cr" ||
      inputValue === "cre" ||
      inputValue === "cred" ||
      inputValue === "credi" ||
      inputValue === "credit"
    ) {
      credits.scrollIntoView();
    } else if (inputValue === "") {
      return;
      // document.querySelector(".feature-article").scrollIntoView();
    }
  }
  constructor() {}
}
