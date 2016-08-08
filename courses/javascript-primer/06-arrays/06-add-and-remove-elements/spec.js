<!--{ ids:[186], language:'JavaScript', type:'workshop', order: 5, name:'Add and Remove Elements', description:'Use the `splice()` method to manipulate an array' } -->
var expect = require("chai").expect;

describe("theOldSwitcharoo", function() {
  it("is defined and is a function", function() {
    expect(theOldSwitcharoo).to.exist;
    expect(theOldSwitcharoo).to.be.a('function');
  });
  it("returns the array with the string \"surprise!\" added in place of the second element", function() {
    expect(theOldSwitcharoo([1,0,1])).to.deep.equal([1,"surprise!",1]);
    expect(theOldSwitcharoo(["apples", "oranges", "kiwis"])).to.deep.equal(["apples", "surprise!", "kiwis"]);
  });
});
