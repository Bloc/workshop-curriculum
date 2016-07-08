var checkLock = function(a, b, c, d) {
  if ((a == 3 || a == 5 || a == 7) &&
      (b == 2) &&
      (c >= 5 && c <= 100) &&
      (d < 9 || d > 20)) {
    return "correct";
  } else {
    return "incorrect";
  }
};
