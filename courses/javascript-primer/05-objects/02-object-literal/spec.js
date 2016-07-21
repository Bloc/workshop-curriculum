var expect = require("chai").expect;

describe("blueberry", function() {
  it("is defined and is an object", function() {
    expect(blueberry).to.exist;
    expect(blueberry).to.be.an('object');
  });
  it("has a color property with a value of \"blue\"", function() {
    expect(blueberry.color).to.eql("blue");
  });
  it("has a shape property with a value of \"round\"", function() {
    expect(blueberry.shape).to.eql("round");
  });
});
