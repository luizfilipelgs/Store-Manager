const express = require('express');
const productsController = require('../controllers/products.controller');
const { validateName } = require('../middlewares/products.middlewares');

const productsRouter = express.Router();

productsRouter.get('/search', productsController.searchProduct);
productsRouter.get('/', productsController.getAllProducts);
productsRouter.get('/:id', productsController.getProductID);
productsRouter.post('/', validateName, productsController.addNewProduct);
productsRouter.delete('/:id', productsController.deleteProduct);
productsRouter.put('/:id', validateName, productsController.updateProduct);

module.exports = productsRouter;
