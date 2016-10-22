var expect = require("chai").expect;

describe("city", function() {
  it("is defined and is a string", function() {
    expect(city).to.exist;
    expect(city).to.be.a('string');
  });
});
describe("getCity", function() {
  it("returns the value of city", function() {
      expect(getCity()).to.equal(city);
  });
});
