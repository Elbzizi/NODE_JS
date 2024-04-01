function updateNotesTable(titlesearch) {
  table = document.getElementById("notes-table");
  row = table.rows.length;
  while (--row) {
    table.deleteRow(row);
  }
  GetNotes(titlesearch).then((data) => {
    data.forEach((ele) => {
      row = table.insertRow(1);
      cell1 = row.insertCell(0);
      cell2 = row.insertCell(1);
      cell3 = row.insertCell(2);
      cell4 = row.insertCell(3);
      cell1.textContent = ele["title"];
      cell2.textContent = ele["content"];
      cell3.textContent = ele["updatedDate"];
      cell4.innerHTML = ` <a onClick="editModale('${ele["_id"]}')" href="#" ><img src="./images/edit.png" width="22px"/></a>
      <a onClick="confirmedDeleteNote('${ele["_id"]}')" href="#"><img src="./images/delete.png" width="22 px"/></a> `;
    });
  });
}
// ===================================

function searchNotes() {
  title = document.getElementById("searchInput").value;
  updateNotesTable(title);
}

// ===================================

function confirmedDeleteNote(id) {
  var action = confirm(`are you sure delete note : ${id}`);
  if (action) {
    DleteNote(id).then(() => {
      updateNotesTable();
    });
  } else {
    return false;
  }
}


//===============add note to data==============

function saveNewNote() {
  title = document.getElementById("addTitle").value;
  content = document.getElementById("addContent").value;
  data = { title: title, content: content };
  addNote(data)
    .then((res) => {
      if (res.ok) {
        updateNotesTable();
        clearModale();
        modal.style.display = "none";
      } else {
        res.text().then((err) => {
          document.getElementById("addError").innerHTML = err;
        });
      }
    })
    .catch((err) => {
      document.getElementById("addError").innerHTML = err;
    });
}

//===============save Edit Note to data==============
function saveEditNote() {
  let data = {
    _id: ModalEdit.getAttribute("noteid"),
    title: document.getElementById("editTitle").value,
    content: document.getElementById("editContent").value,
  };
  UpdateNote(data)
    .then((res) => {
      if (res.ok) {
        updateNotesTable();
        ModalEdit.style.display = "none";
      } else {
        res.text().then((err) => {
          document.getElementById("editError").innerHTML = err;
        });
      }
    })
    .catch((err) => {
      document.getElementById("editError").innerHTML = err;
    });
}
