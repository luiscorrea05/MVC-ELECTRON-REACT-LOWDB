const { getConnection } = require('./database.js')
const { v4 } = require("uuid")

//Ejemplos de modelos con lowdb
const getUser = async () =>  {
    const db =  getConnection();
    const user = await db.get('user').value();
    return user
};

const setUser = async () =>  {
    const db =  getConnection();
    let id = v4()
    await db.set(`user.${id}` , {id}).write();
};

const deleteUser = async (userId) => {
    const db = getConnection();
  
    // Verificar si el usuario existe antes de eliminarlo
    const user = db.get(`user.${userId}`).value();
    if (user) {
      // Eliminar el usuario
      db.unset(`user.${userId}`).write();
      console.log(`Usuario con ID ${userId} eliminado.`);
    } else {
      console.log(`No se encontró un usuario con ID ${userId}.`);
    }
  };
  
module.exports={
    getUser,
    setUser,
    deleteUser
}