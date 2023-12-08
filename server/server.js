// Impporterar express
const express = require("express");

// Skapar en webbserver
const server = express();

// Sätter inställningar för servern
server
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });

  server.listen(3000, () => "Merry Christmas! The server is running on http://localhost/3000.");

  server.get("/users", (req, res) => {});