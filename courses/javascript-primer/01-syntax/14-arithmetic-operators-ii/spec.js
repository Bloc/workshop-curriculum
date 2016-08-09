<!--{ ids:[139], language:'JavaScript', type:'workshop', order: 13, name:'Arithmetic Operators II', description:'Use non-standard arithmetic operators to perform math operations' } -->
var assert = require('chai').assert;

describe('%', function () {
  it('divides one number by another and returns the remainder', function () {
    assert.equal(modulus, 75 % 10);
  });
});
describe('++', function () {
  it('adds one to a number', function () {
    var x = 4;
    assert.equal(increment, x++);
  });
});
describe('--', function () {
  it('subtracts one from a number', function () {
    var y = 6;
    assert.equal(decrement, y--);
  });
});
