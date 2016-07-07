Ruby can interpret mathematical operations with numbers. Try running some basic operations in the console:

```ruby
p 1 + 2
p 5 - 1
p 6 / 2
p 4 * 3
```

Ruby provides syntax for exponentials:

```ruby
p 2 ** 3
```

Not surprisingly, math operations generate a result. Results in programming are known as returns. For example, `2 + 3` returns a value of `5`.

Math operations can be run on variables that are assigned to numbers:

```ruby
x = 10
p x
x = x + 5
p x
```

Ruby has a shorthand syntax to reassign variables that already have values. For example, instead of writing `x = x + 5` you can use the `+=` operator:

```ruby
x = 10
p x
x += 5
p x
```

### Greater Than and Less Than

Basic math operations like `+` and `*` return numbers, but the `>` and `<` operators return boolean values. Type the following and keep your eyes on the return values:

```ruby
p 4 > 5
p 3 < 6
p 5 > 5
```

`>` and `<` are comparison operators, and therefore return `true` or `false`. Another comparison operator is `==`. Whereas the single `=` sign assigns a value, `==` compares two values. Type the following to see how `==` works.

```ruby
p 4 == 5
p 3 == 3
```

> What do you think `>=` does? Test it out with some number pairs in the console.

### Practice

You can combine operators in the same equation, but it's important to understand Ruby's order of operations. You can use `(` `)` to group parts of the equation together, or use the default order of operations, which follows basic arithmetic principles. Type the following in the console and observe the differences:

```ruby
p (3 + 4) * 7
p 3 + 4 * 7
```

Now try to combine operations using variables:

```ruby
sum = 3 + 4
p sum * 7
```

You can use variables with comparison operators:

```ruby
wins = 11
losses = 5
p wins > losses
p wins == losses
```

Some operations can be run on strings. For example, you can add a `String` to a `String`, or use a multiplier to achieve the same purpose:

```ruby
greeting = "hello"
p greeting * 3
p greeting + " world"
```

While you can add strings to strings, it wouldn't make sense to add a `String` to a `Number`. The Ruby interpreter will raise an error saying `can't convert Fixnum into String`. Try it for yourself:

```ruby
p "hello " + 3
```

While `"hello" + 3` doesn't make sense, you can mix strings and numbers if the return should be a string. Combining strings and numbers is called string interpolation. String interpolation is the act of inserting a non-string value into a `String`, thus creating a new `String`. Interpolation is accomplished with the `#{ }` syntax. Try it for yourself:

```ruby
p "hello #{3}"
num = 5
p "hello #{num}"
```

The non-string values are contained inside of the `#{}`. You can also add more to the `String` after the `#{ }` syntax. The Ruby interpreter will run the code inside of the `#{ }` first and then return it to the outer `String`. This will ultimately return a `String` with all interpolated values accounted for.

```ruby
p "3 + 4 = #{3 + 4}"
num1 = 3
num2 = 4
p "3 + 4 = #{num1 + num2}"
```

> What happens when you interpolate a symbol into a string? Try it out in the console.

### Staying DRY

You can make this code cleaner. Consider that `num1` and `num2` can be used alone (`#{num1}`) or in an operation (`#{num1 + num2}`).

```ruby
num1 = 3
num2 = 4
p "#{num1} + #{num2} = #{num1 + num2}"
```

Why is the second example better? In programming this is called "staying DRY". DRY stands for "don't repeat yourself." DRY code is better is because it's easier to maintain. For example, if you wanted to change the program to use `5` and `6` instead of `3` and `4`, you would only need to change each variable assignment (`num1` and `num2`), and not the interpolated string. In the first example, you'd have to change the variable assignments and the interpolated string (in four places).

Interpolated strings must be enclosed in double quotes. The Ruby interpreter will not search for interpolated values in a string if single quotes are used:

```ruby
p 'hello #{3}'
```

### A Sample Program and a Few More Concepts

Try coding this example for a compounding interest program:

```ruby
# principal amount
principal = 10_000

# annual rate of interest
rate = 0.05

# number of years
time = 5

# number of times it is compounded
num = 12

# amount accumulated
amount = principal * (1 + rate/num) ** (num*time)

p "After #{time} years I'll have #{amount} dollars!"
```

You were just exposed to a few new concepts with that example. Consider the following:

* We preceded several lines with the `#` sign. This is called a "comment" in programming. The Ruby interpreter will ignore anything after the `#`, so you can format a comment any way you want. Comments are not needed for every line of code, but they are useful in explaining complex lines, or to give a general context of how the code is used.
* The decimal is used in the assignment of the `rate` variable. Decimals in programming are called **Floats**.
* The `_` is used in the assignment of the `principal` variable. Ruby allows an `_` to be used in numbers for better readability. Although an `_` can be placed anywhere in a number, the best practice is to place them where a comma would normally be placed. (e.g. `1_000_000`).
