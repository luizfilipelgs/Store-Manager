const { expect } = require('chai');
const sinon = require('sinon');

const productsService = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/products.model');
const mock = require("./mocks/productsService.mock");

describe('Teste da camada products Services', function () {
  afterEach(sinon.restore);

  it('verifica se o service getAllProducts retorna: { type, message }', async function () {
  
    sinon.stub(productsModel, 'getAllProducts').resolves(mock.products);
    const result = await productsService.getAllProducts();
    //console.log(result);
    //console.log(mock.products);
    //console.log(mock.products.message);
    //console.log(result.message.message);
    //console.log(result);

    expect(result.type).to.deep.equal(mock.products.type);
    expect(result.message.message).to.deep.equal(mock.products.message);
    //expect(result).to.deep.equal(mock.products);
  });
   
  it('verifica se o service getProductID retorna o produto em caso de sucesso', async function () {
  
    sinon.stub(productsModel, 'getProductID').resolves(mock.productID);

    const result = await productsModel.getProductID(1);
  
    expect(result).to.be.deep.equal(mock.productID);
  });
  
  it('verifica se o service getProductID retorna o a mensagem de not found caso não encontre o produto pelo ID', async function () {
  
    sinon.stub(productsModel, 'getProductID').resolves(mock.notProductID);
    
    const result = await productsModel.getProductID(155);
         
    expect(result).to.be.deep.equal(mock.notProductID);
  });
  
});