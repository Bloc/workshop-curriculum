<!--{ ids:[168], language:'JavaScript', type:'workshop', order: 5, name:'switch Statements I', description:'Perform actions based on different cases' } -->
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
  it("uses a switch statement instead of an if...else statement", function () {
    var getNinjaTurtleNameAsString = getNinjaTurtleName.toString();
    expect(getNinjaTurtleNameAsString).to.have.string("switch");
    expect(getNinjaTurtleNameAsString).to.have.string("case");
    expect(getNinjaTurtleNameAsString).to.not.have.string("if");
    expect(getNinjaTurtleNameAsString).to.not.have.string("else if");
    expect(getNinjaTurtleNameAsString).to.not.have.string("else");
  });
});
