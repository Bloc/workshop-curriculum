<!--{ ids:[148], language:'JavaScript', type:'workshop', order: 4, name:'`return` statement', description:'Stop a function's execution' } -->
var expect = require("chai").expect;

describe("geneSings", function() {
  it("is defined and is a function", function() {
    expect(geneSings).to.exist;
    expect(geneSings).to.be.a('function');
  });
  it("returns the string \"I'm singin' in the rain, just singin' in the rain\"", function () {
    expect(geneSings()).to.equal("I'm singin' in the rain, just singin' in the rain");
  });
});
describe("lyrics", function() {
  it("is equal to the function call of geneSings", function() {
    expect(lyrics).to.equal(geneSings());
  });
});
