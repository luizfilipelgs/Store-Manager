const conn = require('./db/connections');

/* const getAllProducts = async () => {
  const [result] = await conn.execute('SELECT * FROM StoreManager.products ORDER BY id');
  return result;
};

const getProductID = async (id) => {
  const [[result]] = await conn.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  return result;
}; */

const addSales = async () => {
  const [{ insertId }] = await conn.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (default)',
  );
  return insertId;
};

const registreSales = async (idSale, productId, quantity) => {
  await conn.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?,?,?)',
    [idSale, productId, quantity],
  );
};

module.exports = {
  /* getAllProducts,
  getProductID, */
  addSales,
  registreSales,
};
