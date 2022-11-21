const conn = require('./db/connections');

/* const getAllProducts = async () => {
  const [result] = await conn.execute('SELECT * FROM StoreManager.products ORDER BY id');
  return result;
};

const getProductID = async (id) => {
  const [[result]] = await conn.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  return result;
}; */

const addNewSales = async () => {
  const [{ insertId }] = await conn.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );
  console.log(insertId);
  return insertId;
};
addNewSales();

const registreSales = async () => {
  
};

module.exports = {
  /* getAllProducts,
  getProductID, */
  registreSales,
};
