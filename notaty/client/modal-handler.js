//===============clear Modale==============
function clearModale() {
  document.getElementById("addTitle").value = "";
  document.getElementById("addContent").value = "";
  document.getElementById("addError").innerHTML = "";
}

//===============Modal==============
function openAddModal() {
  clearModale();
  modal = document.getElementById("addNoteModal");
  modal.style.display = "block";
  closeBtn = document.querySelector("#closeAdd");
  Cancel = document.querySelector("#cancelAddNoteBtn");
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };
  Cancel.onclick = () => {
    modal.style.display = "none";
  };
}

//===============update note to data==============
ModalEdit = document.getElementById("editNoteModal");
function editModale(id) {
  closeBtn = document.querySelector("#closeEdit");
  Cancel = document.querySelector("#cancelEditNoteBtn");
  closeBtn.onclick = () => {
    ModalEdit.style.display = "none";
  };
  Cancel.onclick = () => {
    ModalEdit.style.display = "none";
  };
  GetNoteById(id).then((data) => {
    document.getElementById("editTitle").value = data.title;
    document.getElementById("editContent").value = data.content;
    let ID = document.createAttribute("noteid");
    ID.value = data._id;
    ModalEdit.setAttributeNode(ID);
    ModalEdit.style.display = "block";
  });
}
