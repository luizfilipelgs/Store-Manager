const conn = require('./db/connections');

const getAllSales = async () => {
  const [result] = await conn.execute(`
    SELECT sale_id as saleId,
    date,
    product_id as productId,
    quantity
    FROM sales_products as SP
    INNER JOIN sales as S
    ON SP.sale_id = S.id
    ORDER BY SP.sale_id`);
  return result;
};

const getSaleID = async (id) => {
  const [result] = await conn.execute(`
    SELECT date,
    product_id as productId,
    quantity
    FROM sales_products as SP
    INNER JOIN sales as S
    ON SP.sale_id = S.id
    WHERE sale_id = ?
    ORDER BY SP.sale_id, SP.product_id`, [id]);
  return result;
};

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

const deleteSale = async (id) => {
  await conn.execute('DELETE FROM sales WHERE id = ?', [id]);
};

module.exports = {
  getAllSales,
  getSaleID,
  addSales,
  registreSales,
  deleteSale,
};
