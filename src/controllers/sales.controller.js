const salesService = require('../services/sales.service');

const getAllSales = async (_req, res) => {
  const { type, message } = await salesService.getAllSales();
  if (type) return res.status(type).json(message);
  return res.status(200).json(message);
};

const getSaleID = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getSaleID(id);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

const registreSales = async (req, res) => {
  const salesArray = req.body;
  const { type, message } = await salesService.registreSales(salesArray);
  if (type) return res.status(type).json({ message });
  return res.status(201).json(message);
};

module.exports = {
  getAllSales,
  getSaleID,
  registreSales,
};
