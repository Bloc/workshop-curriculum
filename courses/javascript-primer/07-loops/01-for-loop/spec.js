var expect = require('chai').expect;

describe("addToArray", function() {
  it("is defined", function() {
    expect(addToArray).to.exist;
  });

  it("adds numbers from num1 through num2 to an array", function() {
    expect(addToArray(2,6)).to.eql([2,3,4,5,6]);
    expect(addToArray(2,2)).to.eql([2]);
  });
});
