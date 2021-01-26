import { FormComponent } from "./form-component.js";
import { renderClassObj } from "./utility/renderClass-component.js";
export class ToolComponent {
  /***---------- to be save into to dataBase --------***/
  static addListenerToToolBtns() {
    const fontFamily = document.querySelector("#font-family");
    const fontList = document.querySelector(".font-list");
    const closeFontList = document.querySelector(".close-side-font");
    const fontSize = document.querySelector("#font-size");
    const fontColor = document.querySelector("#font-color");
    const colorTable = document.querySelector(".color-table");
    const closeColotTable = document.querySelector(".close-side-color");
    const fontBold = document.querySelector("#font-bold");
    const fontItalic = document.querySelector("#font-italic");
    const fontUnderLine = document.querySelector("#font-underline");
    const textAlignLeft = document.querySelector("#align-left");
    const textAlignCenter = document.querySelector("#align-center");
    const textAlignRight = document.querySelector("#align-right");
    const editBtn = document.querySelector("#edit");
    const writeNew = document.querySelector("#write-new");
    const addNew = document.querySelector("#add-new");
    const appName = document.querySelector("#app-name");
    /*-- font-family  --*/
    fontFamily.addEventListener("input", (event) => {
      event.stopPropagation();
      let fontFamilyVal = fontFamily.value.trim().toString();
      if (document.querySelector(".note-title")) {
        document.querySelector(".note-title").style.fontFamily = fontFamilyVal;
        document.querySelector(".note-body").style.fontFamily = fontFamilyVal;
      }
    });
    // font-list table
    fontList.addEventListener("mouseover", (event) => {
      event.stopPropagation();
      const eSrc = event.target;
      let eSrcVal;
      if (eSrc.getAttribute("class")) {
        return;
      } else {
        eSrcVal = eSrc.textContent;
      }
      fontFamily.value = eSrcVal;
      if (document.querySelector(".note-title")) {
        document.querySelector(".note-title").style.fontFamily = eSrcVal;
        document.querySelector(".note-body").style.fontFamily = eSrcVal;
      }
    });

    closeFontList.addEventListener("click", (event) => {
      event.stopPropagation();
      fontList.classList.toggle("js_display-block");
    });

    fontFamily.addEventListener("focus", (event) => {
      event.stopPropagation();
      fontList.classList.add("js_display-block");
    });
    fontFamily.addEventListener("blur", (event) => {
      event.stopPropagation();
      if (window.innerWidth > 900) {
        fontList.classList.remove("js_display-block");
      }
    });

    /*-- font-size --*/
    fontSize.addEventListener("input", (event) => {
      event.stopPropagation();
      let fontSizeVal = fontSize.value.trim();
      // If empty input
      !fontSizeVal ? (fontSizeVal = 16) : (fontSizeVal = fontSize.value.trim());

      if (document.querySelector(".note-title")) {
        document.querySelector(
          ".note-title"
        ).style.fontSize = `${fontSizeVal}px`;
        document.querySelector(
          ".note-body"
        ).style.fontSize = `${fontSizeVal}px`;
      }
    });

    /*-- font-color --*/

    // font-list table
    colorTable.addEventListener("mouseover", (event) => {
      event.stopPropagation();
      const eSrc = event.target;
      let eSrcVal;
      if (eSrc.getAttribute("class")) {
        return;
      } else {
        eSrcVal = eSrc.textContent;
      }
      fontColor.value = eSrcVal;
      if (document.querySelector(".note-title")) {
        document.querySelector(".note-title").style.color = eSrcVal;
        document.querySelector(".note-body").style.color = eSrcVal;
      }
    });

    closeColotTable.addEventListener("click", (event) => {
      event.stopPropagation();
      colorTable.classList.toggle("js_display-block");
    });

    fontColor.addEventListener("input", (event) => {
      event.preventDefault();
      let fontColorVal = fontColor.value.trim().toString();
      // if empty input
      !fontColorVal
        ? (fontColorVal = "#000000")
        : (fontColorVal = fontColor.value.trim().toString());

      if (document.querySelector(".note-title")) {
        document.querySelector(".note-title").style.color = fontColorVal;
        document.querySelector(".note-body").style.color = fontColorVal;
      }
    });

    fontColor.addEventListener("focus", (event) => {
      event.preventDefault();
      colorTable.classList.add("js_display-block");
    });

    fontColor.addEventListener("blur", (event) => {
      event.preventDefault();
      if (window.innerWidth > 900) {
        colorTable.classList.remove("js_display-block");
      }
    });

    /*-- font-bold  --*/

    fontBold.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (document.querySelector(".note-title")) {
        document.querySelector(".note-title").classList.toggle("bold");
        document.querySelector(".note-body").classList.toggle("bold");
      }
    });

    /*-- font-underline */
    fontUnderLine.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (document.querySelector(".note-title")) {
        document.querySelector(".note-title").classList.toggle("underline");
        document.querySelector(".note-body").classList.toggle("underline");
      }
    });

    /*-- font-italic --*/
    fontItalic.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (document.querySelector(".note-title")) {
        document.querySelector(".note-title").classList.toggle("italic");
        document.querySelector(".note-body").classList.toggle("italic");
      }
    });

    /*-- text-align left --*/
    textAlignLeft.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (document.querySelector(".note-title")) {
        const noteTitle = document.querySelector(".note-title");
        const noteBody = document.querySelector(".note-body");
        const title_body = [noteTitle, noteBody];
        title_body.forEach((noteInput) => {
          renderClassObj.renderClass(noteInput, "left", "center", "right");
        });
      }
    });

    /*-- text-align center --*/
    textAlignCenter.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (document.querySelector(".note-title")) {
        const noteTitle = document.querySelector(".note-title");
        const noteBody = document.querySelector(".note-body");
        const title_body = [noteTitle, noteBody];
        title_body.forEach((noteInput) => {
          renderClassObj.renderClass(noteInput, "center", "left", "right");
        });
      }
    });

    /*-- text-align right --*/
    textAlignRight.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (document.querySelector(".note-title")) {
        const noteTitle = document.querySelector(".note-title");
        const noteBody = document.querySelector(".note-body");
        const title_body = [noteTitle, noteBody];
        title_body.forEach((noteInput) => {
          renderClassObj.renderClass(noteInput, "right", "left", "center");
        });
      }
    });

    /*-- edit note --*/
    editBtn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      ToolComponent.enableForm();
    });

    /*-- write new note --*/
    writeNew.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      FormComponent.generateNewForm();
    });

    /*-- add new note form --*/
    addNew.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      FormComponent.generateNewForm();
    });

    /*-- app-name  --*/
    appName.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const appInfoTemplate = document.querySelector(".app-info-template");
      const appInfo = appInfoTemplate.content.cloneNode(true);
      const appInfoDiv = document.querySelector(".app-info-container");
      const returnBtn = appInfo.querySelector("button");
      appInfoDiv.classList.add("app-info-div");
      appInfoDiv.classList.toggle("display-flex");
      appInfoDiv.append(appInfo);

      returnBtn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        appInfoDiv.classList.toggle("display-flex");
        appInfoDiv.innerHTML = "";
      });
    });
    /*-- end of the addListenerToToolBtns()  method --*/
  }

  static enableForm() {
    let noteTitleFromBase = undefined;
    let noteBodyFromBase = undefined;
    let saveBtn = undefined;
    let closeBtn = undefined;
    try {
      noteTitleFromBase = document.querySelector(".note-title-b");
      noteBodyFromBase = document.querySelector(".note-body-b");
      saveBtn = document.querySelector(".save-note");
      closeBtn = document.querySelector(".close-note");
    } catch (error) {}

    if (noteTitleFromBase) {
      saveBtn.disabled = false;
      closeBtn.disabled = false;
      noteTitleFromBase.disabled = false;
      noteBodyFromBase.disabled = false;
      noteTitleFromBase.classList.remove("note-title-b");
      noteTitleFromBase.classList.add("note-title");
      noteBodyFromBase.classList.remove("note-body-b");
      noteBodyFromBase.classList.add("note-body");
      // noteTitleFromBase.className = "note-title";
      // noteBodyFromBase.className = "note-body";
      saveBtn.addEventListener("click", (event) => {
        event.preventDefault();
        FormComponent.saveToDatabase();
      });
      closeBtn.addEventListener("click", (event) => {
        event.preventDefault();
        FormComponent.cleanUpForm();
      });
    } else {
      alert("you have no note to edit, write new one");
      FormComponent.generateNewForm(); // my password for george brown college
      return;
    }
  }
}
