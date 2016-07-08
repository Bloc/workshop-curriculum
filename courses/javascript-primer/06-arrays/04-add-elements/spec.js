var expect = require("chai").expect;

describe("addTwo", function() {
  it("is defined and is a function", function() {
    expect(addTwo).to.exist;
    expect(addTwo).to.be.a('function');
  });

  it("returns the array with a 1 added to the start and end", function() {
    expect(addTwo([0])).to.deep.equal([1, 0, 1]);
    expect(addTwo(["apples", "oranges", "kiwis"])).to.deep.equal([1, "apples", "oranges", "kiwis", 1]);
  });
});
