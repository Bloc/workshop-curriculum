var getPriceWithTax = function(item) {
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
