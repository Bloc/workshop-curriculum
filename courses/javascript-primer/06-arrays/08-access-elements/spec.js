var expect = require("chai").expect;

describe("firstAndLast", function() {
  it("is defined", function() {
    expect(firstAndLast).to.exist;
  });

  it("creates a new array with numbers", function() {
    expect(firstAndLast([1,2,3])).to.eql([1,3]);
  });

  it("creates a new array with strings", function() {
    expect(firstAndLast(["a", "b", "c", "d"])).to.eql(["a", "d"]);
  });
});
