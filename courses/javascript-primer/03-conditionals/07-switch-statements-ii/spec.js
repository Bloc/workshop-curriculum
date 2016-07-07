var expect = require("chai").expect;

var priceFunction = function(item) {
  var price;
  var priceWithTax;

  switch (item) {
    case "shoes":
      price = 54.99;
      break;
    case "jeans":
      price = 29.99;
      break;
    case "jacket":
      price = 97.99;
      break;
    default:
      price = "That item is free!";
  }

  if (typeof price === "number") { // check if the data type of price is "number"
    priceWithTax = price * 1.09;
  } else {
    priceWithTax = price;
  }

  return priceWithTax;
};

describe("getPriceWithTax", function() {
  it("is defined and is a function", function() {
    expect(getPriceWithTax).to.exist;
    expect(getPriceWithTax).to.be.a('function');
  });

  it("uses break statements to break out of the switch statement but still remain in the function", function () {
    expect(getPriceWithTax).to.equal(priceFunction);
  });
});
