var expect = require("chai").expect;

describe("greet", function() {
  it("is defined and is a function", function() {
    expect(greet).to.exist;
    expect(greet).to.be.a('function');
  });
  it("returns \"Good morning!\" if the hour is less than 12", function () {
    expect(greet(4)).to.equal("Good morning!");
    expect(greet(6)).to.equal("Good morning!");
  });
  it("returns undefined if the hour is 12", function () {
    expect(greet(12)).to.equal(undefined);
  });
  it("returns \"Good afternoon!\" if hour is greater than 12", function () {
    expect(greet(13)).to.equal("Good afternoon!");
    expect(greet(20)).to.equal("Good afternoon!");
  });
  it("uses the conditional operator instead of an if...else statement", function () {
    var greetAsString = greet.toString();
    expect(greetAsString).to.match(" ? ");
    expect(greetAsString).to.match(" : ");
    expect(greetAsString).to.not.match("if");
    expect(greetAsString).to.not.match("else");
  });
});
