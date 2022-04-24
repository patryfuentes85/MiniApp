const mongoose = require("mongoose");

/* const url = process.env.URL_MONGO; */
mongoose.connect("mongodb+srv://patryFuentes:Esamisma2022@cluster0.jm2bo.mongodb.net/mini-app?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on("error", error => console.log(error));
db.once('open', () => console.log('Conexión con BD establecida'))

module.exports = mongoose;