<!--{ ids:[146], language:'JavaScript', type:'workshop', order: 2, name:'Function Calls', description:'Call a function' } -->
var expect = require("chai").expect;

describe("helloWorld", function() {
  it("is defined and is a function", function() {
    expect(helloWorld).to.exist;
    expect(helloWorld).to.be.a('function');
  });
  it("returns \"Hello World!\"", function () {
    expect(helloWorld()).to.equal("Hello World!");
  });
});
describe("valueOfHelloWorld", function() {
  it("is equal to the function call of helloWorld", function () {
    expect(valueOfHelloWorld).to.equal(helloWorld());
  });
});
