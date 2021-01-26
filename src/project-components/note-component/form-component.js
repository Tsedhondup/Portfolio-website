import { NavigationComponent } from "./Navigation-component.js";
// import { ToolComponent } from "../tool-component.js";

const currentNotesArray = [];
export class FormComponent {
  // static noteContainer = document.querySelector(".note_container"); rm for support
  // static currentNotesArray = []; // temporarily store current/unsave notes - rm for support

  static generateNewForm() {
    const noteContainer = document.querySelector(".note_container");
    const formTemplate = document.querySelector(".form-temlate");
    const newForm = formTemplate.content.cloneNode(true);

    // current note container : below nodes are present in DOM by default
    const noteQue = newForm.querySelector(".current-notes");
    const unsaveNoteContainer = noteQue.querySelector(".unsave-container");

    // pushing item into currentNotesArray base on node availability
    try {
      const noteTitle = document.querySelector(".note-title").value.trim();
      const noteBody = document.querySelector(".note-body").value.trim();

      if (noteTitle || noteBody) {
        const currentNoteObj = {
          title: noteTitle,
          body: noteBody,
          id: `CN${Math.random()}`,
        };
        currentNotesArray.push(currentNoteObj);
      } else {
        return;
      }
    } catch (error) {}

    // writing into current note container base on condition
    /* if required condition is not meet, current note container remains empty and unsave-containere is remove */
    if (currentNotesArray.length > 0) {
      currentNotesArray.forEach((note) => {
        const unsaveNote = document.createElement("p");
        const childOne = document.createElement("em");
        const childTwo = document.createElement("em");
        childOne.append("✕");
        childTwo.append(note.title);
        unsaveNote.append(childOne);
        unsaveNote.append(childTwo);
        unsaveNote.setAttribute("id", note.id);
        unsaveNoteContainer.append(unsaveNote);

        // binding listener to unsaveNote children
        childOne.addEventListener("click", (event) => {
          event.stopPropagation();
          FormComponent.removeFromNoteBox(event);
        });
        childTwo.addEventListener("click", (event) => {
          event.stopPropagation();
          FormComponent.getFromNoteBox(event);
        });
      });
    } else if (currentNotesArray.length < 0) {
      unsaveNoteContainer.remove();
    }
    // Root clean up of note parent note container
    noteContainer.innerHTML = "";
    noteContainer.append(newForm);

    // following nodes are generates by javascript, thus might not be available in defualt DOM
    // They are generate dynamically on javascript code execution : expecting error if treated as regular DOM nodes

    try {
      const saveBtn = document.querySelector(".save-note");
      const closeBtn = document.querySelector(".close-note");
      // update UI and database
      saveBtn.addEventListener("click", (event) => {
        event.preventDefault();
        FormComponent.saveToDatabase();
      });
      closeBtn.addEventListener("click", (event) => {
        event.preventDefault();
        FormComponent.cleanUpForm();
      });
    } catch (error) {}

    NavigationComponent.addListenerToDeleteBtn();
  }

  //--------------------------------------------------------------------------------

  static dataFromBase(id) {
    // pushing data from current notes
    try {
      const noteTitle = document.querySelector(".note-title").value.trim();
      const noteBody = document.querySelector(".note-body").value.trim();

      if (noteTitle || noteBody) {
        const currentNoteObj = {
          title: noteTitle,
          body: noteBody,
          id: `CN${Math.random()}`,
        };
        currentNotesArray.push(currentNoteObj);
      }
    } catch (error) {}

    // getting data from localStorage
    const noteIds = [...Object.keys(localStorage)]; // all the ids
    let noteTitle;
    let noteBody;
    let noteDate;
    let noteClassList = [];
    let noteStyleArray = [];

    noteIds.map((noteId) => {
      if (id === noteId) {
        // read data from localStorage
        const noteData = JSON.parse(localStorage.getItem(noteId));
        noteTitle = noteData.title;
        noteBody = noteData.body;
        noteDate = noteData.date;
        // loop through noteData classlist properties
        for (const noteClass of noteData.classList) {
          noteClassList.push(noteClass);
        }

        for (const noteStyle of noteData.styles) {
          noteStyleArray.push(noteStyle);
        }
      }
    });

    // prepare node elements for data insertion
    const noteContainer = document.querySelector(".note_container");
    const formTemplate = document.querySelector(".form-template-two");

    // Clone the new form
    const newForm = formTemplate.content.cloneNode(true);
    // get children
    const titleTag = newForm.querySelector(".note-title-b");
    const bodyTag = newForm.querySelector(".note-body-b");
    const dateTag = newForm.querySelector(".date-time");
    const currentNotes = newForm.querySelector(".current-notes");
    const unsaveNoteContainer = currentNotes.querySelector(".unsave-container");

    // adding respective classes to note title and note body

    for (const classes of noteClassList) {
      if (classes === "note-title" || classes === "note-body") {
        continue;
      }
      titleTag.classList.add(classes);
      bodyTag.classList.add(classes);
    }

    // adding respective styles
    noteStyleArray.map((styleObj) => {
      if ((styleObj.styleName = "font-family")) {
        titleTag.style.fontFamily = `${styleObj.styleValue}`;
        bodyTag.style.fontFamily = `${styleObj.styleValue}`;
      }
      if ((styleObj.styleName = "font-size")) {
        titleTag.style.fontSize = `${styleObj.styleValue}px`;
        bodyTag.style.fontSize = `${styleObj.styleValue}px`;
      }
      if ((styleObj.styleName = "color")) {
        titleTag.style.color = styleObj.styleValue;
        bodyTag.style.color = styleObj.styleValue;
      }
    });

    // insert data into respective node elements
    titleTag.value = noteTitle;
    bodyTag.value = noteBody;

    // writing into current note container base on condition
    /* required condition is not meet, current note container remains empty and unsave-containere is remove */
    if (currentNotesArray.length > 0) {
      currentNotesArray.forEach((note) => {
        const unsaveNote = document.createElement("p");
        const childOne = document.createElement("em");
        const childTwo = document.createElement("em");
        childOne.append("✕");
        childTwo.append(note.title);
        unsaveNote.append(childOne);
        unsaveNote.append(childTwo);
        unsaveNote.setAttribute("id", note.id);
        unsaveNoteContainer.append(unsaveNote);

        // binding listener to unsaveNote children
        childOne.addEventListener("click", (event) => {
          event.stopPropagation();
          FormComponent.removeFromNoteBox(event);
        });
        childTwo.addEventListener("click", (event) => {
          event.stopPropagation();
          FormComponent.getFromNoteBox(event);
        });
      });
    } else if (currentNotesArray.length < 0) {
      unsaveNoteContainer.remove();
    }

    // clean up note container
    noteContainer.innerHTML = "";

    // update not container
    noteContainer.append(newForm);
  }
  //--------------------------------------------------------------------------------

  static saveToDatabase() {
    // Get all the ids
    const noteIds = [...Object.keys(localStorage)];
    // get the note  values
    let noteTitle = document.querySelector(".note-title").value.trim();
    let noteBody = document.querySelector(".note-body").value.trim();
    // get all the classes from the note title
    const noteTitleClass = Array.from(
      document.querySelector(".note-title").classList
    );

    // get all the styles - font-family, font-size, font-color
    const fontFamilyVal = document.querySelector("#font-family").value.trim();
    const fontSizeVal = document.querySelector("#font-size").value.trim();
    const fontColorVal = document.querySelector("#font-color").value.trim();

    const styleObjects = [
      {
        styleName: "font-family",
        styleValue: fontFamilyVal.toString(),
      },
      {
        styleName: "font-size",
        styleValue: fontSizeVal,
      },
      {
        styleName: "color",
        styleValue: fontColorVal.toString(),
      },
    ];

    // saving into data base
    if (noteTitle) {
      if (noteIds.length > 6) {
        alert(
          "Your don't have enough space for storing notes, try delete unnecassary notes"
        );
        return;
      } else {
        let noteId = `ND${Math.random()}`;
        let newDate = new Date();
        const notObj = {
          title: noteTitle,
          body: noteBody,
          date: `${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()}`,
          classList: noteTitleClass,
          styles: styleObjects,
        };
        localStorage.setItem(noteId, JSON.stringify(notObj)); // add too database
        NavigationComponent.addToNoteList(noteTitle, noteId); // add new note to note list
      }
    } else {
      alert("note title is missing");
      document.querySelector(".note-title").focus();
    }

    // updating total notess UI
    const noteTotalNumber = document.querySelector(".show-side-note-list em");
    const noteData = [...Object.keys(localStorage)];
    let totalSaveNotes = noteData.length;
    if (!totalSaveNotes) {
      totalSaveNotes = 0;
    }
    noteTotalNumber.textContent = totalSaveNotes;
  }
  //--------------------------------------------------------------------------------
  static generateFormTwo(titleQ, bodyQ) {
    // const titleVal = titleQ;
    // const bodyVal = bodyQ;

    // rendering the note container
    const noteContainer = document.querySelector(".note_container");
    const formTemplate = document.querySelector(".form-temlate");
    const newForm = formTemplate.content.cloneNode(true);

    const titleTag = newForm.querySelector(".note-title");
    const bodyTag = newForm.querySelector(".note-body");
    titleTag.value = titleQ;
    bodyTag.value = bodyQ;
    // current note container : below nodes are present in DOM by default
    const noteQue = newForm.querySelector(".current-notes");
    const unsaveNoteContainer = noteQue.querySelector(".unsave-container");

    if (currentNotesArray.length > 0) {
      currentNotesArray.forEach((note) => {
        const unsaveNote = document.createElement("p");
        const childOne = document.createElement("em");
        const childTwo = document.createElement("em");
        childOne.append("✕");
        childTwo.append(note.title);
        unsaveNote.append(childOne);
        unsaveNote.append(childTwo);
        unsaveNote.setAttribute("id", note.id);
        unsaveNoteContainer.append(unsaveNote);

        // binding listener to unsaveNote children
        childOne.addEventListener("click", (event) => {
          event.stopPropagation();
          FormComponent.removeFromNoteBox(event);
        });
        childTwo.addEventListener("click", (event) => {
          event.stopPropagation();
          FormComponent.getFromNoteBox(event);
        });
      });
    } else if (currentNotesArray.length < 0) {
      unsaveNoteContainer.remove();
    }

    // binding listener to close-note and save-note buttons
    newForm.querySelector(".save-note").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      FormComponent.saveToDatabase();
    });
    newForm.querySelector(".close-note").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      FormComponent.cleanUpForm();
    });
    // note-container clean up
    noteContainer.innerHTML = "";
    noteContainer.append(newForm);
  }
  //--------------------------------------------------------------------------------

  static getFromNoteBox(event) {
    /*--- getting node from targeted notebox ---*/
    const eSrc = event.target;
    const closestParent = eSrc.closest("p");
    const closestParentId = closestParent.id;

    // get note from array - ready to append to noteBox
    let noteTitleQ;
    let noteBodyQ;
    currentNotesArray.forEach((noteObj) => {
      if (closestParentId === noteObj.id) {
        noteTitleQ = noteObj.title;
        noteBodyQ = noteObj.body;
      }
    });
    if (!noteTitleQ) {
      noteTitleQ = "title";
    }
    if (!noteBodyQ) {
      noteBodyQ = "Note Daily";
    }
    /*--- getting notes from form if available - ready to push into currentNoteArray ---*/

    if (document.querySelector(".note-title")) {
      // get the form elements - title & body
      const noteTitle = document.querySelector(".note-title");
      const noteBody = document.querySelector(".note-body");
      // title & body values
      let noteTitleVal = document.querySelector(".note-title").value.trim();
      let noteBodyVal = document.querySelector(".note-body").value.trim();

      // update with th value from note box
      noteTitle.value = noteTitleQ;
      noteBody.value = noteBodyQ;
      // if title or body is a thing - store in object and push into current note array
      if (noteTitleVal || noteBodyVal) {
        const noteObject = {
          title: noteTitleVal,
          body: noteBodyVal,
          id: `CN${Math.random()}`,
        };
        currentNotesArray.push(noteObject);

        // if note title is is present then collected datas are render into note box

        const unsaveNoteContainer = document.querySelector(".unsave-container");
        const unsaveNote = document.createElement("p");
        const childOne = document.createElement("em");
        const childTwo = document.createElement("em");
        childOne.append("✕");
        childTwo.append(noteObject.title);
        unsaveNote.append(childOne);
        unsaveNote.append(childTwo);
        unsaveNote.setAttribute("id", noteObject.id);
        unsaveNoteContainer.append(unsaveNote);
        // binding listener to unsaveNote children
        childOne.addEventListener("click", (event) => {
          event.stopPropagation();
          FormComponent.removeFromNoteBox(event);
        });
        childTwo.addEventListener("click", (event) => {
          event.stopPropagation();
          FormComponent.getFromNoteBox(event);
        });
      }
    } else {
      // remove the clicked note box
      FormComponent.removeFromNoteBox(event);
      FormComponent.generateFormTwo(noteTitleQ, noteBodyQ);
    }
    // remove the clicked note box
    FormComponent.removeFromNoteBox(event);
  }
  //--------------------------------------------------------------------------------

  static removeFromNoteBox(event) {
    const eSrc = event.target;
    const closestParent = eSrc.closest("p");
    const closestParentId = closestParent.id;
    // memory cleaning
    currentNotesArray.forEach((noteObj, index) => {
      if (closestParentId === noteObj.id) {
        currentNotesArray.splice(index, 1);
      }
    });
    // document.removeChild(closestParent);
    closestParent.remove();
  }

  //--------------------------------------------------------------------------------
  static cleanUpForm() {
    if (currentNotesArray.length > 0) {
      const noteTitle = document.querySelector(".note-title");
      const noteBody = document.querySelector(".note-body");
      let chosenObjId;
      /*--- replace title and body values ---*/
      currentNotesArray.map((noteObj, index) => {
        if (index === 0) {
          noteTitle.value = noteObj.title;
          noteBody.value = noteObj.body;
          chosenObjId = noteObj.id;
          /*-- remove tne first item from array--*/
          currentNotesArray.splice(index, 1);
        }
      });
      /*-- remove note box from the current notes --*/
      const noteBox = document.querySelectorAll(".unsave-container p");
      noteBox.forEach((item) => {
        if (item.id === chosenObjId) {
          item.remove();
        }
      });
    } else {
      document.querySelector(".note_container").innerHTML = "";
    }
  }
}
