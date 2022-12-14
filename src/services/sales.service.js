const salesModel = require('../models/sales.model');

const getAllSales = async () => {
  const allSales = await salesModel.getAllSales();
  return { type: null, message: allSales };
};

const getSaleID = async (id) => {
  const SaleId = await salesModel.getSaleID(id);
  if (SaleId.length === 0) return { type: 'NOT_FOUND', message: 'Sale not found' };
  return { type: null, message: SaleId };
};

const registreSales = async (sales) => {
  const idSale = await salesModel.addSales();

  const registeredSale = sales.map(({ productId, quantity }) => salesModel
    .registreSales(idSale, productId, quantity));
  
  await Promise.all(registeredSale);

  const result = {
    id: idSale,
    itemsSold: sales,
  };
  
  if (!registeredSale) return { type: 'NOT_REGISTERED', message: 'Erro in Registre' };
  return { type: null, message: result };
};

const deleteSale = async (id) => {
  const SaleId = await salesModel.getSaleID(id);

  if (SaleId.length === 0) return { type: 'NOT_FOUND', message: 'Sale not found' };

  await salesModel.deleteSale(id);
  return { type: null };
};

module.exports = {
  getAllSales,
  getSaleID,
  registreSales,
  deleteSale,
};