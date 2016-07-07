var expect = require("chai").expect;

describe("greet", function() {
  it("is defined and is a function", function() {
    expect(greet).to.exist;
    expect(greet).to.be.a('function');
  });

  it("returns 'Aloha. Bonjour. Howdy.'", function () {
    expect(greet()).to.equal("Aloha. Bonjour. Howdy.");
  });
});
