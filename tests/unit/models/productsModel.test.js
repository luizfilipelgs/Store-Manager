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
   
  it('verifica a adição de novo produto no BD', async function () {
  
    sinon.stub(connection, 'execute').resolves(mock.insertID);
    const product = await productsModel.addNewProduct({ name: 'Manopla do Infinito' });
    expect(product).to.be.deep.equal(4);
  });
   
  it('verifica deletar um produto', async function () {
  
    sinon.stub(connection, 'execute').resolves([mock.resultObj]);
    const deleteProduct = await productsModel.deleteProduct(1);
    expect(deleteProduct).to.be.equal(mock.resultObj.affectedRows);
  });

  it('verifica o update de um produto', async function () {
  
    sinon.stub(connection, 'execute').resolves([mock.resultObj]);
    const updateProduct = await productsModel.updateProduct('Manopla do Infinito', 2);
    expect(updateProduct).to.be.deep.equal(mock.resultObj.affectedRows);
  });
});
