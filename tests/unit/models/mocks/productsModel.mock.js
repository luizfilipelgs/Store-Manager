const products = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

const productID = {
  "id": 1,
  "name": "Martelo de Thor"
};

const insertID = [
  {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 4,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
  },
  null
];

const resultObj = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: 'Rows matched: 1  Changed: 0  Warnings: 0',
  serverStatus: 2,
  warningStatus: 0,
  changedRows: 0
}

module.exports = {
  products,
  productID,
  insertID,
  resultObj,
}