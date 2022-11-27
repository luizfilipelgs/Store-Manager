const productsModel = require('../models/products.model');

const getAllProducts = async () => {
  const allProducts = await productsModel.getAllProducts();
  return { type: null, message: allProducts };
};

const getProductID = async (id) => {
  const product = await productsModel.getProductID(id);
  if (!product) return { type: 'NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

const addNewProduct = async (name) => {
  const id = await productsModel.addNewProduct(name);
  const newProduct = await productsModel.getProductID(id);

  if (!newProduct) return { type: 'NOT_CREATED', message: 'Product not Created' };
  return { type: null, message: newProduct };
};

const deleteProduct = async (id) => {
  const status = await productsModel.deleteProduct(id);
  
  if (status === 0) return { type: 'NOT_FOUND', message: 'Product not found' };
  return { type: null };
};

const updateProduct = async (name, id) => {
  const product = await productsModel.getProductID(id);

  if (!product) return { type: 'NOT_FOUND', message: 'Product not found' };
  
  const status = await productsModel.updateProduct(name, id);
  const productEdit = await productsModel.getProductID(id);
  if (status !== 0) return { type: null, message: productEdit };
};

module.exports = {
  getAllProducts,
  getProductID,
  addNewProduct,
  deleteProduct,
  updateProduct,
};