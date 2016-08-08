<!--{ ids:[185], language:'JavaScript', type:'workshop', order: 4, name:'Remove Elements', description:'Remove elements from an array' } -->
var expect = require("chai").expect;

describe("removeFirstAndLast", function() {
  it("is defined and is a function", function() {
    expect(removeFirstAndLast).to.exist;
    expect(removeFirstAndLast).to.be.a('function');
  });
  it("returns the array with the first and last elements removed", function() {
    expect(removeFirstAndLast([1,0,1])).to.deep.equal([0]);
    expect(removeFirstAndLast(["apples", "oranges", "kiwis"])).to.deep.equal(["oranges"]);
  });
});
