// index.js
const {  CreateWindow } = require('./main.js')
const {  createConnection } = require('./database.js')
const { app } = require('electron')
const { controllers } = require("./controllers.js")

//Model
controllers()

//iniciar app
app.whenReady().then(() => {
  CreateWindow();
  createConnection();
});



