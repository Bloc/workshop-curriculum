<!--{ ids:[176], language:'JavaScript', type:'workshop', order: 2, name:'Add Properties', description:'Add properties with dot or bracket notation' } -->
var expect = require("chai").expect;

describe("blueberry", function() {
  it("is defined and is an object", function() {
    expect(blueberry).to.exist;
    expect(blueberry).to.be.an('object');
  });

  it("has a color property that has a value of \"blue\"", function() {
    expect(blueberry.color).to.eql("blue");
  });

  it("has a shape property that has a value of \"round\"", function() {
    expect(blueberry.shape).to.eql("round");
  });

  it("has a size property that has a value of \"tiny\"", function() {
    expect(blueberry.size).to.eql("tiny");
  });
});
