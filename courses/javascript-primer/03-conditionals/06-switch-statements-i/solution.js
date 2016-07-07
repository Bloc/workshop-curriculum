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
