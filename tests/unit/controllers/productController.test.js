const { expect } = require('chai');
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');
const mock = require("./mocks/productController.mock");

chai.use(sinonChai);

describe('Teste da camada products Controller', function () {
  afterEach(sinon.restore);

  it('verifica se o controller getAllProducts retorna status 200', async function () {
  
    sinon.stub(productsService, 'getAllProducts').resolves(mock.products);

    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.getAllProducts(req, res);
    
    expect(res.status).to.have.been.calledWith(200);
  });
   
  it('verifica se o controller getProductID retorna status 200 em caso de sucesso', async function () {
  
     sinon.stub(productsService, 'getProductID').resolves(mock.products);

    const req = { params: { id:1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.getAllProducts(req, res);
    
    expect(res.status).to.have.been.calledWith(200);
  });
  
  it('verifica se o controller getProductID retorna status 404 e a mensagem de not found caso não encontre o produto pelo ID ', async function () {
  
    sinon.stub(productsService, 'getProductID').resolves(mock.notProductID);

    const req = { params: { id:100 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.getProductID(req, res);
    
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(mock.notProductID);
  });
  
});