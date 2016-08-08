<!--{ ids:[142], language:'JavaScript', type:'workshop', order: 16, name:'Truthy and Falsy', description:'Truthy and falsy is like true and false, but less strict' } -->
var assert = require('chai').assert;

describe('true', function () {
  it('is a regular boolean true value', function () {
    assert.equal(truthy1, true);
  });
});
describe('"hello"', function () {
  it('is a string with text', function () {
    assert.equal(truthy2, "hello");
  });
});
describe('0', function () {
  it('is the number zero', function () {
    assert.equal(falsy3, 0);
  });
});
describe('1 + 0', function () {
  it('is a calculation that evaluates to one', function () {
    assert.equal(truthy4, 1 + 0);
  });
});
describe('false', function () {
  it('is a regular boolean false value', function () {
    assert.equal(falsy5, false);
  });
});
describe('"no"', function () {
  it('is a string with text', function () {
    assert.equal(truthy6, "no");
  });
});
describe('\'\'', function () {
  it('is an empty string', function () {
    assert.equal(falsy7, '');
  });
});
describe('55 + 3', function () {
  it('is a calculation', function () {
    assert.equal(truthy8, 55 + 3);
  });
});
describe('9', function () {
  it('is a number other than zero', function () {
    assert.equal(truthy9, 9);
  });
});
describe('3 - 2 - 1', function () {
  it('is a calculation that evaluates to zero', function () {
    assert.equal(falsy10, 3 - 2 - 1);
  });
});
