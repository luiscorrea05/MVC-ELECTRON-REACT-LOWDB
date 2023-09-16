// main.mjs (asegúrate de que el archivo tenga extensión .mjs)
const {  BrowserWindow } = require('electron')
const path = require('path')

let window;

const CreateWindow = () => {
  window = new BrowserWindow({
    width: 800,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
      devTools: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  window.setMinimumSize(1200, 650);
  //window.loadFile("src_electron/App/index.html");
  //Views
  window.loadURL('http://localhost:5173');

  window.webContents.openDevTools();

  // Ocultar la barra de menú
  window.setMenu(null);
};

module.exports={
  CreateWindow
}