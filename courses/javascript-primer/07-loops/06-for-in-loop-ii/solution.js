var objectToArray = function(object) {
  var array = [];
  for (var key in object) {
    array.push(key + " is " + object[key]);
  }
  return array;
};
