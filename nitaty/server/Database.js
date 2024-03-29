const mongoose = require("mongoose");
const Note = require("./Schema/note");
class Database {
  constructor() {
    this.url = "mongodb://localhost:27017/notaty";
  }

  connect() {
    mongoose
      .connect(this.url)
      .then(() => {
        console.log("Connexion à la base de données réussie");
      })
      .catch((err) => {
        console.log("Erreur de connexion à la base de données : " + err);
      });
  }
  addNote(note) {
    return new Promise((resolve, reject) => {
      note["createdDate"] = new Date();
      note["updatedDate"] = new Date();
      let newNote = new Note(note);
      newNote
        .save()
        .then((doc) => {
          resolve(doc);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  getNote() {
    return new Promise((resolve, reject) => {
      Note.find({})
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  getNoteById(id) {
    return new Promise((resolve, reject) => {
      // Note.find({ id: id })
      Note.findById(id)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = Database;
