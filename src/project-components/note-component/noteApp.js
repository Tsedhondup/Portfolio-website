import { FormComponent } from "./form-component.js";
import { NavigationComponent } from "./Navigation-component.js";
import { ToolComponent } from "./tool-component.js";

// Calling addListenerToToolBtns() to initiate the event listening
ToolComponent.addListenerToToolBtns();

// rendering tools-container position
document.querySelectorAll(".open-close-tools-btn p em").forEach((emTag) => {
  emTag.addEventListener("click", (event) => {
    event.preventDefault();
    const toolsContainer = document.querySelector(".tools-container");
    toolsContainer.classList.toggle("js_bottom-zero");

    /*-- dynamic update of textContent --*/
    const emLastChild = document.querySelectorAll(
      ".open-close-tools-btn p em"
    )[1];

    const choosenToolsContainerClasses = Array.from(
      toolsContainer.classList
    ).filter((item) => item.includes("js_bottom-zero"));

    if (choosenToolsContainerClasses.length > 0) {
      emLastChild.textContent = "▼";
    } else {
      emLastChild.textContent = "▲";
    }
  });
});

// on window object
window.addEventListener("resize", (event) => {
  event.preventDefault();
  event.stopPropagation();
  const toolsContainer = document.querySelector(".tools-container");

  if (window.innerWidth > 900) {
    Array.from(toolsContainer.classList).forEach((classItem) => {
      if (classItem === "js_bottom-zero") {
        toolsContainer.classList.remove("js_bottom-zero");
      }
    });
  }
});

if (window.innerWidth > 900) {
  document.querySelector(".tools-container").classList.remove("js_bottom-zero");
}

// aside-menu-btn
/*-- open  --*/
document
  .querySelector(".show-side-note-list")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const asideMenu = document.querySelector(".aside_menu");
    asideMenu.classList.toggle("left-0");
  });

document.querySelector(".open-menu").addEventListener("click", (event) => {
  event.preventDefault();
  const asideMenu = document.querySelector(".aside_menu");
  asideMenu.classList.toggle("left-0");
});

/*-- close --*/
document.querySelector(".close-menu").addEventListener("click", (event) => {
  event.preventDefault();
  const asideMenu = document.querySelector(".aside_menu");
  asideMenu.classList.toggle("left-0");
});

// default save-note and close-not btn & binding listener

document.querySelector(".save-note").addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  FormComponent.saveToDatabase();
});

document.querySelector(".close-note").addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  FormComponent.cleanUpForm();
});

// Remove welcome page after 1.5seconds
window.addEventListener("load", () => {
  const welcomePage = document.querySelector(".welcome-page");
  setTimeout(() => {
    welcomePage.remove();
  }, 1500);
});

// IFFY that read localStorage and write into the note list UI
(function () {
  const noteTotalNumber = document.querySelector(".show-side-note-list em");
  const notesList = document.querySelector(".notes-list");
  const noteData = [...Object.keys(localStorage)]; // all the ids
  if (noteData.length > 0) {
    noteData.forEach((noteId) => {
      let noteObject = JSON.parse(localStorage.getItem(noteId));
      let noteObjectTitle = noteObject.title;
      let newList = document.createElement("li");
      let newEm = document.createElement("em");
      newEm.append("✕");
      newList.append(noteObjectTitle);
      newList.append(newEm);
      newList.setAttribute("id", noteId);
      newList.setAttribute("class", "note-item");
      notesList.append(newList);

      // adding event listener
      import("./Navigation-component.js").then((module) => {
        module.NavigationComponent.addListenerToDeleteBtn();
      });
    });

    // rendering the total notes being save
    let totalSaveNotes = noteData.length;
    if (!totalSaveNotes) {
      totalSaveNotes = 0;
    }
    noteTotalNumber.textContent = totalSaveNotes;
  } else {
    return;
  }
})();
