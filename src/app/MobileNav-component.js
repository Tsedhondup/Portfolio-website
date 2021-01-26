import * as appComponent from "../app.js";
import { RenderClassesComponent } from "../utility/RenderClasses-component.js";

export class MobileNavComponent {
  static displayMobileNav() {
    RenderClassesComponent.toggle__(appComponent.MOBILE_NAV, "js_posi-top");
    RenderClassesComponent.toggle__(appComponent.BACKDROP, "js_display-block");
    RenderClassesComponent.replace__(
      appComponent.HAMBURGER,
      "js_display-none",
      "js_display-flex"
    );
  }
  static hideMobileNav() {
    RenderClassesComponent.toggle__(appComponent.MOBILE_NAV, "js_posi-top");
    RenderClassesComponent.toggle__(appComponent.BACKDROP, "js_display-block");
    RenderClassesComponent.replace__(
      appComponent.HAMBURGER,
      "js_display-flex",
      "js_display-none"
    );
  }
  constructor() {}
}
