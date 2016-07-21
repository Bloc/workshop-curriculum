var expect = require("chai").expect;

describe("orange", function() {
  it("has a peel method", function() {
    expect(orange.peel).to.exist;
    expect(orange.peel).to.be.a('function');
  });
});
describe("The peel method", function() {
  it("returns \"Delicious!\"", function() {
    expect(orange.peel()).to.eql("Delicious!");
  });
});
describe("snackTime", function() {
  it("is assigned the returned value of the peel method", function() {
    expect(snackTime).to.eql(orange.peel());
  });
});
