/* This script alerts the user as to whether or not
   the current year is a leap year. */

var today = new Date();         // Create a new date object
var year = today.getFullYear(); // Get the current year
var message;

// Display a message based on the current year
if (year % 4 === 0) {           // Check if year is divisible by 4
  message = "It's a leap year!";
} else {
  message = "It's not a leap year.";
}
console.log(message);



var numberOfSingleLineComments;
var numberOfMultiLineComments;
