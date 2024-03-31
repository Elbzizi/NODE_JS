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
      <a href="#"><img src="./images/delete.png" width="22 px"/></a> `;
    });
  });
}
// ===================================

function searchNotes() {
  title = document.getElementById("searchInput").value;
  updateNotesTable(title);
}
