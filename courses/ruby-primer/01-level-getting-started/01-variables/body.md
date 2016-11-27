<!-- { ids:[54], language:'Ruby', type:'workshop', order: 0, name:'Variables', description:'Learn what a variable is, and how to assign a value to a variable.' }-->

### Objectives

After this exercise you should be able to:

- State what a variable is.
- Assign a string to a variable.
- Assign a number to a variable.

### Example

A variable is an object that can store a value. We can name variables almost anything as long as the name starts with a lowercase letter.

Refer to the number 1 marker in your code sample. Assign your name to the `my_name` variable. For example, type the following in the code editor (use your name instead of "Mike"):

```ruby
my_name = "Mike"
```

Notice the `=` in the code above; this is an assignment operator. It assigns the value on the right to the variable on the left.

`my_name` is a variable, and it now stores the value of your name. We can prove this by printing `my_name` to the output using `puts`:

```ruby
puts my_name
```

Unless you've skipped ahead to solve this challenge, running the exercise will result in failure. But by running the exercise, we can see everything printed by `puts`.

Click the **Run** button and you will see your name displayed in the Results area. `puts` is a Ruby command that prints a value.

We can also assign numbers to variables. Create a variable named `my_age` in section 2 of your code and assign your age to it:

```ruby
my_age = 38
```

Then print it using `puts`. Run your code again to see your age printed to the output.