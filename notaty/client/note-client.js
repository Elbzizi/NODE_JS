baseUrl = "http://localhost:3000";

async function addNote(data) {
  const response = await fetch(`${baseUrl}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response;
}
async function UpdateNote(data) {
  const response = await fetch(`${baseUrl}/notes`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response;
}
async function DleteNote(id) {
  const response = await fetch(`${baseUrl}/notes/${id}`, {
    method: "DELETE",
  });
  return response;
}
