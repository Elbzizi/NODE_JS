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
  res.send(true);
});

const port = 3000;
app.listen(port, () => {
  console.log(`server has starded on port : ${port}...`);
});
