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

const deleteProduct = async (id) => {
  const [result] = await conn.execute(`
  DELETE FROM StoreManager.products WHERE id = ?`, [id]);
  return result.affectedRows;
};

const updateProduct = async (name, id) => {
  const [result] = await conn.execute(`
  UPDATE products SET name = ? WHERE id = ?`, [name, id]);
  return result.affectedRows;
};

const searchProduct = async (name) => {
  const search = `%${name}%`;
  const [result] = await conn.execute(`
  SELECT * FROM products WHERE name LIKE ?`, [search]);
  return result;
};

module.exports = {
  getAllProducts,
  getProductID,
  addNewProduct,
  deleteProduct,
  updateProduct,
  searchProduct,
};
