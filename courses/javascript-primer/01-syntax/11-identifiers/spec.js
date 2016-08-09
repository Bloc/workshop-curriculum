<!--{ ids:[136], language:'JavaScript', type:'workshop', order: 10, name:'Identifiers', description:'Identifiers are unique names' } -->
var assert = require('chai').assert;

describe('movieTitle', function () {
  it('is a good identifier', function () {
    assert.isDefined(movieTitle);
  });
});
describe('The_Sith_Lord', function () {
  it('is not a good identifier', function () {
    assert.isUndefined(The_Sith_Lord);
  });
});
describe('spaceship', function () {
  it('is a good identifier', function () {
    assert.isDefined(spaceship);
  });
});
describe('space_Gangster', function () {
  it('is not a good identifier', function () {
    assert.isUndefined(space_Gangster);
  });
});
describe('hero', function () {
  it('is a good identifier', function () {
    assert.isDefined(hero);
  });
});
describe('PRINCE$$', function () {
  it('is not a good identifier', function () {
    assert.isUndefined(PRINCE$$);
  });
});
