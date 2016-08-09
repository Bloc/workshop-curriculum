<!--{ ids:[195], language:'JavaScript', type:'workshop', order: 5, name:'For...In Loops II', description:'Practice iterating through properties of an object' } -->
var objectToArray = function(object) {
  var array = [];
  for (var key in object) {
    array.push(key + " is " + object[key]);
  }
  return array;
};
