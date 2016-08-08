<!--{ ids:[184], language:'JavaScript', type:'workshop', order: 3, name:'Add Elements', description:'Add elements to an array' } -->
var expect = require("chai").expect;

describe("addFirstAndLast", function() {
  it("is defined and is a function", function() {
    expect(addFirstAndLast).to.exist;
    expect(addFirstAndLast).to.be.a('function');
  });

  it("returns the array with \"hello\" added to the start and \"world\" added to the end of the passed array", function() {
    expect(addFirstAndLast([0])).to.deep.equal(["hello", 0, "world"]);
    expect(addFirstAndLast(["apples", "oranges", "kiwis"])).to.deep.equal(["hello", "apples", "oranges", "kiwis", "world"]);
  });
});
