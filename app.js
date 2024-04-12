const addNoteBtnEl = document.querySelector("#btn");
const mainContainerEl = document.querySelector(".container");

const addNote = () => {
  // main container

  const noteContainerEl = document.createElement("div");
  noteContainerEl.classList.add("note-container");
  mainContainerEl.prepend(noteContainerEl);

  // note container

  const noteContent = document.createElement("textarea");
  noteContent.classList.add("note");
  noteContent.name = "note";
  noteContent.placeholder = "ADD A NOTE";
  noteContent.cols = "30";
  noteContent.rows = "10";
  noteContainerEl.appendChild(noteContent);

  // delete note function

  const deleteNoteEl = document.createElement("button");
  deleteNoteEl.classList.add("cancel-btn");
  deleteNoteEl.innerHTML = "&#10005;";
  noteContainerEl.appendChild(deleteNoteEl);

  //actions button container

  const actionBtnContainerEl = document.createElement("div");
  actionBtnContainerEl.classList.add("action-btn");
  noteContainerEl.appendChild(actionBtnContainerEl);

  //edit button inside actions btn

  const editBtnEl = document.createElement("button");
  editBtnEl.classList.add("edit-btn");
  editBtnEl.innerText = "EDIT";
  actionBtnContainerEl.appendChild(editBtnEl);

  //save button inside actions btn

  const saveBtnEl = document.createElement("button");
  saveBtnEl.classList.add("save-btn");
  saveBtnEl.innerText = "SAVE";
  actionBtnContainerEl.appendChild(saveBtnEl);

  //note save function

  saveBtnEl.addEventListener("click", () => {
    noteContent.readOnly = true;
  });

  //note edit function

  editBtnEl.addEventListener("click", () => {
    noteContent.readOnly = false;
    noteContent.focus();
  });

  //note delete function

  deleteNoteEl.addEventListener("click", () => {
    alert("Do you want to delete the note");
    mainContainerEl.removeChild(noteContainerEl);
  });
};

addNoteBtnEl.addEventListener("click", addNote);
