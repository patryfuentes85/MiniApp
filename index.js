require('dotenv').config();
const express = require('express')
const multer = require('multer')
const firebase = require('./utils/FirebaseConfig')
const routes = require('./routes/routes')
require('path');
require('./utils/dbMongo');
require('Mongodb');


const app = express() // Inicializa el servidor. App es un bjeto que representa el server
const port = 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json({extended: false}))
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));


app.use('/',routes)


/* app.post('/upload', (req, res) => {
    console.log("File upload API")
})

const upload = multer({
    storage: multer.memoryStorage()
})
app.use(upload.single()) */

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})