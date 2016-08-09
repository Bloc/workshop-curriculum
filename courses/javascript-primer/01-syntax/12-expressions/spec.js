<!--{ ids:[137], language:'JavaScript', type:'workshop', order: 11, name:'Expressions', description:'An expression is a unit of code that evaluates to a single value' } -->
var assert = require('chai').assert;

describe('numberOfExpressions', function () {
  it('is defined', function () {
    assert.isDefined(numberOfExpressions);
  });
  it('is assigned a numerical value equal to the number of expressions found in the exercise code', function () {
    assert.isNumber(numberOfExpressions);
    assert.equal(3, numberOfExpressions);
  });
});
