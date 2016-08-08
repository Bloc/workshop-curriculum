<!--{ ids:[184], language:'JavaScript', type:'workshop', order: 3, name:'Add Elements', description:'Add elements to an array' } -->
var addFirstAndLast = function(array) {
  array.push("hello");
  array.unshift("world");
  return array;
}
