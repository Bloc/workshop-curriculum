<!-- { ids:[55], language:'Ruby', type:'workshop', order: 1, name:'Method Definition', description:'Learn what a method is and how to define it.' } -->

### Objectives

After this exercise you should be able to:

- Define what a method is.
- Understand how to call a method.
- Understand what a method's return is.

### Example

A method is a reusable piece of code which performs an action and provides a result. There are three key terms to understand:

- Define: write a method.
- Call: execute a method.
- Return: the result of executing a method.

Defining a method requires a specific structure in Ruby. Write your first Ruby method by typing:

```ruby
def hello
  "Hello world!"
end
```

In Ruby, a method definition begins with `def` and ends with `end`. `def` stands for "define" and initiates the method. The code that determines what the method will return is written between the `def` and `end` statements.

The name of the method above is `hello`. To call a method, you simply type the name of the method. By calling the method after `puts` you are instructing the computer to execute the code written in the `hello` method, and print it to the screen with `puts`.

> We use the `=>` symbol to represent what the method will return. It is not code.

```ruby
puts hello
=> "Hello world!"
```
