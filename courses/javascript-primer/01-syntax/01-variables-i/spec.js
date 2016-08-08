<!--{ ids:[132], language:'JavaScript', type:'workshop', order: 0, name:'Variables I', description:'Create a variable and store data' }-->
var assert = require('chai').assert;

describe('numberOfStatesInUSA', function () {
  it('is defined', function () {
    assert.isDefined(numberOfStatesInUSA);
  });
  it('is assigned a numerical value equal to the number of states in the USA', function () {
    assert.isNumber(numberOfStatesInUSA);
    assert.equal(50, numberOfStatesInUSA);
  });
});
