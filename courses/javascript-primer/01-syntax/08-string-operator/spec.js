var assert = require('chai').assert;

describe('quotePt1', function () {
  it('is defined and is a string', function () {
    assert.isDefined(quotePt1);
    assert.isString(quotePt1);
  });
});
describe('quotePt2', function () {
  it('is defined and is a string', function () {
    assert.isDefined(quotePt2);
    assert.isString(quotePt2);
  });
});
describe('quotePt3', function () {
  it('is defined and is a string', function () {
    assert.isDefined(quotePt3);
    assert.isString(quotePt3);
  });
});
describe('quotePt4', function () {
  it('is defined and is a string', function () {
    assert.isDefined(quotePt4);
    assert.isString(quotePt4);
  });
});
describe('quotePt5', function () {
  it('is defined and is a string', function () {
    assert.isDefined(quotePt5);
    assert.isString(quotePt5);
  });
});
describe('quoteFull', function () {
  it('is the complete quote', function () {
    assert.equal(quoteFull, quotePt1 + quotePt2 + quotePt3 + quotePt4 + quotePt5);
    assert.equal(quoteFull, "Excellence is an art won by training and habituation. We do not act rightly because we have virtue or excellence, but we rather have those because we have acted rightly. We are what we repeatedly do. Excellence, then, is not an act but a habit.");
  });
});
