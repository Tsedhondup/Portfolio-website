import * as appComponent from "../app.js";
import { ElementPosition } from "../utility/ElementPostion-component.js";
import { CounterElPositionComponent } from "../utility/CounterElPosition-component.js";
import { RenderClassesComponent } from "../utility/RenderClasses-component.js";
export class PrimaryNavigationComponent{
  static toggleDisplay() {
    ElementPosition.getPostionTop(appComponent.ABOUT_ME) <=
    CounterElPositionComponent.counterElPostion(150)
      ? RenderClassesComponent.add__(
          appComponent.PRIMARY_NAV_WRAPPER,
          "js_display-none"
        )
      : RenderClassesComponent.remove__(
          appComponent.PRIMARY_NAV_WRAPPER,
          "js_display-none"
        );
  }
}
