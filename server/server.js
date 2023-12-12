// Impporterar express och sqlite3.
const express = require("express");
const sqlite3 = require("sqlite3").verbose();

// Skapar en webbserver.
const server = express();

// Sätter inställningar för servern.
server
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });

  // Öppnar servern på porten 3000.
  server.listen(3000, () => "Merry Christmas! The server is running on http://localhost:3000.");

// get-metod för att ta serverns ska kunna ta emot förfrågningar mot databasen.
  server.get("/users", (req, res) => {
    // Öppnar upp en koppling till databasen.
    let db = new sqlite3.Database("./gik339-labb2.db")
    db.all(`SELECT * FROM USERS`, function(err, rows){
      if(err){
        return console.log(err.message);
      }
      res.send(rows);
    });
  });