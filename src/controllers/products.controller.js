const productService = require('../services/products.service');

const getAllProducts = async (_req, res) => {
  const { type, message } = await productService.getAllProducts();
  if (type) return res.status(type).json(message);
  return res.status(200).json(message);
};

const getProductID = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getProductID(id);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  getAllProducts,
  getProductID,
};
