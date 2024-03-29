const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Database = require("./Database");
const app = express();
const db = new Database();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/notes", (req, res) => {
  const body = req.body;
  console.log(body);
  db.addNote(body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

const port = 3000;
app.listen(port, () => {
  console.log(`server has starded on port : ${port}...`);
  db.connect();
});
