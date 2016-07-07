var assert = require('chai').assert;

describe('bestActor', function () {
  it('is a string', function () {
    assert.isString(bestActor);
  });
});
describe('bestActor', function () {
  it('is someone other than Leonardo DiCaprio', function () {
    assert.notEqual(bestActor, "Leonardo DiCaprio");
  });
});
