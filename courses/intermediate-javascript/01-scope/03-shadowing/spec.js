var expect = require("chai").expect;

describe("locals", function() {
  it("is defined in the global scope", function() {
    expect(locals).to.exist;
  });
  it("is an array with 3 elements: you, me, and everyone we know", function() {
    expect(locals).to.be.an('array');
    expect(locals).to.eql(["you", "me", "and everyone we know"]);
  });
});
describe("siliconValley", function() {
  it("is defined in the global scope and is a function", function() {
    expect(city).to.exist;
    expect(city).to.be.a('function');
  });
  it("has a variable named locals in its local scope", function() {
    var siliconValleyAsString = siliconValley.toString();
    expect(siliconValleyAsString.to.include("var locals");
  });
  it("returns an array", function() {
    var siliconValleyAsString = siliconValley.toString();
    expect(siliconValleyAsString.to.include("return locals");
    expect(siliconValley).to.eql(["startups", "Google", "Facebook"]);
  });
});
