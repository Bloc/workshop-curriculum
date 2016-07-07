
var expect = require("chai").expect;

describe("reversePlusOne", function() {
  it("is defined", function() {
    expect(reversePlusOne).to.exist;
  });

  it("returns a new array, where 1 is the first element and the subsequent elements are the reverse of the input array", function() {
    expect(reversePlusOne([1,2])).to.eql([1,2,1]);
    expect(reversePlusOne([1,2,3,4])).to.eql([1,4,3,2,1]);
    expect(reversePlusOne([7,3,9])).to.eql([1,9,3,7]);
  });
});

describe("plusesEverywhere", function() {
  it("is defined", function() {
    expect(plusesEverywhere).to.exist;
  });

  it("returns a string with a plus sign between each element of the input array", function() {
    expect(plusesEverywhere([1,2])).to.equal("1+2");
    expect(plusesEverywhere([1,2,3,4,5])).to.equal("1+2+3+4+5");
  });
});

describe("arrayQuantityPlusOne", function() {
  it("is defined", function() {
    expect(arrayQuantityPlusOne).to.exist;
  });

  it("returns the number of elements in the input array, plus one", function() {
    expect(arrayQuantityPlusOne([0])).to.equal(2);
    expect(arrayQuantityPlusOne([1,2,3])).to.equal(4);
    expect(arrayQuantityPlusOne([1,532,23,35,52,39])).to.equal(7);
  });
});
