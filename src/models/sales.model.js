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
  console.log(insertId);
  return insertId;
};

const registreSales = async (sales) => {
  const idSale = await addSales();

  const insertedSales = sales.map(({ productId, quantity }) => {
    const [result] = await conn.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (default)',
      [idSale, productId, quantity],
    );
    return result
  });

  await Promise.all(insertedSales);

  return {
    id: idSale,
    itemsSold: sales,
  }

};

module.exports = {
  /* getAllProducts,
  getProductID, */
  registreSales,
};