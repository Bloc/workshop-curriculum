<!--{ ids:[189], language:'JavaScript', type:'workshop', order: 8, name:'Get Element Index', description:'Get the index of an element' } -->
var expect = require("chai").expect;

describe("addItem", function() {
  it("is defined", function() {
    expect(addItem).to.exist;
    expect(addItem).to.be.a('function');
  });
  it("adds an element to the end of the array", function() {
    expect(addItem("banana", ["orange"])).to.eql(["orange", "banana"]);
    expect(addItem("banana", ["orange", "kiwi"])).to.eql(["orange", "kiwi", "banana"]);
  });
  it("doesn't add an element if it already exists in the array", function() {
    expect(addItem("orange", ["orange"])).to.eql(["orange"]);
    expect(addItem("orange", ["bananas", "orange"])).to.eql(["bananas", "orange"]);
  });
});
