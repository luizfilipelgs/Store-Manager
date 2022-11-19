const conn = require('./db/connections');

const getAllProducts = async () => {
  const [result] = await conn.execute('SELECT * FROM StoreManager.products ORDER BY id ASC');
  return { type: null, message: result };
};

const getProductID = async (id) => {
  const [result] = await conn.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  console.log(result);
  return { type: null, message: result };
};

module.exports = {
  getAllProducts,
  getProductID,
};
