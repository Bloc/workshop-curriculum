var expect = require("chai").expect;

describe("getColorType", function() {
  it("is defined and is a function", function() {
    expect(getColorType).to.exist;
    expect(getColorType).to.be.a('function');
  });
  it("returns correct message for case \"red\"", function () {
    expect(getColorType("red")).to.equal("The color red is a primary color!");
  });
  it("returns correct message for case \"blue\"", function () {
    expect(getColorType("blue")).to.equal("The color blue is a primary color!");
  });
  it("returns correct message for case \"yellow\"", function () {
    expect(getColorType("yellow")).to.equal("The color yellow is a primary color!");
  });
  it("returns correct message for case \"violet\"", function () {
    expect(getColorType("violet")).to.equal("The color violet is a secondary color!");
  });
  it("returns correct message for case \"green\"", function () {
    expect(getColorType("green")).to.equal("The color green is a secondary color!");
  });
  it("returns correct message for case \"orange\"", function () {
    expect(getColorType("orange")).to.equal("The color orange is a secondary color!");
  });
  it("returns correct message for default case", function () {
    expect(getColorType("purple")).to.equal("Sorry, I don't know that color.");
  });
});
