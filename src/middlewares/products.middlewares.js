const Joi = require('joi');
const status = require('../utils/status');

const checkName = Joi.object({
  name: Joi.string().min(5).required(),
});

const validateName = async (req, res, next) => {
  const { name } = req.body;
  const { error } = checkName.validate({ name });
  const { details } = error;
 
  if (error) {
    return res.status(status[details[0].type]).json({ message: details[0].message });
  }
 
  next();
};

module.exports = {
  validateName,
};
