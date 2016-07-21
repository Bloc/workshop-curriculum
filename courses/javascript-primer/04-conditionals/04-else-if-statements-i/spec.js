var expect = require("chai").expect;

describe("greet", function() {
  it("is defined and is a function", function() {
    expect(greet).to.exist;
    expect(greet).to.be.a('function');
  });
  it("returns \"Good morning!\" if the hour is before noon", function () {
    expect(greet(4)).to.equal("Good morning!");
    expect(greet(6)).to.equal("Good morning!");
  });
  it("returns \"Good afternoon!\" if hour is between noon and 6 p.m.", function () {
    expect(greet(12)).to.equal("Good afternoon!");
    expect(greet(17)).to.equal("Good afternoon!");
  });
  it("returns \"Good evening!\" if hour is 6 p.m. or later", function () {
    expect(greet(19)).to.equal("Good evening!");
    expect(greet(23)).to.equal("Good evening!");
  });
});
