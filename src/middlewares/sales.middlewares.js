const Joi = require('joi');
const status = require('../utils/status');

const checkSale = Joi.object({
  productId: Joi.number().integer().required(),
  quantity: Joi.number().integer().min(1).required(),
});

const validateSale = async (req, res, next) => {
  const { sales } = req.body;

  const findError = sales.find((sale) => checkSale.validate(sale).error);

  if (findError) {
    return res.status(status[findError.details[0].type])
      .json({ message: findError.details[0].message });
  }
 
  next();
};

module.exports = {
  validateSale,
};
