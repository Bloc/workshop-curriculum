var assert = require('chai').assert;

describe('Single-line comments', function () {
  it('start with //', function () {
    assert.equal(4, numberOfSingleLineComments);
  });
});
describe('Muli-line comments', function () {
  it('start with /* and end with */', function () {
    assert.equal(1, numberOfMultiLineComments);
  });
});
