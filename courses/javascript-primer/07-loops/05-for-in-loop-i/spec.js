var expect = require('chai').expect;

describe("getKeys", function() {
  it("is defined", function() {
    expect(getKeys).to.exist;
  });

  it("returns an array of all the keys", function() {
    hash = {name: "Rob", age: 101};
    result = getKeys(hash);

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
  });

  it("returns an array of all the values", function() {
    hash = {name: "Rob", age: 101};
    result = getValues(hash);

    expect(result).to.include('Rob');
    expect(result).to.include(101);
  });

  it("returns an empty array when the object is empty", function() {
    expect(getValues({})).to.eql([]);
  });
});
