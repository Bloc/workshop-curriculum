var expect = require("chai").expect;

describe("sizeOfBlueberry", function() {
  it("is defined and is an string", function() {
    expect(sizeOfBlueberry).to.exist;
    expect(sizeOfBlueberry).to.be.a('string');
  });
  it("has a value equal to the size property of the blueberry object", function() {
    expect(sizeOfBlueberry).to.eql(blueberry.size);
  });
});
