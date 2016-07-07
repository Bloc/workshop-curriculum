var expect = require('chai').expect;

describe("copy", function() {
  it("is defined", function() {
    expect(copy).to.exist;
  });

  it("creates a new object which is a copy of the passed in object", function() {
    orig = {name: "Rob"};
    result = copy(orig);
    expect(result).to.not.equal(orig);
    expect(result).to.deep.eql(orig);
  });
});

describe("extend", function() {
  it("is defined", function() {
    expect(extend).to.exist;
  });

  it("returns the `dest` object, modified with property-value pairs from the `src` object", function() {
    dest = {name: "Computer", cost: "$1,000"};
    src = {first_name: "Debbie", age: 34};
    result = extend(dest, src);

    expect(result).to.have.keys(['name', 'cost', 'first_name', 'age']);
  });

  it("returns the `dest` object ", function() {
    dest = {name: "Computer", cost: "$1,000"};
    src = {name: "Mouse", uuid: "1234"};
    result = extend(dest, src);

    expect(result).to.have.keys(['name', 'cost', 'uuid']);
    expect(result).to.have.property('name', 'Mouse');
    expect(result).to.have.property('cost', '$1,000');
  });
});

describe("containsValue", function() {
  var h = {};
  beforeEach(function() {
    h = {name: "Computer", cost: "$1,000"};
  });

  it("is defined", function() {
    expect(containsValue).to.exist;
  });

  it("returns true for an empty array", function() {
    expect(containsValue(h, [])).to.be.true;
  });

  it("returns true if it has all the keys", function() {
    keys = ['name', 'cost']
    expect(containsValue(h, keys)).to.be.true;
  });

  it("returns false if one or more of the keys isn't in the object", function() {
    var keys = ['name', 'bio', 'cost'];
    expect(containsValue(h, keys)).to.be.false;
  });
});
