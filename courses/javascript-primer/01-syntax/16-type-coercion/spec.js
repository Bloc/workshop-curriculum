var assert = require('chai').assert;

describe('5 != \'5\'', function () {
  it('is false', function () {
    assert.isUndefined(comparison1);
  });
});
describe('3 * 3 >= '9'', function () {
  it('is true', function () {
    assert.isDefined(comparison2);
  });
});
describe('"White Sox" == "Red Sox"', function () {
  it('is false', function () {
    assert.isUndefined(comparison3);
  });
});
describe('true == false', function () {
  it('is false', function () {
    assert.isUndefined(comparison4);
  });
});
describe('"3" !== 2 + 1', function () {
  it('is true', function () {
    assert.isDefined(comparison5);
  });
});
describe('meaningOfLife === 42', function () {
  it('is true', function () {
    assert.isDefined(comparison6);
  });
});
