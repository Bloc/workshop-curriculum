<!--{ ids:[190], language:'JavaScript', type:'workshop', order: 0, name:'For Loops', description:'Iterate on a collection of values or objects' } -->
var addToArray = function(num1, num2) {
  var array = [];
  for (var i = num1; i <= num2; i++) {
    array.push(i);
  }
  return array;
}
