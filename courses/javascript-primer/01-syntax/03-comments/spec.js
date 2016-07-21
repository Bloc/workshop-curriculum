var assert = require('chai').assert;

describe('numberOfSingleLineComments', function () {
  it('is defined', function () {
    assert.isDefined(numberOfSingleLineComments);
  });
  it('is assigned a numerical value equal to the number of single-line comments found in the exercise code', function () {
    assert.isNumber(numberOfSingleLineComments);
    assert.equal(4, numberOfSingleLineComments);
  });
});


describe('numberOfMultiLineComments', function () {
  it('is defined', function () {
    assert.isDefined(numberOfMultiLineComments);
  });
  it('is assigned a numerical value equal to the number of single-line comments found in the exercise code', function () {
    assert.isNumber(numberOfMultiLineComments);
    assert.equal(4, numberOfMultiLineComments);
  });
});
