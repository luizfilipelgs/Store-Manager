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
       
    expect(result.type).to.deep.equal(null);
    expect(result.message).to.deep.equal(mock.products);

  });
   
  it('verifica se o service getProductID retorna o produto em caso de sucesso', async function () {
  
    sinon.stub(productsModel, 'getProductID').resolves(mock.productID);

    const result = await productsService.getProductID(1);
  
    expect(result.message).to.be.deep.equal(mock.productID);
  });
  
  it('verifica se o service getProductID retorna a mensagem de not found caso não encontre o produto pelo ID', async function () {
  
    sinon.stub(productsModel, 'getProductID').resolves(null);
    
    const result = await productsService.getProductID(155);
         
    expect(result).to.be.deep.equal(mock.notProductID);
  });

  it('verifica o service addNewProduct em caso de sucesso', async function () {      
    
    sinon.stub(productsModel, 'getProductID').resolves(mock.newProduct);
    sinon.stub(productsModel, 'addNewProduct').resolves(4);

    const product = await productsService.addNewProduct({ name: 'Manopla' });
    expect(product.message).to.be.deep.equal(mock.newProduct);
  });

  it('verifica o service addNewProduct em caso de falha', async function () {      
    
    sinon.stub(productsModel, 'getProductID').resolves(null);
    sinon.stub(productsModel, 'addNewProduct').resolves(4);

    const product = await productsService.addNewProduct({ name: 'Manopla' });
    expect(product).to.be.deep.equal(mock.productNotAdd);
  });

  it('verifica o service deleteProduct em caso de sucesso', async function () {      
    sinon.stub(productsModel, 'deleteProduct').resolves([{ affectedRows: 1 }]);

    const deletedProduct = await productsService.deleteProduct(1);
    expect(deletedProduct.type).to.be.equal(null);
  });

  it('verifica o service deleteProduct em caso de falha', async function () {      

    sinon.stub(productsModel, 'deleteProduct').resolves([{ affectedRows: 0 }]);

    const deletedProduct = await productsService.deleteProduct(100);
    expect(deletedProduct.type).to.be.deep.equal(null);
  });

  it('verifica o service updateProduct em caso de sucesso', async function () {      
    sinon.stub(productsModel, 'getProductID').resolves(mock.productEdit);
    sinon.stub(productsModel, 'updateProduct').resolves([{ affectedRows: 1 }]);

    const updateProduct = await productsService.updateProduct('manopla', 1);
    expect(updateProduct.type).to.be.deep.equal(null);
    expect(updateProduct.message).to.be.deep.equal(mock.productEdit);
  });

  it('verifica o service updateProduct em caso de falha', async function () {      
    sinon.stub(productsModel, 'getProductID').resolves(null);
    
    const updateProduct = await productsService.updateProduct('manopla', 100);
    expect(updateProduct).to.be.deep.equal(mock.notProductID);
  });
});