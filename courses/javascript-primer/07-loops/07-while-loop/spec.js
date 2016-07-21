var expect = require('chai').expect;

describe("indexToString", function() {
  it("is defined and is a function", function() {
    expect(indexToString).to.exist;
    expect(indexToString).to.be.a('function');
  });
  it("returns a new array of strings based on the passed array", function() {
    expect(indexToString([1,2,3])).to.eql(["0 is 1", "1 is 2", "2 is 3"]);
    expect(indexToString(['apple', 'banana', 'orange'])).to.eql(["0 is apple", "1 is banana", "2 is orange"]);
  });
});
