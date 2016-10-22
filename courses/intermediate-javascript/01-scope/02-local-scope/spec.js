var expect = require("chai").expect;

describe("getCity", function() {
  it("is defined and is a function", function() {
    expect(city).to.exist;
    expect(city).to.be.a('function');
  });
  it("has an isGreat variable in its local scope", function() {
    var getCityAsString = getCity.toString();
    expect(getCityAsString.to.include("var isGreat");
  });
  it("returns the concatenation of city and isGreat", function() {
    var getCityAsString = getCity.toString();
    expect(getCityAsString.to.include("return city + isGreat");
    expect(getCity("Erebor")).to.equal("Erebor is a great city!");
    expect(getCity("Laketown")).to.equal("Laketown is a great city!");
  });
});
