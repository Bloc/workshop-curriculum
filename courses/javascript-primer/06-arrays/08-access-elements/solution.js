<!--{ ids:[188], language:'JavaScript', type:'workshop', order: 7, name:'Access Elements', description:'Access elements in an array with bracket notation' } -->
var firstAndLast = function(array) {
  var firstElement = array[0];
  var lastElement = array[array.length - 1];
  return [firstElement, lastElement];
}
