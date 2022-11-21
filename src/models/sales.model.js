const conn = require('./db/connections');

const getAllProducts = async () => {
  const [result] = await conn.execute('SELECT * FROM StoreManager.products ORDER BY id');
  return result;
};

const getProductID = async (id) => {
  const [[result]] = await conn.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  return result;
};

const addNewProduct = async (name) => {
  const [{ insertId }] = await conn.execute('INSERT INTO StoreManager.products (name) VALUES (?)',
    [name]);
  return insertId;
};

module.exports = {
  getAllProducts,
  getProductID,
  addNewProduct,
};
