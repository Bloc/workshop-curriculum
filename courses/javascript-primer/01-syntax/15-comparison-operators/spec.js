var assert = require('chai').assert;

describe('5 + 7', function () {
  it('does not use a comparison operator', function () {
    assert.isUndefined(comparison1);
  });
});
describe('3 != y', function () {
  it('uses the not equal operator', function () {
    assert.isDefined(comparison2);
  });
});
describe('"time" >= "space"', function () {
  it('uses the greater than or equal to operator', function () {
    assert.isDefined(comparison3);
  });
});
describe('55 <= 56', function () {
  it('uses the less than or equal to operator', function () {
    assert.isDefined(comparison4);
  });
});
describe('9 * height', function () {
  it('does not use a comparison operator', function () {
    assert.isUndefined(comparison5);
  });
});
describe('83 > 3', function () {
  it('uses the less than operator', function () {
    assert.isDefined(comparison6);
  });
});
describe('5', function () {
  it('does not use a comparison operator', function () {
    assert.isUndefined(comparison7);
  });
});
describe('33 / 11', function () {
  it('does not use a comparison operator', function () {
    assert.isUndefined(comparison8);
  });
});
describe('experiences > things', function () {
  it('uses the greater than operator', function () {
    assert.isDefined(comparison9);
  });
});
describe('true === 1', function () {
  it('uses the strict equal operator', function () {
    assert.isDefined(comparison10);
  });
});
