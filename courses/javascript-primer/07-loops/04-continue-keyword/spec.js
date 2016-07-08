var expect = require('chai').expect;

describe("addToArray", function() {
  it("is defined", function() {
    expect(addToArray).to.exist;
  });

  it("adds numbers from num1 to num2 to an array", function() {
    expect(addToArray(2,6)).to.eql([2,3,4,5,6]);
    expect(addToArray(2,2)).to.eql([2]);
  });

  it("does not push the number 13 to an array", function() {
    expect(addToArray(12,14)).to.eql([12,14]);
    expect(addToArray(13,17)).to.eql([14,15,16,17]);
  });
});
