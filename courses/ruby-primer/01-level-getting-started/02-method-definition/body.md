<!-- { ids:[55], language:'Ruby', type:'workshop', order: 1, name:'Method Definition', description:'Learn what a method is and how to define it.' }-->

### Objectives

After this exercise you should be able to:

- Define what a method is.
- Know how to call (invoke) a method.
- Understand the return concept.

### Example

A method is a reusable piece of code which performs an action and provides a result. There are three key terms to understand:

- Define: write a method.
- Call: execute a method.
- Return: the result of executing a method.

Defining a method requires a specific structure in Ruby. Refer to **section 1** of your code sample and write your first Ruby method by typing:

```ruby
def hello
  "Hello world!"
end
```

In Ruby, a method definition begins with `def` and ends with `end`. `def` stands for "define" and initiates the method.

The code that determines what the method will return is written between the `def` and `end` statements.

The name of the method above is `hello`. To call a method, you type the name of the method. By calling the method after `puts` you are instructing the computer to execute the code written in the `hello` method, and print it to the screen with `puts`.

The last line of code in a method is _usually_ the return value. Some exceptions apply, but assume that the value at the bottom of the method is what the method returns, and all methods return something.

In our example, `hello` returns the string value, "Hello world!" Print the result of calling `hello` by adding a `puts` statement at **section 2** of your sample code.

```ruby
puts hello
=> "Hello world!"
```

> We use the `=>` symbol to represent what the method will return. It is not code.