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
      cell4.innerHTML = ` <a href="#" ><img src="./images/edit.png" width="22px"/></a>
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
//=============================
function openAddModal() {
  document.getElementById("addNoteModal").style.display="block";
}
