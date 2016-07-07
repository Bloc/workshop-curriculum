var expect = require("chai").expect;

describe("favoriteNumber", function() {
  it("is defined", function() {
    expect(favoriteNumber).to.exist;
  });

  it("returns 'Too low' if the guess is less than the correct number", function() {
    expect(favoriteNumber(10, 1)).to.eql("Too low");
  });

  it("returns 'Too high' if the guess is greater than the correct number", function() {
    expect(favoriteNumber(5, 11)).to.eql("Too high");
  });

  it("returns 'You got it!' if the guess is right", function() {
    expect(favoriteNumber(11, 11)).to.eql("You got it!");
  });
});

describe("checkLock", function() {
  it("is defined", function() {
    expect(checkLock).to.exist;
  });

  it("returns 'correct' for a valid combination", function() {
    expect(checkLock(3, 2, 5, 1)).to.eql("correct");
    expect(checkLock(5, 2, 55, 8)).to.eql("correct");
    expect(checkLock(7, 2, 100, 21)).to.eql("correct");
  });

  it("returns 'incorrect' if first number is not valid", function() {
    expect(checkLock(1, 2, 45, 1)).to.eql("incorrect");
  });

  it("returns 'incorrect' if second number is not valid", function() {
    expect(checkLock(3, 1, 50, 1)).to.eql("incorrect");
    expect(checkLock(3, 3, 50, 1)).to.eql("incorrect");
  });

  it("returns 'incorrect' if third number is not valid", function() {
    expect(checkLock(3, 2, 4, 1)).to.eql("incorrect");
    expect(checkLock(3, 2, 101, 1)).to.eql("incorrect");
  });

  it("returns 'incorrect' for the incorrect fourth number example", function() {
    expect(checkLock(3, 2, 100, 9)).to.eql("incorrect");
    expect(checkLock(5, 2, 75, 10)).to.eql("incorrect");
    expect(checkLock(5, 2, 45, 19)).to.eql("incorrect");
    expect(checkLock(7, 2, 5, 20)).to.eql("incorrect");
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
