const status = {
  'any.required': 400,
  'string.empty': 400,
  'number.min': 422,
  'string.min': 422,
  'string.base': 422,
  'number.exist': 404,
};

module.exports = status;