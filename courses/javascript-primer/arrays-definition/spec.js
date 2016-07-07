var expect = require("chai").expect;

describe("newArray", function() {
  it("is defined", function() {
    expect(newArray).to.exist;
  });

  it("creates an array of numbers", function() {
    expect(newArray(1,2,3,4)).to.eql([1,2,3,4]);
  });

  it("creates an array of strings", function() {
    expect(newArray("a", "b", "c", "d")).to.eql(["a", "b", "c", "d"]);
  });

  it("creates an array of non-sequential objects", function() {
    expect(newArray(1,4,2,3)).to.eql([1,4,2,3]);
  });
});

describe("firstAndLast", function() {
  it("is defined", function() {
    expect(firstAndLast).to.exist;
  });

  it("creates a new array with numbers", function() {
    expect(firstAndLast([1,2,3])).to.eql([1,3]);
  });

  it("creates a new array with strings", function() {
    expect(firstAndLast(["a", "b", "c", "d"])).to.eql(["a", "d"]);
  });
});
