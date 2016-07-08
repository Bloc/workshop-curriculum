var indexToString = function(array) {
  var newArray = [];
  var i = 0;

  while (i < array.length) {
    newArray[i] = i + " is " + array[i];
    i++;
  }
  
  return newArray;
};
