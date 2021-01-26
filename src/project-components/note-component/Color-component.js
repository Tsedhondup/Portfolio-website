export class ColorComponent {
  static COLOR_MENU = document.getElementById("color-menu");
  static COLOR_CHART = COLOR_MENU.nextElementSibling;
  static RGB_R = document.getElementById("r-value");
  static RGB_G = document.getElementById("g-value");
  static RGB_B = document.getElementById("b-value");
  static HEXCODE_FIELD = document.getElementById("hex-code");
  static displayColorChart_handler = () => {
    COLOR_CHART.style.display = "grid";
  };
  static hideColorChart_handler = () => {
    COLOR_CHART.style.display = "none";
  };
  static color_menu_dynamic_update_handler = () => {
    NOTE_AREA.style.color = COLOR_MENU.value;
    HEXCODE_FIELD.value = COLOR_MENU.value;
    HEXCODE_FIELD.style.color = COLOR_MENU.value;
  };
}
ColorComponent.COLOR_MENU.addEventListener(
  "focus",
  this.displayColorChart_handler
);
ColorComponent.COLOR_MENU.addEventListener(
  "keyup",
  this.color_menu_dynamic_update_handler
);

// ------------------ rbg-converter -------------------//

const rgb_vs_hexcode = [
  { decimal: 0, hexcode: 0 },
  { decimal: 1, hexcode: 1 },
  { decimal: 2, hexcode: 2 },
  { decimal: 3, hexcode: 3 },
  { decimal: 4, hexcode: 4 },
  { decimal: 5, hexcode: 5 },
  { decimal: 6, hexcode: 6 },
  { decimal: 7, hexcode: 7 },
  { decimal: 8, hexcode: 8 },
  { decimal: 9, hexcode: 9 },
  { decimal: 10, hexcode: "a" },
  { decimal: 11, hexcode: "b" },
  { decimal: 12, hexcode: "c" },
  { decimal: 13, hexcode: "d" },
  { decimal: 14, hexcode: "e" },
  { decimal: 15, hexcode: "f" },
];

let rX = 0;
let rY = 0;
let gX = 0;
let gY = 0;
let bX = 0;
let bY = 0;

// ------ rgb to hexcode converter ---//

const rgb_to_hexcode_comparator = () => {
  rgb_vs_hexcode.forEach((item) => {
    if (rX == item.decimal) {
      rX = item.hexcode;
    }
  });

  rgb_vs_hexcode.forEach((item) => {
    if (rY == item.decimal) {
      rY = item.hexcode;
    }
  });

  rgb_vs_hexcode.forEach((item) => {
    if (gX == item.decimal) {
      gX = item.hexcode;
    }
  });

  rgb_vs_hexcode.forEach((item) => {
    if (gY == item.decimal) {
      gY = item.hexcode;
    }
  });

  rgb_vs_hexcode.forEach((item) => {
    if (bX == item.decimal) {
      bX = item.hexcode;
    }
  });

  rgb_vs_hexcode.forEach((item) => {
    if (bY == item.decimal) {
      bY = item.hexcode;
    }
  });
};

const evaluateRGB = () => {
  rgb_to_hexcode_comparator();
  HEXCODE_FIELD.value = `#${rX}${rY}${gX}${gY}${bX}${bY}`;
  COLOR_MENU.value = `#${rX}${rY}${gX}${gY}${bX}${bY}`;
  NOTE_AREA.style.color = COLOR_MENU.value;
};

// Following three functions out-put value for evaluation //

const r_to_hexcode = (event) => {
  let eSource = event.target;
  let eSrc_value = eSource.value;
  let rRemainder = eSrc_value / 16;
  let rRemainder_toString = rRemainder.toString();
  if (rRemainder_toString.includes(".")) {
    let rRemainder_array = rRemainder_toString.split(".");
    rRemainder_array[1] = `0.${rRemainder_array[1]}`;
    rRemainder_array.map((items) => {
      parseInt(items);
    });
    rX = rRemainder_array[0];
    rY = rRemainder_array[1] * 16;
  } else {
    let rRemainder_array = rRemainder_toString.split();
    rRemainder_array.map((items) => {
      parseInt(items);
    });
    rX = rRemainder_array[0];
  }
  evaluateRGB();
};

const g_to_hexcode = (event) => {
  let eSource = event.target;
  let eSrc_value = eSource.value;
  let rRemainder = eSrc_value / 16;
  let rRemainder_toString = rRemainder.toString();
  if (rRemainder_toString.includes(".")) {
    let rRemainder_array = rRemainder_toString.split(".");
    rRemainder_array[1] = `0.${rRemainder_array[1]}`;
    rRemainder_array.map((items) => {
      parseInt(items);
    });
    gX = rRemainder_array[0];
    gY = rRemainder_array[1] * 16;
  } else {
    let rRemainder_array = rRemainder_toString.split();
    rRemainder_array.map((items) => {
      parseInt(items);
    });
    gX = rRemainder_array[0];
  }
  evaluateRGB();
};

const b_to_hexcode = (event) => {
  let eSource = event.target;
  let eSrc_value = eSource.value;
  let rRemainder = eSrc_value / 16;
  let rRemainder_toString = rRemainder.toString();
  if (rRemainder_toString.includes(".")) {
    let rRemainder_array = rRemainder_toString.split(".");
    rRemainder_array[1] = `0.${rRemainder_array[1]}`;
    rRemainder_array.map((items) => {
      parseInt(items);
    });
    bX = rRemainder_array[0];
    bY = rRemainder_array[1] * 16;
  } else {
    let rRemainder_array = rRemainder_toString.split();
    rRemainder_array.map((items) => {
      parseInt(items);
    });
    bX = rRemainder_array[0];
  }
  evaluateRGB();
};

//------- Updates HEXCODE_FIELD & Primary color of note field ------//

RGB_R.addEventListener(
  "keyup",
  (event) => {
    let eSource = event.target;
    if (eSource.value > 255) {
      alert(
        "input number exceeds the max value = '255', so we choose 255 as default value"
      );
      eSource.value = 255;
    }
    r_to_hexcode(event);
  },
  false
);

RGB_G.addEventListener(
  "keyup",
  (event) => {
    let eSource = event.target;
    if (eSource.value > 255) {
      alert(
        "input number exceeds the max value = '255', so we choose 255 as default value"
      );
      eSource.value = 255;
    }
    g_to_hexcode(event);
  },
  false
);

RGB_B.addEventListener(
  "keyup",
  (event) => {
    let eSource = event.target;
    if (eSource.value > 255) {
      alert(
        "input number exceeds the max value = '255', so we choose 255 as default value"
      );
      eSource.value = 255;
    }
    b_to_hexcode(event);
  },
  false
);
