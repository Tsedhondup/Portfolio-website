import { CounterElPositionComponent } from "./utility/CounterElPosition-component.js";
import { ElementPosition } from "./utility/ElementPostion-component.js";
import { RenderClassesComponent } from "./utility/RenderClasses-component.js";
// Global constant
export const PRIMARY_NAV_WRAPPER = document.querySelector(
  ".primary-nav-wrapper"
);
export const HOMEPAGE_CONTENT = document.querySelector(".homepage-content");
export const SEARCH_INPUT_WRAPPER = document.querySelector(
  ".search-input-wrapper"
);
export const SEARCH_LIST = document.querySelector(".search-list");
export const SEARCH_INPUT_FIELD = document.querySelector(".search-input");
export const SEARCH_ICON_OPEN = document.querySelector(".fa-search");
export const SEARCH_ICON_CLOSE = document.querySelector(".fa-times");
export const DAY_NIGHT_BTN = document.querySelector(".day-night button");
export const HAMBURGER = document.querySelector(".hamburger");
export const BACKDROP = document.querySelector(".backdrop");
export const MOBILE_NAV = document.querySelector(".mobile-nav");
export const CLOSE_MO_NAV_BTN = document.querySelector(
  ".close-mobile-nav button"
);

export const ABOUT_ME = document.querySelector(".about");
export const DUMMIES = document.querySelector(".dummies");
export const CONTACTS = document.querySelector(".contact");
export const FOOTER = document.querySelector("footer");
// -------------------------------- search nodes array  ------------------------------- //
const SearchNodesArray = [
  SEARCH_ICON_OPEN,
  SEARCH_ICON_CLOSE,
  SEARCH_INPUT_FIELD,
];

const componentArray = [
  ABOUT_ME.querySelector(".about-content"),
  DUMMIES.querySelector(".dummies-content"),
  CONTACTS.querySelector(".contact-content"),
  FOOTER.querySelector(".footer-content"),
];

const toggleComponentOpacity = () => {
  componentArray.forEach((item) => {
    ElementPosition.getPostionTop(item) <=
    CounterElPositionComponent.counterElPostion(220)
      ? item.classList.add("js_opacity-1")
      : item.classList.remove("js_opacity-1");
  });
};

/*-------------------- jon duckett guids -----------------------------*/
const jonDuckettGuide = document.querySelector(".jon-ducket-books");
const showJDGuidBtn = document.querySelector(".jd-links");
const hideJDGuidBTn = document.querySelector("#hideJD");

showJDGuidBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  jonDuckettGuide.classList.toggle("js_display-block");
});
hideJDGuidBTn.addEventListener("click", (event) => {
  event.stopPropagation();
  jonDuckettGuide.classList.remove("js_display-block");
});
/* ----------------- BINDING EVENT LISTENER - dynamic module import  ------------------*/

SearchNodesArray.forEach((item, index) => {
  if (item.addEventListener) {
    if (index === 0) {
      item.addEventListener("click", () => {
        import("./app/Search-component.js").then((module) => {
          module.SearchComponent.displaySearch();
        });
      });
    } else if (index === 1) {
      item.addEventListener("click", () => {
        import("./app/Search-component.js").then((module) => {
          module.SearchComponent.hideSearch();
        });
      });
    } else if (index === 2) {
      const searchPromise = import("./app/Search-component.js");
      item.addEventListener("blur", () => {
        searchPromise.then((module) => {
          module.SearchComponent.checkInput();
        });
      });

      item.addEventListener("keyup", () => {
        searchPromise.then((module) => {
          module.SearchComponent.findComponent();
        });
      });
    }
  } else {
    alert("your browser support selected feature, try chrome/firefox/edge");
  }
});

PRIMARY_NAV_WRAPPER.addEventListener(
  "mouseover",
  (event) => {
    let eSrc = event.target;
    eSrc.classList.add("js_move-up");
  },
  true
);
PRIMARY_NAV_WRAPPER.addEventListener(
  "mouseout",
  (event) => {
    let eSrc = event.target;
    eSrc.classList.remove("js_move-up");
  },
  true
);

HAMBURGER.addEventListener("click", () => {
  import("./app/MobileNav-component.js").then((module) => {
    module.MobileNavComponent.displayMobileNav();
  });
});

BACKDROP.addEventListener("click", () => {
  RenderClassesComponent.toggle__(MOBILE_NAV, "js_posi-top");
  RenderClassesComponent.toggle__(BACKDROP, "js_display-block");
  RenderClassesComponent.replace__(
    HAMBURGER,
    "js_display-flex",
    "js_display-none"
  );
});

CLOSE_MO_NAV_BTN.addEventListener("click", () => {
  RenderClassesComponent.toggle__(MOBILE_NAV, "js_posi-top");
  RenderClassesComponent.toggle__(BACKDROP, "js_display-block");
  RenderClassesComponent.replace__(
    HAMBURGER,
    "js_display-flex",
    "js_display-none"
  );
});

MOBILE_NAV.querySelectorAll("ul li a").forEach((item) => {
  item.addEventListener(
    "click",
    () => {
      import("./app/MobileNav-component.js").then((module) => {
        module.MobileNavComponent.hideMobileNav();
      });
    },
    true
  );
});

DAY_NIGHT_BTN.addEventListener("click", () => {
  const dayNight = document.querySelector(".day-night");
  import("./utility/RenderClasses-component.js").then((module) => {
    module.RenderClassesComponent.toggle__(dayNight, "js_flex-end");
  });
});

// udemy certificate
const udemyCertificate = document.querySelector(".about-p3 b");
const udemyCertificateImg = document.querySelector(".certWrapper");
const hideUdemyCertificate = document.querySelector(".close-certi");
udemyCertificate.addEventListener("click", () => {
  udemyCertificateImg.classList.add("js_display-flex");
});

hideUdemyCertificate.addEventListener("click", () => {
  udemyCertificateImg.classList.remove("js_display-flex");
});

// app in development
const appInDev = document.querySelectorAll(".app-in-dev");
const appInDevWrapper = document.querySelector(".appInDev-wrapper");
const closeAppInDevMsg = document.querySelector(".close-App-in-dev-msg em");
appInDev.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    appInDevWrapper.classList.add("js_display-flex");
  });
});
closeAppInDevMsg.addEventListener("click", (event) => {
  appInDevWrapper.classList.remove("js_display-flex");
});
// global window object - scroll events on window object and triggers series of functions 'handle with care'
window.addEventListener("scroll", () => {
  toggleComponentOpacity();

  import("./app/ShadowDiv-component.js").then((module) => {
    module.ShadowDivComponent.renderShadowDiv();
  });

  import("./app/BrandComponent.js").then((module) => {
    module.BrandComponent.toggleTitleOpacity();
  });

  import("./app/PrimaryNavigation-component.js").then((module) => {
    module.PrimaryNavigationComponent.toggleDisplay();
  });

  import("./app/SecondaryNavComponent.js").then((module) => {
    module.SecondaryNavComponent.toggleSecNavWrapperBckColor();
    module.SecondaryNavComponent.toggleTextColor();
  });

  import("./app/Home-component.js").then((module) => {
    module.HomeComponent.toggleSocialPosition();
    module.HomeComponent.toggleSocialColor();
  });

  import("./app/HomepageInfo-component.js").then((module) => {
    module.HomePageInfoComponent.renderDisplay();
  });
});
