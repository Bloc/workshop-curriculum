var expect = require("chai").expect;

describe("helloWorld", function() {
  it("is defined and is a function", function() {
    expect(helloWorld).to.exist;
    expect(helloWorld).to.be.a('function');
  });

  it("returns 'Hello World!'", function () {
    expect(helloWorld()).to.equal("Hello World!");
  });
});
