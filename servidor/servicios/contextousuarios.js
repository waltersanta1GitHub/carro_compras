const db = require('./basededatos');
const helper = require('../helper');
const config = require('../config');

async function getAllUsers(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * 
    FROM users LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}


async function create(usuario){
    const result = await db.query(
      `INSERT INTO users 
      ( username, password,created_at) 
      VALUES 
      (${usuario.username}, ${usuario.password}, ${usuario.created_at})`
    );
  
    let message = 'Error creando el usuario';
  
    if (result.affectedRows) {
      message = 'usuario creado correctamente';
    }
  
    return {message};
  }


  async function update(id, producto){
    const result = await db.query(
      `UPDATE users 
      SET username="${producto.username}", password=${producto.password}, created_at=${producto.created_at}     
      WHERE id=${id}` 
    );
  
    let message = 'Error actualizando el usuario';
  
    if (result.affectedRows) {
      message = 'usuario actualizado correctamente';
    }
  
    return {message};
  }



module.exports = {
  getMultiple: getAllUsers,
  create,
  update  
}