var expect = require("chai").expect;

describe("addItem", function() {
  it("is defined", function() {
    expect(addItem).to.exist;
  });

  it("adds an element to the end of the array", function() {
    expect(addItem("banana", ["orange"])).to.eql(["orange", "banana"]);
  });

  it("doesn't add an element if it already exists in the array", function() {
    expect(addItem("orange", ["orange"])).to.eql(["orange"]);
  });
});

describe("reverseSortedList", function() {
  it("is defined", function() {
    expect(reverseSortedList).to.exist;
  });

  it("returns a reversed sorted list of numbers", function() {
    list       = [3, 1, 2];
    listSorted = [3, 2, 1];

    expect(reverseSortedList(list)).to.eql(listSorted);
  });

  it("returns a reversed sorted list of strings", function() {
    list          = ["banana", "orange", "apple"];
    listSorted    = ["orange", "banana", "apple"];

    expect(reverseSortedList(list)).to.eql(listSorted);
  });
});
