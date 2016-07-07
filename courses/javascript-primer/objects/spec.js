var expect = require("chai").expect;

describe("createCourse", function() {
  var title = "Web Developer Track",
      duration = "24 weeks",
      students = ["Paige", "Elizabeth", "Philip"];

  var course = {
    title: title,
    duration: duration,
    students: students
  };

  it("is defined", function() {
    expect(createCourse).to.exist;
  });

  it("creates a course with a title, duration, and student list", function() {
    expect(createCourse(title, duration, students)).to.eql(course);
  });
});

describe("formLetter", function() {
  var letter = {
    recipient: "Joan",
    msg: "It's elementary, my dear Watson.",
    sender: "Sherlock"
  };
  var letterStr = "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;

  it("is defined", function() {
    expect(formLetter).to.exist;
  });

  it("should return a properly formatted letter", function() {
    expect(formLetter(letter)).to.eql(letterStr);
  });
});

describe("canIGet", function() {
  it("is defined", function() {
    expect(canIGet).to.exist;
  });

  it("returns true when a user has enough money to purchase a MacBook Air", function() {
    expect(canIGet("MacBook Air", 999)).to.be.true;
    expect(canIGet("MacBook Air", 1000)).to.be.true;
  });

  it("returns false when a user does not have enough money to purchase a MacBook Air", function() {
    expect(canIGet("MacBook Air", 998)).to.be.false;
  });

  it("returns true when a user has enough money to purchase a MacBook Pro", function() {
    expect(canIGet("MacBook Pro", 1299)).to.be.true;
    expect(canIGet("MacBook Pro", 1300)).to.be.true;
  });

  it("returns false when a user does not have enough money to purchase a MacBook Pro", function() {
    expect(canIGet("MacBook Pro", 1298)).to.be.false;
  });

  it("returns true when a user has enough money to purchase a Mac Pro", function() {
    expect(canIGet("Mac Pro", 2499)).to.be.true;
    expect(canIGet("Mac Pro", 2500)).to.be.true;
  });

  it("returns false when a user does not have enough money to purchase a Mac Pro", function() {
    expect(canIGet("Mac Pro", 2498)).to.be.false;
  });

  it("returns true when a user has enough money to purchase an Apple Sticker", function() {
    expect(canIGet("Apple Sticker", 1)).to.be.true;
    expect(canIGet("Apple Sticker", 2)).to.be.true;
  });

  it("returns false when a user does not have enough money to purchase an Apple Sticker", function() {
    expect(canIGet("Apple Sticker", 0)).to.be.false;
  });

  it("returns false for non-Apple products", function() {
    expect(canIGet("Dell", 1000000)).to.be.false;
    expect(canIGet("Windows", 10000000)).to.be.false;
    expect(canIGet("Snapple", 10000000)).to.be.false;
  });
});
