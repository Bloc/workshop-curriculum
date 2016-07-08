var expect = require("chai").expect;

describe("arrayLengthPlusOne", function() {
  it("is defined", function() {
    expect(arrayLengthPlusOne).to.exist;
  });

  it("returns the number of elements in the input array, plus one", function() {
    expect(arrayLengthPlusOne([0])).to.equal(2);
    expect(arrayLengthPlusOne([1,2,3])).to.equal(4);
    expect(arrayLengthPlusOne([1,532,23,35,52,39])).to.equal(7);
  });
});
