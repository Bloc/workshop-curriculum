<!--{ ids:[193], language:'JavaScript', type:'workshop', order: 3, name:'Continue Keyword', description:"And sometimes we're in an on-again-off-again sort of mood..." } -->
var expect = require('chai').expect;

describe("addToArray", function() {
  it("is defined and is a function", function() {
    expect(addToArray).to.exist;
    expect(addToArray).to.be.a('function');
  });
  it("pushes numbers from num1 through num2 to an array", function() {
    expect(addToArray(2,6)).to.eql([2,3,4,5,6]);
    expect(addToArray(2,2)).to.eql([2]);
  });
  it("does not push the number 13 to an array", function() {
    expect(addToArray(12,14)).to.eql([12,14]);
    expect(addToArray(13,17)).to.eql([14,15,16,17]);
  });
});
