const express = require('express');
const salesController = require('../controllers/sales.controller');
const { validateSale, validateProductExist } = require('../middlewares/sales.middlewares');

const salesRouter = express.Router();

// salesRouter.get('/', salesController.getAllSales);
// salesRouter.get('/:id', salesController.getSaleID);
salesRouter.post('/', validateSale, validateProductExist, salesController.registreSales);

module.exports = salesRouter;
