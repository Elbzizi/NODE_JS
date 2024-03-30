baseUrl = "http://localhost:3000";

async function addNote(data) {
  const response = await fetch(`${baseUrl}/notes`, {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body:JSON.stringify(data)
  });
  return response;
}
