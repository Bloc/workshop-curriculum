var expect = require("chai").expect;

describe("createArray", function() {
  it("is defined", function() {
    expect(createArray).to.exist;
  });

  it("creates an array of numbers", function() {
    expect(createArray(1,2,3,4)).to.eql([1,2,3,4]);
  });

  it("creates an array of strings", function() {
    expect(createArray("a", "b", "c", "d")).to.eql(["a", "b", "c", "d"]);
  });

  it("creates an array of non-sequential elements", function() {
    expect(createArray(1,4,2,3)).to.eql([1,4,2,3]);
  });
});
