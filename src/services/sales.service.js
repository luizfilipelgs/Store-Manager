const salesModel = require('../models/sales.model');

/* const getAllProducts = async () => {
  const allProducts = await productsModel.getAllProducts();
  return { type: null, message: allProducts };
};

const getProductID = async (id) => {
  const product = await productsModel.getProductID(id);
  if (!product) return { type: 'NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
}; */

const registreSales = async (sales) => {
  const idSale = await salesModel.addSales();
  // const registeredSale = await salesModel.registreSales(sales);

  const registeredSale = sales.map(({ productId, quantity }) => salesModel
    .registreSales(idSale, productId, quantity));
  
  await Promise.all(registeredSale);

  const result = {
    id: idSale,
    itemsSold: sales,
  };
  
  console.log(result);
  if (!registeredSale) return { type: 'NOT_REGISTERED', message: 'Erro in Registre' };
  return { type: null, message: result };
};

module.exports = {
  /* getAllProducts,
  getProductID, */
  registreSales,
};