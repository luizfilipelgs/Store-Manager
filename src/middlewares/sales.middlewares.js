const Joi = require('joi');
const status = require('../utils/status');
const productsModel = require('../models/products.model');

const checkSale = Joi.object({
  productId: Joi.number().integer().required(),
  quantity: Joi.number().integer().min(1).required(),
});

const validateSale = async (req, res, next) => {
  const sales = req.body;

  const errorList = sales.map((sale) => checkSale.validate(sale).error);

  const firstError = errorList.find((err) => err !== undefined);
  console.log('--------firstError--------');
  console.log(firstError);

  if (firstError) {
      return res.status(status[firstError.details[0].type])
        .json({ message: firstError.details[0].message });
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
  validateSale,
  validateProductExist,
};
