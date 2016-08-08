<!--{ ids:[106], language:'JavaScript', type:'workshop', order: 1, name:'Statements', description:'Statements are instructions' } -->
var assert = require('chai').assert;

describe('numberOfStatements', function () {
  it('is defined', function () {
    assert.isDefined(numberOfStatements);
  });
  it('is assigned a numerical value equal to the number of statements found in the exercise code', function () {
    assert.isNumber(numberOfStatements);
    assert.equal(5, numberOfStatements);
  });
});
