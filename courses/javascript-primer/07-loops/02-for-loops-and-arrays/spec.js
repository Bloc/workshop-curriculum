<!--{ ids:[191], language:'JavaScript', type:'workshop', order: 1, name:'For Loops and Arrays', description:'Loops are often used to perform an action on items in an array' } -->
var expect = require('chai').expect;

describe("sumNumbers", function() {
  it("is defined and is a function", function() {
    expect(sumNumbers).to.exist;
    expect(sumNumbers).to.be.a('function');
  });
  it("returns the sum of all numbers in an array", function() {
    expect(sumNumbers([1,2,3])).to.eql(6);
    expect(sumNumbers([5,23,4])).to.eql(32);
    expect(sumNumbers([5,23,4,1])).to.eql(33);
  });
  it("returns 0 for an empty array", function() {
    expect(sumNumbers([])).to.eql(0);
  });
});
