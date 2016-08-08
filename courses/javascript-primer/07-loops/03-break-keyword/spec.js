<!--{ ids:[192], language:'JavaScript', type:'workshop', order: 2, name:'Break keyword', description:'Sometimes you just need a break from doing the same thing over and over...' } -->
var expect = require('chai').expect;

describe("sumNumbers", function() {
  it("is defined and is a function", function() {
    expect(sumNumbers).to.exist;
    expect(sumNumbers).to.be.a('function');
  });
  it("returns the sum of an array of numbers", function() {
    expect(sumNumbers([1,2,3])).to.eql(6);
    expect(sumNumbers([5,23,4])).to.eql(32);
    expect(sumNumbers([5,23,4,1])).to.eql(33);
  });
  it("returns 0 for an empty array", function() {
    expect(sumNumbers([])).to.eql(0);
  });
  it("stops adding numbers together at the point at which an array contains the number 13", function() {
    expect(sumNumbers([1,2,13])).to.eql(3);
    expect(sumNumbers([5,13,4])).to.eql(5);
    expect(sumNumbers([5,23,4,13])).to.eql(32);
  });
});
