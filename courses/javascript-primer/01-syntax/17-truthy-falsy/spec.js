var assert = require('chai').assert;

describe('true', function () {
  it('is truthy', function () {
    assert.equal(truthy1, true);
  });
});
describe('"hello"', function () {
  it('is truthy', function () {
    assert.equal(truthy2, "hello");
  });
});
describe('0', function () {
  it('is falsy', function () {
    assert.equal(falsy3, 0);
  });
});
describe('1 + 0', function () {
  it('is truthy', function () {
    assert.equal(truthy4, 1 + 0);
  });
});
describe('false', function () {
  it('is falsy', function () {
    assert.equal(falsy5, false);
  });
});
describe('"no"', function () {
  it('is truthy', function () {
    assert.equal(truthy6, "no");
  });
});
describe('\'\'', function () {
  it('is falsy', function () {
    assert.equal(falsy7, '');
  });
});
describe('55 + 3', function () {
  it('is truthy', function () {
    assert.equal(truthy8, 55 + 3);
  });
});
describe('9', function () {
  it('is truthy', function () {
    assert.equal(truthy9, 9);
  });
});
describe('3 - 2 - 1', function () {
  it('is falsy', function () {
    assert.equal(falsy10, 3 - 2 - 1);
  });
});
