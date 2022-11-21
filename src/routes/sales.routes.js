const express = require('express');
const salesController = require('../controllers/sales.controller');
const { validateSale } = require('../middlewares/products.middlewares');

const salesRouter = express.Router();

// salesRouter.get('/', salesController.getAllSales);
// salesRouter.get('/:id', salesController.getSaleID);
salesRouter.post('/', validateSale, salesController.registreSales);

module.exports = salesRouter;
