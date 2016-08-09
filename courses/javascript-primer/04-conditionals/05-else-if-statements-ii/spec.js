<!--{ ids:[167], language:'JavaScript', type:'workshop', order: 4, name:'else if Statements II', description:'Evaluate many conditions' } -->
var expect = require("chai").expect;

describe("checkLock", function() {
  it("is defined and is a function", function() {
    expect(checkLock).to.exist;
    expect(checkLock).to.be.a('function');
  });
  it("returns \"correct\" for a valid combination", function() {
    expect(checkLock(3, 2, 5, 1)).to.eql("correct");
    expect(checkLock(5, 2, 55, 8)).to.eql("correct");
    expect(checkLock(7, 2, 100, 21)).to.eql("correct");
  });
  it("returns \"incorrect\" if first number is not valid", function() {
    expect(checkLock(1, 2, 45, 1)).to.eql("incorrect");
    expect(checkLock(55, 2, 45, 1)).to.eql("incorrect");
  });
  it("returns \"incorrect\" if second number is not valid", function() {
    expect(checkLock(3, 1, 50, 1)).to.eql("incorrect");
    expect(checkLock(3, 3, 50, 1)).to.eql("incorrect");
  });
  it("returns \"incorrect\" if third number is not valid", function() {
    expect(checkLock(3, 2, 4, 1)).to.eql("incorrect");
    expect(checkLock(3, 2, 101, 1)).to.eql("incorrect");
  });
  it("returns \"incorrect\" for the incorrect fourth number example", function() {
    expect(checkLock(3, 2, 100, 9)).to.eql("incorrect");
    expect(checkLock(5, 2, 75, 10)).to.eql("incorrect");
    expect(checkLock(5, 2, 45, 19)).to.eql("incorrect");
    expect(checkLock(7, 2, 5, 20)).to.eql("incorrect");
  });
});
