<!--{ ids:[133], language:'JavaScript', type:'workshop', order: 8, name:'Variables II', description:'Variables can store any type of data' }-->
var assert = require('chai').assert;

describe('name', function () {
  it('is a string', function () {
    assert.isString(name);
  });
});
describe('likesChocolate', function () {
  it('is a boolean', function () {
    assert.isBoolean(likesChocolate);
  });
});
