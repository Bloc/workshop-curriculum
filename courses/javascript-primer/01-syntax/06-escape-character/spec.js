<!--{ ids:[129], language:'JavaScript', type:'workshop', order: 5, name:'Escape Character', description:'Some characters are more special than others' } -->
var assert = require('chai').assert;

describe('The string', function () {
  it('uses two escape characters to escape quotation marks', function () {
    assert.deepEqual("Confucius said, \"I hear and I forget. I see and I remember. I do and I understand.\"", quote);
  });
});
