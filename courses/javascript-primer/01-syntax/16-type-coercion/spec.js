<!--{ ids:[141], language:'JavaScript', type:'workshop', order: 15, name:'Type Coercion', description:'Coerce one data type into a another... everyone's doing it!' } -->
var assert = require('chai').assert;

describe('5 != \'5\'', function () {
  it('coerces \'5\' into 5', function () {
    assert.isUndefined(comparison1);
  });
});
describe('3 * 3 >= \'9\'', function () {
  it('coerces \'9\' into 9', function () {
    assert.isDefined(comparison2);
  });
});
describe('"White Sox" == "Red Sox"', function () {
  it('does not need to coerce either value', function () {
    assert.isUndefined(comparison3);
  });
});
describe('true == false', function () {
  it('does not need to coerce either value', function () {
    assert.isUndefined(comparison4);
  });
});
describe('"3" !== 2 + 1', function () {
  it('does not coerce "3" into 3', function () {
    assert.isDefined(comparison5);
  });
});
describe('meaningOfLife === 42', function () {
  it('does not need to coerce either value', function () {
    assert.isDefined(comparison6);
  });
});
