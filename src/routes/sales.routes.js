const express = require('express');
const salesController = require('../controllers/sales.controller');
const { validateSale } = require('../middlewares/sales.middlewares');
const { validateProductExist } = require('../middlewares/products.middlewares');

const salesRouter = express.Router();

salesRouter.get('/', salesController.getAllSales);
salesRouter.get('/:id', salesController.getSaleID);
salesRouter.post('/', validateSale, validateProductExist, salesController.registreSales);
salesRouter.delete('/:id', salesController.deleteSale);

module.exports = salesRouter;
