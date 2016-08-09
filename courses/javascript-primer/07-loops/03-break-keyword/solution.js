<!--{ ids:[192], language:'JavaScript', type:'workshop', order: 2, name:'Break keyword', description:'Sometimes you just need a break from doing the same thing over and over...' } -->
var sumNumbers = function(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++) {
    if (array[i] === 13) {
      break;
    }
    sum += array[i];
  }
  return sum;
};
