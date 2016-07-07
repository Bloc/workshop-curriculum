var assert = require('chai').assert;

describe('1', function () {
  it('is a number', function () {
    assert.equal(number1, 1);
  });
});
describe('"San Francisco 49ers"', function () {
  it('is a string', function () {
    assert.equal(string2, "San Francisco 49ers");
  });
});
describe('\'true\'', function () {
  it('is not a boolean', function () {
    assert.equal(string3, "true");
  });
});
describe('false', function () {
  it('is a boolean', function () {
    assert.equal(boolean4, false);
  });
});
describe('5.07', function () {
  it('is a number', function () {
    assert.equal(number5, 5.07);
  });
});
describe('"10485.333"', function () {
  it('is not a number', function () {
    assert.equal(string6, "10485.333");
  });
});
describe('1989', function () {
  it('is a number', function () {
    assert.equal(number7, 1989);
  });
});
describe('"yes"', function () {
  it('is a string', function () {
    assert.equal(string8, "yes");
  });
});
describe('\'If not now, then when?\'', function () {
  it('is a string', function () {
    assert.equal(string9, 'If not now, then when?');
  });
});
describe('true', function () {
  it('is a boolean', function () {
    assert.equal(boolean10, true);
  });
});
