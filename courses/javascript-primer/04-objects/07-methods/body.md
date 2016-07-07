<!--{ ids:[], language:'JavaScript', type:'workshop', order: 20, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:



### Example


A Function as a Value

When the value of a property is a function, it's known as a method. For example, we'll create an object named student with a learn method:

var student = {
  learn: function(subject) {
    console.log("I'm learning " + subject + "!");
  }
};
We call a method by using dot notation and including () with any arguments the function may require:

student.learn("JavaScript"); // prints "I'm learning JavaScript!"
Practice creating methods and calling them. Try creating methods that require arguments:

### Exercise
