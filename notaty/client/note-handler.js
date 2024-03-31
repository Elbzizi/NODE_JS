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
    });
  });
}
// ===================================
