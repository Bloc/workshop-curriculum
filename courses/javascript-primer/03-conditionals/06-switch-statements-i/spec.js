var expect = require("chai").expect;

var ninjaFunction = function(color) {
  var name;
  switch (color) {
    case "purple":
      name = "Donatello";
      break;
    case "blue":
      name = "Leonardo";
      break;
    case "red":
      name = "Raphael";
      break;
    case "orange":
      name = "Michaelangelo";
      break;
    default:
      name = "None of the Ninja Turtles wears that color.";
  }
  return name;
};

describe("getNinjaTurtleName", function() {
  it("is defined and is a function", function() {
    expect(getNinjaTurtleName).to.exist;
    expect(getNinjaTurtleName).to.be.a('function');
  });

  it("uses a switch statement to check different cases", function () {
    expect(getNinjaTurtleName).to.equal(ninjaFunction);
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
