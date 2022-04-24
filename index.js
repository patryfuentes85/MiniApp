const express = require("express");
const multer = require("multer");
require("dotenv").config();
const routes = require("./routes/routes");
const functions = require("firebase-functions")
const firebase = require ("./utils/FirebaseConfig");
require("path");
require("./utils/dbMongo");
require("Mongodb");

const app = express(); // Inicializa el servidor. App es un bjeto que representa el server
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));

app.use("/", routes);

const upload = multer({
  storage: multer.memoryStorage(),
});

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    res.status(400).send("Error: No files found");
  } else {
    const blob = firebase.bucket.file(req.file.file);

    const blobWriter = blob.createWriteStream({
      metadata: {
        contentType: req.file.mimetype,
      },
    });

    blobWriter.on("error", (err) => {
      console.log(err);
    });

    blobWriter.on("finish", () => {
      res.status(200).send("File uploaded.");
    });

    blobWriter.end(req.file.buffer);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
