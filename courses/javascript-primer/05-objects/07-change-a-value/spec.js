<!--{ ids:[180], language:'JavaScript', type:'workshop', order: 6, name:'Change a Value', description:'Changing a value is as simple as assigning one' } -->
var expect = require("chai").expect;

describe("blueberry", function() {
  it("is defined and is an object", function() {
    expect(blueberry).to.exist;
    expect(blueberry).to.be.a('object');
  });
  it("has a color property that has a value of \"blue\"", function() {
    expect(blueberry.color).to.eql("blue");
  });
  it("has a shape property that has a value of \"round\"", function() {
    expect(blueberry.shape).to.eql("round");
  });
  it("has a size property that has a value of \"enormous\"", function() {
    expect(blueberry.size).to.eql("enormous");
  });
});
