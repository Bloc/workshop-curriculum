var expect = require('chai').expect;

describe("objectToArray", function() {
  it("is defined and is a function", function() {
    expect(objectToArray).to.exist;
    expect(objectToArray).to.be.a('function');
  });
  it("converts an object into an array of strings", function() {
    var myObj = {name: "Bob", age: 34};
    var result = objectToArray(myObj);

    expect(result).to.include("name is Bob");
    expect(result).to.include("age is 34");
  });
  it("returns an empty array when the object is empty", function() {
    expect(objectToArray([])).to.eql([]);
  });
});
