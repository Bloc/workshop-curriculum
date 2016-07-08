var expect = require('chai').expect;

describe("objectToArray", function() {
  it("is defined", function() {
    expect(objectToArray).to.exist;
  });

  it("converts an object into an array of strings", function() {
    hash = { name: "Bob", age: 34 };
    result = objectToArray(hash);

    expect(result).to.include("name is Bob");
    expect(result).to.include("age is 34");
  });

  it("returns an empty array when the object is empty", function() {
    expect(objectToArray([])).to.eql([]);
  });
});
