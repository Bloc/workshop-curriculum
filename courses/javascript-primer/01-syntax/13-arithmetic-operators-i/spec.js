var assert = require('chai').assert;

describe('+', function () {
  it('adds two numbers together', function () {
    assert.equal(addition, 2 + 3);
  });
});
describe('-', function () {
  it('subtracts one number from another', function () {
    assert.equal(subtraction, 10 - 9);
  });
});
describe('*', function () {
  it('multiplies two numbers together', function () {
    assert.equal(multiplication, 7 * 87);
  });
});
describe('/', function () {
  it('divides one number by another', function () {
    assert.equal(division, 8 / 4);
  });
});
