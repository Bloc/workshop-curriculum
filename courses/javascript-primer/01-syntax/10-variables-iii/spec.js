<!--{ ids:[134], language:'JavaScript', type:'workshop', order: 9, name:'Variables III', description:'Change the value of a variable' } -->
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
