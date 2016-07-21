var expect = require("chai").expect;

describe("multiply", function() {
  it("is defined and is a function", function() {
    expect(multiply).to.exist;
    expect(multiply).to.be.a('function');
  });
  it("multiplies two numbers together", function () {
    expect(multiply(2, 5)).to.equal(10);
    expect(multiply(12, 5)).to.equal(60);
    expect(multiply(4, 3)).to.equal(12);
  });
});
