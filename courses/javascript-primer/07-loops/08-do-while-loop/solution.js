<!--{ ids:[198], language:'JavaScript', type:'workshop', order: 7, name:'Do...While Loops', description:'Similar to a while loop, but runs at least once no matter what' } -->
var addToArray = function(num1, num2) {
  var array = [];

  do {
    array.push(num1);
    num1++
  } while (num1 <= num2);

  return array;
}
