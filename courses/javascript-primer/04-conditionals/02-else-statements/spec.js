var expect = require("chai").expect;

describe("greet", function() {
  it("is defined and is a function", function() {
    expect(greet).to.exist;
    expect(greet).to.be.a('function');
  });

  it("returns \"Good morning!\" if hour is less than 12", function () {
    expect(greet(6)).to.equal("Good morning!");
  });

  it("returns \"Good afternoon!\" if hour is greater than 12", function () {
    expect(greet(13)).to.equal("Good afternoon!");
  });
});
