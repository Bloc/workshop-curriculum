var expect = require('chai').expect;

describe("indexToString", function() {
  it("is defined", function() {
    expect(indexToString).to.exist;
  });

  it("returns an array of passed-in array elements as strings with element index specified", function() {
    expect(indexToString([1,2,3])).to.eql(["0 is 1", "1 is 2", "2 is 3"]);
    expect(indexToString(['apple', 'banana', 'orange'])).to.eql(["0 is apple", "1 is banana", "2 is orange"]);
  });
});
