<!--{ ids:[185], language:'JavaScript', type:'workshop', order: 4, name:'Remove Elements', description:'Remove elements from an array' } -->
var removeFirstAndLast = function(array) {
  array.pop();
  array.shift();
  return array;
}
