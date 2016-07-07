var expect = require("chai").expect;

describe("arnoldYells", function() {
  it("is defined and is a function", function() {
    expect(arnoldYells).to.exist;
    expect(arnoldYells).to.be.a('function');
  });

  it("returns 'Get to the choppa <name>!", function () {
    expect(arnoldYells("Tommy")).to.equal("Get to the choppa Tommy!");
  });
});
