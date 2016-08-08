<!--{ ids:[166], language:'JavaScript', type:'workshop', order: 3, name:'else if Statements I', description:"When two conditions aren't enough" } -->
function greet(hour) {
  var greeting;

  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour >= 12 && hour < 18){
    greeting = "Good afternoon!"
  } else {
    greeting = "Good evening!";
  }
  return greeting;
}
