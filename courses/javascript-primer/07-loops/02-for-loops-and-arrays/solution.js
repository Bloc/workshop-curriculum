<!--{ ids:[191], language:'JavaScript', type:'workshop', order: 1, name:'For Loops and Arrays', description:'Loops are often used to perform an action on items in an array' } -->
var sumNumbers = function(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
