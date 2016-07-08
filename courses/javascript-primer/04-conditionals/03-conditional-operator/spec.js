var expect = require("chai").expect;

describe("greet", function() {
  it("is defined and is a function", function() {
    expect(greet).to.exist;
    expect(greet).to.be.a('function');
  });

  it("returns \"Good morning!\" if the hour is before noon", function () {
    expect(greet(9)).to.equal("Good morning!");
  });

  it("returns \"Good afternoon!\" if hour is after noon", function () {
    expect(greet(14)).to.equal("Good afternoon!");
  });
});
