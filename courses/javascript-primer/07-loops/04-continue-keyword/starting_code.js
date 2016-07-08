/* This function pushes each number between
   num1 and num2 to an array and returns
   the array */

var addToArray = function(num1, num2) {
  var array = [];
  for (var i = num1; i <= num2; i++) {
    array.push(i);
  }
  return array;
}
