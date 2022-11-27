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
    expect(res.json).to.have.been.calledWith(mock.products.message);
  });

   it('verifica se o controller getAllProducts retorna status 404', async function () {
  
    sinon.stub(productsService, 'getAllProducts').resolves({ type: 'a', message: [] });

    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.getAllProducts(req, res);
    
    expect(res.status).to.have.been.calledWith(404);
  });
   
  it('verifica se o controller getProductID retorna status 200 em caso de sucesso', async function () {
  
    sinon.stub(productsService, 'getProductID').resolves(mock.productID);

    const req = { params: { id:1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.getProductID(req, res);
    
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.productID.message);
  });
  
  it('verifica se o controller getProductID retorna status 404 e a mensagem de not found caso não encontre o produto pelo ID ', async function () {
  
    sinon.stub(productsService, 'getProductID').resolves(mock.notProductID);

    const req = { params: { id:999 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.getProductID(req, res);
    const result = await productsService.getProductID(req, res);
   
    expect(res.status).to.have.been.calledWith(404);
    expect(result).to.be.deep.equal(mock.notProductID);
  });

  it('verifica se o controller addNewProduct retorna status 201 em caso de sucesso', async function () {
  
     sinon.stub(productsService, 'addNewProduct').resolves(mock.productAdd);

    const req = { body: { name: 'manopla' } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.addNewProduct(req, res);
    
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(mock.productAdd.message);
  });

  it('verifica se o controller addNewProduct retorna status 404 em caso de falha', async function () {
  
    sinon.stub(productsService, 'addNewProduct').resolves(mock.productNotCreated);

    const req = { body: { name: 'manopla' } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.addNewProduct(req, res);
    
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(mock.productNotCreated.message);
  });

  it('verifica se o controller deleteProduct retorna status 204 em caso de sucesso', async function () {
  
    sinon.stub(productsService, 'deleteProduct').resolves({ type: null });

    const req = { params: { id: 1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.deleteProduct(req, res);
    
    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith({ message: 'produto deletado' });
  });

  it('verifica se o controller deleteProduct retorna status 404 em caso de falha', async function () {
  
    sinon.stub(productsService, 'deleteProduct').resolves(mock.notProductID);

    const req = { params: { id: 1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.deleteProduct(req, res);
    
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: mock.notProductID.message });
  });

  it('verifica se o controller updateProduct retorna status 200 em caso de sucesso', async function () {
  
    sinon.stub(productsService, 'updateProduct').resolves({ type: null, message: mock.productEdit.message });

    const req = { params: { id: 1 }, body: { name: 'manopla' } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.updateProduct(req, res);
    
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.productEdit.message);
  });

  it('verifica se o controller updateProduct retorna status 404 em caso de sucesso', async function () {
  
    sinon.stub(productsService, 'updateProduct').resolves(mock.notProductID);

    const req = { params: { id: 1 }, body: { name: 'manopla' } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.updateProduct(req, res);
    
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: mock.notProductID.message });
  });
});