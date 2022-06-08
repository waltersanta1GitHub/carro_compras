const db = require('./basededatos');
const helper = require('../helper');
const config = require('../config');

async function getAllProducts(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * 
    FROM products LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}


async function create(producto){
    const result = await db.query(
      `INSERT INTO products 
      ( name, desc, price, rrp, quantity, img, date_added) 
      VALUES 
      (${producto.name}, ${producto.desc}, ${producto.price}, ${producto.rrp}, ${producto.quantity}, ${producto.img}, ${producto.date_added})`
    );
  
    let message = 'Error creando el producto';
  
    if (result.affectedRows) {
      message = 'producto creado correctamente';
    }
  
    return {message};
  }


  async function update(id, producto){
    const result = await db.query(
      `UPDATE products 
      SET name="${producto.name}", desc=${producto.desc}, price=${producto.price}, 
      rrp=${producto.rrp}, quantity=${producto.quantity}, img=${producto.img}, date_added=${producto.date_added} 
      WHERE id=${id}` 
    );
  
    let message = 'Error actualizando el producto';
  
    if (result.affectedRows) {
      message = 'producto actualizado correctamente';
    }
  
    return {message};
  }


  async function remove(id){
    const result = await db.query(
      `DELETE FROM products WHERE id=${id}`
    );
  
    let message = 'Error eliminando el producto';
  
    if (result.affectedRows) {
      message = ' producto eliminado correctamente';
    }
  
    return {message};
  }


module.exports = {
  getMultiple: getAllProducts,
  create,
  update,
  remove
}