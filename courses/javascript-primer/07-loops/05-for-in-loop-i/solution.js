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
