<!--{ ids:[149], language:'JavaScript', type:'workshop', order: 5, name:'Anonymous Functions', description:'Anonymous functions have no name' } -->
var expect = require("chai").expect;

describe("The function", function() {
  it("is named with an action word that describes what the function does", function() {
    expect(add).to.exist;
    expect(add).to.be.a('function');
  });
  it("adds two numbers together", function () {
    expect(add(3,5)).to.equal(8);
    expect(add(0,0)).to.equal(0);
    expect(add(2,0)).to.equal(2);
    expect(add(2,999)).to.equal(1001);
  });
});
