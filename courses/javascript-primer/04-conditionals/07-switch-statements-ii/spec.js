var expect = require("chai").expect;

describe("getPriceWithTax", function() {
  it("is defined and is a function", function() {
    expect(getPriceWithTax).to.exist;
    expect(getPriceWithTax).to.be.a('function');
  });

  it("uses break statements to break out of the switch statement but still remain in the function", function () {
    expect(getPriceWithTax("shoes")).to.equal(54.99 * 1.09);
    expect(getPriceWithTax("jeans")).to.equal(29.99 * 1.09);
    expect(getPriceWithTax("jacket")).to.equal(97.99 * 1.09);
    expect(getPriceWithTax("belt")).to.equal("That item is free!");
  });
});
