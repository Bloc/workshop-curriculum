var assert = require('chai').assert;

describe('logical1', function () {
  it('is false', function () {
    assert.isUndefined(logical1);
  });
});
describe('logical2', function () {
  it('is false', function () {
    assert.isUndefined(logical2);
  });
});
describe('logical3', function () {
  it('is true', function () {
    assert.isDefined(logical3);
  });
});
describe('logical4', function () {
  it('is true', function () {
    assert.isDefined(logical4);
  });
});
describe('logical5', function () {
  it('is false', function () {
    assert.isUndefined(logical5);
  });
});
describe('logical6', function () {
  it('is false', function () {
    assert.isUndefined(logical6);
  });
});
