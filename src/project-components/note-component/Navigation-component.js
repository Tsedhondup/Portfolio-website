import { FormComponent } from "./form-component.js";
export class NavigationComponent {
  // rm for support
  // static ASIDE_MENU = document.querySelector(".aside_menu");
  // static SHOW_MENU_BUTTON = document.getElementById("show_menu");
  // static HIDE_MENU_BUTTON = document.getElementById("hide_menu");
  // static SEARCH_ICON = document.getElementById("search_icon");
  // static SEARCH_FIELD = document.getElementById("search_field");
  // static NOTES_CARD = document.getElementById("note_cart");
  // static noteItem = document.querySelectorAll(".note-item");

  // delete note from both UI and database
  static deleteRootNote(event) {
    const noteData = [...Object.keys(localStorage)];
    const eRc = event.target;
    const closestParent = eRc.closest("li");
    const parentId = closestParent.id;
    noteData.map((ID) => {
      if (ID === parentId) {
        localStorage.removeItem(ID);
        closestParent.remove();
      }
    });

    // updating total notess UI
    const noteTotalNumber = document.querySelector(".show-side-note-list em");
    let totalSaveNotes = noteData.length;
    if (!totalSaveNotes) {
      totalSaveNotes = 0;
    }
    noteTotalNumber.textContent = totalSaveNotes;
  }

  // adding listener to delete buttons and note item itself
  static addListenerToDeleteBtn() {
    const noteItem = document.querySelectorAll(".note-item");
    const deleteBtn = document.querySelectorAll(".note-item em");

    // bound event has call to getFormData() method imported from the form component
    noteItem.forEach((item) => {
      item.addEventListener("click", (event) => {
        const itemId = item.id;
        event.stopPropagation();
        event.preventDefault();
        const asideMenu = document.querySelector(".aside_menu");
        asideMenu.classList.toggle("left-0");
        FormComponent.dataFromBase(itemId);
      });
    });

    // bound event has call to deleteRooNote method
    deleteBtn.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.stopPropagation();
        NavigationComponent.deleteRootNote(event); // call back
      });
    });
  }

  // adding form data to side note list and simultaneously adding listener to delete buttons
  static addToNoteList(noteTitle, noteId) {
    const notesList = document.querySelector(".notes-list");
    let newList = document.createElement("li");
    let newEm = document.createElement("em");
    newEm.append("✕");
    newList.append(noteTitle);
    newList.append(newEm);
    newList.setAttribute("id", noteId);
    newList.setAttribute("class", "note-item");
    notesList.append(newList);
    // now that the nodes are available we can add event listener to delete button
    this.addListenerToDeleteBtn();
  }
}
