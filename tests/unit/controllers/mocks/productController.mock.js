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

const productAdd = {
  type: null,
  message: {
    "id": 4,
    "name": "Manopla"
  },
};

const productEdit = {
  type: null,
  message: {
    "id": 1,
    "name": "Manopla"
  },
};

const productNotCreated = { type: 'NOT_CREATED', message: 'Product not Created' }

module.exports = {
  products,
  productID,
  notProductID,
  productAdd,
  productEdit,
  productNotCreated,
}