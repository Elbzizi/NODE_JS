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
  db.addNote(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/notes", (req, res) => {
  const { title } = req.query;
  if (title) {
    db.getNoteByTitle(title)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    db.getNote()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
});
app.get("/notes/:id", (req, res) => {
  const { id } = req.params;
  db.getNoteById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send("Dosent exest id" + id);
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.put("/notes", (req, res) => {
  db.UpdateNote(req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send("Dosent exest id" + id);
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;
  db.DeleteNote(id)
    .then((data) => {
      if (!data) {
        res.status(404).send("Dosent exest id" + id);
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
const port = 3000;
app.listen(port, () => {
  console.log(`server has starded on port : ${port}...`);
  db.connect();
});
