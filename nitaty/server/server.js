const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
let notes = [];

app.post("/notes", (req, res) => {
  const body = req.body;
  console.log(body);
  notes.push(body.title);
  console.log("notes: " + notes);
  res.send(true);
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

const port = 3000;
app.listen(port, () => {
  console.log(`server has starded on port : ${port}...`);
});
