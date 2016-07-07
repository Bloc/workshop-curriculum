var assert = require('chai').assert;

describe('aristotle', function () {
  it('has a + after the first sentence', function () {
    assert.include(aristotle, "habituation. \" +");
  });
});
describe('aristotle', function () {
  it('has a + after the first clause of the second sentence', function () {
    assert.include(aristotle, "excellence, \" +");
  });
});
describe('aristotle', function () {
  it('has a + after the second sentence', function () {
    assert.include(aristotle, "rightly. \" +");
  });
});
describe('aristotle', function () {
  it('has a + after the third sentence', function () {
    assert.include(aristotle, "do. \" +");
  });
});
