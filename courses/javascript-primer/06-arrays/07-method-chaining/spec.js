var expect = require("chai").expect;

describe("sortAndReverse", function() {
  it("is defined and is a function", function() {
    expect(sortAndReverse).to.exist;
    expect(sortAndReverse).to.be.a('function');
  });
  it("returns the passed array sorted in reverse", function() {
    expect(sortAndReverse([1,2])).to.eql([2,1]);
    expect(sortAndReverse([1,2,3,4])).to.eql([4,3,2,1]);
    expect(sortAndReverse([7,3,9])).to.eql([9,7,3]);
  });
});
