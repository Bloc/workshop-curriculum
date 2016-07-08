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
