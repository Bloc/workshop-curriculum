var addToArray = function(num1, num2) {
  var array = [];

  do {
    array.push(num1);
    num1++
  } while (num1 <= num2);

  return array;
}
