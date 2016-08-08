<!--{ ids:[163], language:'JavaScript', type:'workshop', order: 0, name:'if Statements', description:'If this is true, then do this...' } -->
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
  it("returns undefined if the hour is 12 or later", function () {
    expect(greet(12)).to.equal(undefined);
    expect(greet(20)).to.equal(undefined);
  });
});
