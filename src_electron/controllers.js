const {ipcMain} = require('electron')
//exportar los modelos
const {deleteUser, getUser ,setUser} = require("./model.js")

const controllers = () => {
    //Eventos
    ipcMain.handle("/", async (event, data) => {
        return "MVC-ELECTRON-REACT-LOWDB"
    });
}

  module.exports = {
    controllers
  }