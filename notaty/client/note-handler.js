function updateNotesTable() {
  table = document.getElementById("notes-table");
  GetNotes().then((data) => {
    data.forEach((ele) => {
      tr = document.createElement("tr");
      td1 = document.createElement("td");
      td2 = document.createElement("td");
      td3 = document.createElement("td");
      td4 = document.createElement("td");
      td1.appendChilde(document.createTextNode(ele["title"]));
      td2.appendChilde(document.createTextNode(ele["content"]));
      td3.appendChilde(document.createTextNode(ele["updateDate"]));
      //   td4.appendChilde(document.createTextNode(ele));
      tr.appendChilde(td1);
      tr.appendChilde(td2);
      tr.appendChilde(td3);
      table.appendChilde(tr);
    });
  });
}
// ===================================