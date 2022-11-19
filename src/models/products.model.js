const conn = require('./db/connections');

const getAllProducts = async () => {
  const [result] = await conn.execute('SELECT * FROM StoreManager.products ORDER BY id');
  return result;
};

const getProductID = async (id) => {
  const [result] = await conn.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  return { type: null, message: result };
};

module.exports = {
  getAllProducts,
  getProductID,
};
