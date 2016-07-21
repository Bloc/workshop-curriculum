var expect = require('chai').expect;

describe("getKeys", function() {
  it("is defined and is a function", function() {
    expect(getKeys).to.exist;
    expect(getKeys).to.be.a('function');
  });
  it("returns an array of all the keys", function() {
    var myObj = {name: "Rob", age: 101};
    var result = getKeys(myObj);

    expect(result).to.include('name');
    expect(result).to.include('age');
  });
  it("returns an empty array when the object is empty", function() {
    expect(getKeys({})).to.eql([]);
  });
});
describe("getValues", function() {
  it("is defined", function() {
    expect(getValues).to.exist;
    expect(getValue).to.be.a('function');
  });
  it("returns an array of all the values", function() {
    var myObj = {name: "Rob", age: 101};
    var result = getValues(myObj);

    expect(result).to.include('Rob');
    expect(result).to.include(101);
  });
  it("returns an empty array when the object is empty", function() {
    expect(getValues({})).to.eql([]);
  });
});
