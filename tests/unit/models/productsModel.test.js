const { expect } = require('chai');
const sinon = require('sinon');

const mock = require("./mocks/productsModel.mock");
const connection = require('../../../src/models/db/connections');
const productsModel = require('../../../src/models/products.model')

 describe('Teste da camada products Model', function () {
  afterEach(sinon.restore);

  it('verifica a busca da lista de produtos completa', async function () {
  
    sinon.stub(connection, 'execute').resolves([mock.products]);
    const result = await productsModel.getAllProducts();
    expect(result).to.be.deep.equal(mock.products);
  });
  
  it('verifica a busca de um produto pelo ID', async function () {
  
    sinon.stub(connection, 'execute').resolves([mock.products]);
    const result = await productsModel.getProductID(1);
    expect(result).to.be.deep.equal(mock.productID);
  });
});