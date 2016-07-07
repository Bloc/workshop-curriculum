var expect = require('chai').expect;

var hasElements = function(collection, elements) {
  for (var j = 0; j < elements.length; j++) {
    var foundElem = false;
    for (var i = 0; i < collection.length; i++) {
      if (collection[i] == elements[j]) {
        foundElem = true;
        break;
      }
    }

    if (!foundElem) {
      return false;
    }
  }
  return true;
};


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

  it("returns an array of all the keys", function() {
    hash = {name: "Rob", age: 101};
    result = getValues(hash);

    expect(result).to.include('Rob');
    expect(result).to.include(101);
  });

  it("returns an empty array when the object is empty", function() {
    expect(getValues({})).to.eql([]);
  });
});


describe("objectToArray", function() {
  it("is defined", function() {
    expect(objectToArray).to.exist;
  });

  it("should convert a hash into an array of strings", function() {
    hash = { name: "Bob", age: 34 };
    result = objectToArray(hash);

    expect(result).to.include("name is Bob");
    expect(result).to.include("age is 34");
  });

  it("returns array for longer hash", function() {
    hash = { name: "Joe", age: 34, sex: 'male' }
    result = objectToArray(hash);

    expect(result).to.include("name is Joe");
    expect(result).to.include("age is 34");
    expect(result).to.include("sex is male");
  });

  it("returns an empty array when the hash is empty", function() {
    expect(objectToArray([])).to.eql([]);
  });
});
