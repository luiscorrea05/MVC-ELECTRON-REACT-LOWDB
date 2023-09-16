//La version de LowDB es la 1.0.0 no subir de esta.
//Ya que electron solo soporta type commonjs
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const path = require("path");
const fs = require('fs');
const { execSync } = require('child_process');

let db;

async function createConnection() {
  const serverRoot = execSync('echo %SystemDrive%\\', { encoding: 'utf-8' }).trim();
  //const serverRoot = process.cwd();
  const folder = path.join(serverRoot, "./DataBase");
  if (!fs.existsSync(folder)) {
    // Si no existe, crear la carpeta
    fs.mkdirSync(folder);
  }
  const file = path.join(serverRoot, "./DataBase/db.json");
  const adapter = new FileSync(file)
  db = low(adapter)
  // Use JSON file for storage
  db.defaults({ user: {} , config: {}})
  .write()
  // Write db.data content to db.json
  console.log("Database en linea");
}

function getConnection() {
  return db
}

module.exports = {
  createConnection,
  getConnection
};
