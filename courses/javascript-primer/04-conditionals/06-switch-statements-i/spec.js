var expect = require("chai").expect;

describe("getNinjaTurtleName", function() {
  it("is defined and is a function", function() {
    expect(getNinjaTurtleName).to.exist;
    expect(getNinjaTurtleName).to.be.a('function');
  });

  it("returns \"Donatello\" for case \"purple\"", function () {
    expect(getNinjaTurtleName("purple")).to.equal("Donatello");
  });

  it("returns \"Leonardo\" for case \"blue\"", function () {
    expect(getNinjaTurtleName("blue")).to.equal("Leonardo");
  });

  it("returns \"Raphael\" for case \"red\"", function () {
    expect(getNinjaTurtleName("red")).to.equal("Raphael");
  });

  it("returns \"Michaelangelo\" for case \"orange\"", function () {
    expect(getNinjaTurtleName("orange")).to.equal("Michaelangelo");
  });

  it("returns \"None of the Ninja Turtles wears that color.\" for all other cases", function () {
    expect(getNinjaTurtleName("yellow")).to.equal("None of the Ninja Turtles wears that color.");
  });
});
