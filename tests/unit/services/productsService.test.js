const { expect } = require('chai');
const sinon = require('sinon');

const productsService = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/products.model');
const mock = require("./mocks/productsService.mock");

 describe('Teste da camada products Services', function () {
  afterEach(sinon.restore);

  it('verifica se a função getAllProducts tem seu retorno com os produtos e type: null', async function () {
  
    sinon.stub(productsModel, 'getAllProducts').resolves(mock.products);
    const result = await productsService.getAllProducts();

    //console.log(mock.products.message);
    //console.log(result.message.message);
    console.log(result);

    expect(result.type).to.deep.equal(mock.products.type);
    expect(result.message.message).to.deep.equal(mock.products.message);
    //expect(result).to.deep.equal(mock.products);
  });
  
  
});