const express = require('express');
const productsRouter = require('./routes/products.routes');

const app = express();

app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRouter);
app.use('/sales', productsSales);

module.exports = app;