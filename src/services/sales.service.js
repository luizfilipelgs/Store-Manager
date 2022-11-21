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
  const registerSale = await salesModel.registreSales(sales);
  
  if (!newProduct) return { type: 'NOT_CREATED', message: 'Product not Created' };
  return { type: null, message: newProduct };
};


module.exports = {
  /* getAllProducts,
  getProductID, */
  registreSales,
};