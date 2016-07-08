<!--{ ids:[144], language:'JavaScript', type:'workshop', order: 0, name:'DRY Principle', description:'Don't Repeat Yourself' }-->

### Objectives

After this exercise, you should be able to:

- State what the DRY principle is
- Recognize a function
- State what a function is

### Example

In software development, it's common to need to perform specific tasks multiple times. Repeatedly writing the code for a task is tedious and inefficient. Don't Repeat Yourself, or __DRY__, is a principle of software development that aims to minimize repetition of information.

Variables help to make code more DRY by making values reusable. __Functions__ also help make code more DRY and have a broader application than variables. Functions are a set of instructions that encapsulate a defined behavior.

Let's say every time you message a friend you use the same greeting: "Hey, what's up? How are you?" Instead of writing that greeting over and over each time, what if you could create a shorthand way of writing it that sent the full message to your friend? This is like what a function does. For example:

```js
function greet() {
  return "Hey, what's up? How are you?";
}
```

With this function, instead of writing `Hey, what's up? How are you?` (28 characters long) you could write `greet()` (only seven characters long) and your friend would still receive the original message. What a time saver!

### Exercise

Update the `greet` function to return the string `"Aloha. Bonjour. Howdy."` instead of `"Hey, what's up? How are you?"`
