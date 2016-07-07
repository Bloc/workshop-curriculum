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
