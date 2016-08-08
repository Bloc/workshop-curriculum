var assert = require('chai').assert;

describe('myString', function () {
  it('contains a backslash', function () {
    assert.include(myString, "\\");
  });
  it('contains a tab', function () {
    assert.include(myString, "\t");
  });
  it('contains a new line', function () {
    assert.include(myString, "\n");
  });
});
