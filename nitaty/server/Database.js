const mongoose = require("mongoose");

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
}

module.exports = Database;
