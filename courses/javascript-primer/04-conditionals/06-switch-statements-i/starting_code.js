<!--{ ids:[168], language:'JavaScript', type:'workshop', order: 5, name:'switch Statements I', description:'Perform actions based on different cases' } -->
var getNinjaTurtleName = function(color) {
  var name;
  if (color === "purple") {
    name = "Donatello";
  } else if (color === "blue") {
    name = "Leonardo";
  } else if (color === "red") {
    name = "Raphael";
  } else if (color === "orange") {
    name = "Michaelangelo";
  } else {
    name = "None of the Ninja Turtles wears that color.";
  }
  return name;
};
