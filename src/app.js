const express = require('express');
const productsRouter = require('./routes/products.routes');
const salesRouter = require('./routes/sales.routes');

const app = express();

app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRouter);
app.use('/sales', salesRouter);

module.exports = app;