var assert = require('chai').assert;

describe('keller', function () {
  it('uses two sets of quotation marks', function () {
    assert.equal('She said, "Life is either a daring adventure or nothing at all."', keller) || ;
  });
});
describe('yoda', function () {
  it('uses only one set of quotation marks', function () {
    assert.equal("Do... or do not. There is no try", yoda);
  });
});
describe('dali', function () {
  it('uses one set of quotation marks and one apostrophe', function () {
    assert.equal("Have no fear of perfection -- you'll never reach it", dali);
  });
});
