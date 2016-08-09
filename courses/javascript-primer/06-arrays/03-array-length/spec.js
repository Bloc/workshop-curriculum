<!--{ ids:[183], language:'JavaScript', type:'workshop', order: 2, name:'Array Length', description:'The number of elements in an array' } -->
var expect = require("chai").expect;

describe("arrayLengthPlusOne", function() {
  it("is defined and is a function", function() {
    expect(arrayLengthPlusOne).to.exist;
    expect(arrayLengthPlusOne).to.be.a('function');
  });
  it("returns the number of elements in the passed array plus one", function() {
    expect(arrayLengthPlusOne([0])).to.equal(2);
    expect(arrayLengthPlusOne([1,2,3])).to.equal(4);
    expect(arrayLengthPlusOne([1,532,23,35,52,39])).to.equal(7);
  });
});
