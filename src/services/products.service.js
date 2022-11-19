const productsModel = require('../models/products.model');

const getAllProducts = async () => {
  const allProducts = await productsModel.getAllProducts();
  return allProducts;
};

const getProductID = async () => {
  const product = await productsModel.getProductID();
  return product;
};

module.exports = {
  getAllProducts,
  getProductID,
};