<!--{ ids:[188], language:'JavaScript', type:'workshop', order: 7, name:'Access Elements', description:'Access elements in an array with bracket notation' } -->
var expect = require("chai").expect;

describe("firstAndLast", function() {
  it("is defined and is a function", function() {
    expect(firstAndLast).to.exist;
    expect(firstAndLast).to.be.a('function');
  });
  it("creates a new array with the first and last elements of the passed array", function() {
    expect(firstAndLast([1,2,3])).to.eql([1,3]);
    expect(firstAndLast(["a", "b", "c", "d"])).to.eql(["a", "d"]);
  });
});
