var expect = require("chai").expect;

describe("fruits", function() {
  it("is defined and is an object", function() {
    expect(fruits).to.exist;
    expect(fruits).to.be.an('object');
  });
  it("has an orange property whose value is an object", function() {
    expect(fruits.orange).to.be.an('object');
  });
  it("has a blueberry property whose value is an object", function() {
    expect(fruits.blueberry).to.be.an('object');
  });
});
describe("fruits.orange", function() {
  it("has a color property that has a value of \"orange\"", function() {
    expect(fruits.orange.color).to.eql("orange");
  });
  it("has a shape property that has a value of \"round\"", function() {
    expect(fruits.orange.shape).to.eql("round");
  });
  it("has a size property that has a value of \"small\"", function() {
    expect(fruits.orange.size).to.eql("small");
  });
});
describe("fruits.blueberry", function() {
  it("has a color property that has a value of \"blue\"", function() {
    expect(fruits.blueberry.color).to.eql("blue");
  });
  it("has a shape property that has a value of \"round\"", function() {
    expect(fruits.blueberry.shape).to.eql("round");
  });
  it("has a size property that has a value of \"tiny\"", function() {
    expect(fruits.blueberry.size).to.eql("tiny");
  });
});
