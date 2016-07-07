var expect = require("chai").expect;

describe("Arya", function() {
  it("exists and is defined", function() {
    expect(Arya).to.exist;
    expect(Arya).to.be.a('function');
  });

  it("inherits from Stark", function () {
    expect(Stark.prototype.isPrototypeOf(Arya.prototype)).to.be.true;
  });

  it("inherits getName() method", function () {
    expect(arya.getName()).to.equal("Arya Stark");
  });
});
