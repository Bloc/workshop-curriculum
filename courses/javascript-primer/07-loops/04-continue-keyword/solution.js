/* This function pushes each number from
   num1 through num2 to an array and returns
   the array */

var addToArray = function(num1, num2) {
  var array = [];
  for (var i = num1; i <= num2; i++) {
    if (i === 13) {
      continue;
    }
    array.push(i);
  }
  return array;
}
