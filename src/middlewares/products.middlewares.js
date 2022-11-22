const Joi = require('joi');
const status = require('../utils/status');
const productsModel = require('../models/products.model');

const checkName = Joi.object({
  name: Joi.string().min(5).required(),
});

const validateName = async (req, res, next) => {
  const { name } = req.body;
  const { error } = checkName.validate({ name });

  if (error) {
    return res.status(status[error.details[0].type]).json({ message: error.details[0].message });
  }
 
  next();
};

const validateProductExist = async (req, res, next) => {
  const sales = req.body;

  const products = await productsModel.getAllProducts();
  const listIds = products.map((e) => e.id);

  const validate = sales.every((item) => listIds
    .includes(item.productId));
  if (!validate) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  validateName,
  validateProductExist,
};
