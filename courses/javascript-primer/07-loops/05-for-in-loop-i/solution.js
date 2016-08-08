<!--{ ids:[194], language:'JavaScript', type:'workshop', order: 4, name:'For...In Loops I', description:'Iterate through properties of an object' } -->
var getKeys = function(object) {
  var array = [];
  for (var key in object) {
    array.push(key);
  }
  return array;
};

var getValues = function(object) {
  var array = [];
  for (var key in object) {
    array.push(object[key]);
  }
  return array;
};
