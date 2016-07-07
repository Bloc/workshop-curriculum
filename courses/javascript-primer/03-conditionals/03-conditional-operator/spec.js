var expect = require("chai").expect;

describe("greeting", function() {
  it("evaluates to \"Good morning!\" if hour is less than 12", function() {
    var hour = 10;
    expect(greeting).to.equal("Good morning!");
  });

  it("evaluates to \"Good afternoon!\" if hour is greater than 12", function () {
    var hour = 13;
    expect(greeting).to.equal("Good afternoon!");
  });
});
