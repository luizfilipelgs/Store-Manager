const { query } = require('../models/db/connections');
const productService = require('../services/products.service');

const getAllProducts = async (_req, res) => {
  const { type, message } = await productService.getAllProducts();
  if (type) return res.status(404).json(message);
  return res.status(200).json(message);
};

const getProductID = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getProductID(id);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

const addNewProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productService.addNewProduct(name);
  if (type) return res.status(404).json(message);
  return res.status(201).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.deleteProduct(id);
  
  if (type) return res.status(404).json({ message });
  return res.status(204).json({ message: 'produto deletado' });
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productService.updateProduct(name, id);
  
 if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

const searchProduct = async (req, res) => {
  const { q } = req.query;
  const { type, message } = await productService.searchProduct(q);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  getAllProducts,
  getProductID,
  addNewProduct,
  deleteProduct,
  updateProduct,
  searchProduct,
};
