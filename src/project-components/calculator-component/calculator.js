const numberVal = document.querySelectorAll(".numVal");
//function that display value

numberVal.forEach((item) => {
  item.addEventListener("click", (event) => {
    const eSrc = event.target;
    const eSrcVal = eSrc.value;
    document.getElementById("result").value += eSrcVal;
  });
});

// function dis(val) {}
const pieBtn = document.querySelector("#pie");

pieBtn.addEventListener("click", () => {
  // const pieVal = pieBtn.value;
  document.getElementById("result").value = 3.14159;
});

// function pie() {}
//function that clear the display
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  document.getElementById("result").value = "";
});
// function clr() {}

// function for back button

const backBtn = document.querySelector("#del");
backBtn.addEventListener("click", () => {
  var val = document.getElementById("result").value;
  var newVal = val.slice(0, -1);
  document.getElementById("result").value = newVal;
});
// function back() {
//   var val = document.getElementById("result").value;
//   var newVal = val.slice(0, -1);
//   document.getElementById("result").value = newVal;
// }

//function that evaluates the digit and return result
const multiplyBtn = document.querySelector("#equal");
multiplyBtn.addEventListener("click", () => {
  var y;
  var x = document.getElementById("result").value;
  if (x.startsWith("✓⎺")) {
    var xRemove = x.slice(2);
    y = Math.sqrt(xRemove);
    document.getElementById("result").value = y;
  } else {
    y = eval(x);
    document.getElementById("result").value = y;
  }
});
// function solve() {
//   var y;
//   var x = document.getElementById("result").value;
//   if (x.startsWith("✓⎺")) {
//     var xRemove = x.slice(2);
//     y = Math.sqrt(xRemove);
//     document.getElementById("result").value = y;
//   } else {
//     y = eval(x);
//     document.getElementById("result").value = y;
//   }
// }
