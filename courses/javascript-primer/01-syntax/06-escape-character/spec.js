var assert = require('chai').assert;

describe('The string', function () {
  it('uses two escape characters to escape quotation marks', function () {
    assert.deepEqual("Confucius said, \"I hear and I forget. I see and I remember. I do and I understand.\"", quote);
  });
});
