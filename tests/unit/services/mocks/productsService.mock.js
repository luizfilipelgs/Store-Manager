const products = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' }
];

const productID = {
  id: 1,
  name: "Martelo de Thor"
};

const notProductID = { type: 'NOT_FOUND', message: 'Product not found' };

const newProduct = {
  "id": 4,
  "name": 'Manopla'
}

const productNotAdd = { type: 'NOT_CREATED', message: 'Product not Created' }

const productEdit = {
  "id": 1,
  "name": "Manopla"
}
module.exports = {
  products,
  productID,
  notProductID,
  newProduct,
  productNotAdd,
  productEdit,
}
