var expect = require('chai').expect;

describe("addToArray", function() {
  it("is defined and is a function", function() {
    expect(addToArray).to.exist;
    expect(addToArray).to.be.a('function');
  });

  it("adds numbers from num1 to num2 to an array", function() {
    expect(addToArray(2,6)).to.eql([2,3,4,5,6]);
    expect(addToArray(5,10)).to.eql([5,6,7,8,9,10]);
    expect(addToArray(2,2)).to.eql([2]);
  });
});
