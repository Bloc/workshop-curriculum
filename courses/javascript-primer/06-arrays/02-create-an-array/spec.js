var expect = require("chai").expect;

describe("createArray", function() {
  it("is defined and is a function", function() {
    expect(createArray).to.exist;
    expect(createArray).to.be.a('function');
  });
  it("creates an array with four elements", function() {
    expect(createArray(1,2,3,4)).to.eql([1,2,3,4]);
    expect(createArray("a", "b", "c", "d")).to.eql(["a", "b", "c", "d"]);
    expect(createArray(1,4,2,3)).to.eql([1,4,2,3]);
  });
});
