<!--{ ids:[197], language:'JavaScript', type:'workshop', order: 6, name:'While Loops', description:"When you don't know how many times a loop should run, use a while loop" } -->
var indexToString = function(array) {
  var newArray = [];
  var i = 0;

  while (i < array.length) {
    newArray[i] = i + " is " + array[i];
    i++;
  }

  return newArray;
};
