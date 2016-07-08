var expect = require("chai").expect;

describe("The function", function() {
  it("is named with an action word that describes what the function does", function() {
    expect(add).to.exist;
    expect(add).to.be.a('function');
  });

  it("adds two numbers together", function () {
    expect(add(3,5)).to.equal(8);
  });
});
