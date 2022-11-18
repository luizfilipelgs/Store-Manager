const conn = require('./db/connections');

const getAll = async () => {
  const [result] = await conn.execute('SELECT * FROM StoreManager.products ORDER BY id ASC');
  console.log(result);
  return result;
};

const getById = async (id) => {
  const [result] = await conn.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  console.log(result);
  return result;
};

getById(2);

module.exports = {
  getAll,
  getById,
};
