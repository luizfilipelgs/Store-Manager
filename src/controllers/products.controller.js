const productService = require('../services/products.service');

const getAllProducts = async (_req, res) => {
  const { type, message } = await productService.getAllProducts();

  if (type) return res.status(type).json(message);
  return res.status(200).json(message);
};

module.exports = {
  getAllProducts,
};
