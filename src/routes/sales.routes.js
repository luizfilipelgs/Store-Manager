const express = require('express');
const salesController = require('../controllers/sales.controller');

const salesRouter = express.Router();

// salesRouter.get('/', salesController.getAllSales);
// salesRouter.get('/:id', salesController.getSaleID);
salesRouter.post('/', salesController.registreSales);

module.exports = salesRouter;
