var expect = require('chai').expect;

describe("sumNumbers", function() {
  it("is defined", function() {
    expect(sumNumbers).to.exist;
  });

  it("returns the sum of an array of numbers", function() {
    expect(sumNumbers([1,2,3])).to.eql(6);
    expect(sumNumbers([5, 23, 4])).to.eql(32);
    expect(sumNumbers([5, 23, 4, 1])).to.eql(33);
  });

  it("returns 0 for an empty array", function() {
    expect(sumNumbers([])).to.eql(0);
  });
});

describe("indexToString", function() {
  it("is defined", function() {
    expect(indexToString).to.exist;
  });

  it("returns an array of passed-in array elements as strings with element index specified", function() {
    expect(indexToString([1,2,3])).to.eql(["0 is 1", "1 is 2", "2 is 3"]);
    expect(indexToString(['apple', 'banana', 'orange'])).to.eql(["0 is apple", "1 is banana", "2 is orange"]);
  });
});
