var assert = require('chai').assert;

describe('myString', function () {
  it('contains a backslash', function () {
    assert.include(myString, "\\", "contains a backslash");
  });
});
describe('myString', function () {
  it('contains a tab', function () {
    assert.include(myString, "\t", "contains a tab");
  });
});
describe('myString', function () {
  it('contains a new line', function () {
    assert.include(myString, "\n", "contains a new line");
  });
});
