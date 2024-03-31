function updateNotesTable() {
  table = document.getElementById("notes-table");
  GetNotes().then((data) => {
    data.forEach((ele) => {
      // tr = document.createElement("tr");
      // td1 = document.createElement("td");
      // td2 = document.createElement("td");
      // td3 = document.createElement("td");
      // td4 = document.createElement("td");
      // td1.appendChild(document.createTextNode(ele["title"]));
      // td2.appendChild(document.createTextNode(ele["content"]));
      // td3.appendChild(document.createTextNode(ele["updatedDate"]));
      // tr.appendChild(td1);
      // tr.appendChild(td2);
      // tr.appendChild(td3);
      // tr.appendChild(td4);
      // table.appendChild(tr);
      row = table.insertRow(1);
      cell1 = row.insertCell(0);
      cell2 = row.insertCell(1);
      cell3 = row.insertCell(2);
      cell4 = row.insertCell(3);
      cell1.textContent = ele["title"];
      cell2.textContent = ele["content"];
      cell3.textContent = ele["updatedDate"];
      cell4.innerHTML = ` <a href="#" ><img src="./images/edit.png" width="22px"/></a>
      <a href="#" ><img src="./images/delete.png" width="22 px"/></a> `;
    });
  });
}
// ===================================
