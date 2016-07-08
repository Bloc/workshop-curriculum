var expect = require("chai").expect;

describe("sortAndReverse", function() {
  it("is defined", function() {
    expect(sortAndReverse).to.exist;
  });

  it("returns a new array that is based on the orignal, but sorted in reverse", function() {
    expect(sortAndReverse([1,2])).to.eql([2,1]);
    expect(sortAndReverse([1,2,3,4])).to.eql([4,3,2,1]);
    expect(sortAndReverse([7,3,9])).to.eql([9,7,3]);
  });
});
