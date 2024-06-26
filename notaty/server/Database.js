const mongoose = require("mongoose");
const Note = require("./Schema/note");
class Database {
  constructor() {
    // this.url = "mongodb://localhost:27017/notaty";
    this.url =process.env.MONGODB_URL ||
      "mongodb+srv://admin:admin123@cluster0.b5gesb7.mongodb.net/notaty?retryWrites=true&w=majority&appName=Cluster0";
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
      Note.find()
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
  UpdateNote(note) {
    return new Promise((resolve, reject) => {
      note["updatedDate"] = new Date();
      Note.findByIdAndUpdate(note["_id"], note)
        .then((data) => {
          // console.log(data);
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  }
  DeleteNote(id) {
    return new Promise((resolve, reject) => {
      Note.findByIdAndDelete(id)
        .then((data) => {
          console.log(data);
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  }
  getNoteByTitle(title) {
    return new Promise((resolve, reject) => {
      const query = { title: { $regex: new RegExp(title, "i") } };
      Note.find(query)
        .then((data) => {
          console.log(data);
          resolve(data);
        })
        .catch((err) => reject(err));
    });
  }
}

module.exports = Database;
