const products = {
  type: null,
  message: [
    {
      "id": 1,
      "name": "Martelo de Thor"
    },
    {
      "id": 2,
      "name": "Traje de encolhimento"
    },
    {
      "id": 3,
      "name": "Escudo do Capitão América"
    }
  ],
}

const productID = {
  type: null,
  message: {
    "id": 1,
    "name": "Martelo de Thor"
  },
};

const notProductID = {
  type: 'NOT_FOUND',
  message: 'Product not found',
};

module.exports = {
  products,
  productID,
  notProductID,
}