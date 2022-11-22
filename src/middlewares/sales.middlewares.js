const Joi = require('joi');
const status = require('../utils/status');

const checkSale = Joi.object({
  productId: Joi.number().integer().required(),
  quantity: Joi.number().integer().min(1).required(),
});

const validateSale = async (req, res, next) => {
  const sales = req.body;

  const errorList = sales.map((sale) => checkSale.validate(sale).error);

  const firstError = errorList.find((err) => err !== undefined);
  
  if (firstError) {
      return res.status(status[firstError.details[0].type])
        .json({ message: firstError.details[0].message });
  }

  next();
};

module.exports = {
  validateSale,
};
