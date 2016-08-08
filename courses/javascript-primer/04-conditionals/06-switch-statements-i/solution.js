<!--{ ids:[168], language:'JavaScript', type:'workshop', order: 5, name:'switch Statements I', description:'Perform actions based on different cases' } -->
var getNinjaTurtleName = function(color) {
  var name;
  switch (color) {
    case "purple":
      name = "Donatello";
      break;
    case "blue":
      name = "Leonardo";
      break;
    case "red":
      name = "Raphael";
      break;
    case "orange":
      name = "Michaelangelo";
      break;
    default:
      name = "None of the Ninja Turtles wears that color.";
  }
  return name;
};
