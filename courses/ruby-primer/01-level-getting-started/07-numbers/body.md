<!-- { ids:[59], language:'Ruby', type:'workshop', order: 6, name:'Numbers', description:'Learn the number data type and apply it in a method.' }-->

### Objectives

After this exercise you should be able to:

- Define a number data type.
- Understand how to add, subtract, multiply, and divide numbers.
- Understand how to calculate exponential values.
- Understand how to calculate the remainder of a quotient.
- Understand how to return a number from a method.
- Understand how to print a number.

### Example

Ruby can interpret mathematical operations with numbers:

```ruby
# addition
puts 1 + 2

# subtraction
puts 5 - 1

# division
puts 6 / 2

# multiplication
puts 4 * 3
```

Ruby can also calculate exponentials:

```ruby
puts 2 ** 3
=> 8
```

Ruby also provides a modulo operator, which returns the remainder of a quotient:

```ruby
puts 5 % 2
=> 1
```

### Exercise

1. Define a method named `fun_with_math`.
2. The method should take four number arguments.
3. The method should return a number that has been calculated as follows:

    - Add the first argument to the second argument.
    - Subtract the third argument from the sum of the first two arguments.
    - Multiply the result of the two operations above by the fourth argument.

> You should take note of the order of operations requested in this exercise. The placement of parentheses will change the result of your method.

The completed method can be called like this:

```ruby
puts fun_with_math(4,3,2,1)
=> 5
```
