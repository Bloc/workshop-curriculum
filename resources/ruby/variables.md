Booleans are a primitive data type, just like Strings and Numbers. Booleans can have one of two values: `true` or `false`. Type both Boolean values in the console:

```ruby
p true
p false
```

Primitive data types define the characteristics of values. You've seen values such as `"hello world"`, `4` and `true`. All of these values can be assigned to variables. A variable is an object that can store a value. Variables can be named almost anything as long as the name starts with a lowercase letter. Create a variable named `my_string_variable` and assign it to `"hello world"`, then try `p` with the `my_string_variable`, rather than the `"hello world"` string itself:

```ruby
my_string_variable = "hello world"
p my_string_variable
```

Try a similar exercise with a `my_boolean` variable assigned to `true`.

```ruby
my_boolean = true
p my_boolean
```

The underscores used in the variable names above make variables easier to read. When underscores are used in this capacity it's known as using "snake-case". The other type of case that you'll see in programming is "camel-case", which looks like: `ThisIsCamelCase`.

The `=` in the code above is an assignment operator. It assigns the value on the right to the variable on the left. You can even assign multiple variables at the same time using commas.

```ruby
a, b = 1, 2
```

In this example `a` will equal `1` and `b` will equal `2`.

There's one more primitive data type to explore before moving on: the `Symbol`. Symbols are like strings, only with less functionality. A `Symbol` is designated with a colon (`:`) to the left of a word. Symbols can contain any alpha-numeric character, but they must start with a letter. Type a few Symbols in the console:

```ruby
p :hello
p :hi123
p :HELLO
```

Computers process symbols faster than strings. You'll use Symbols extensively with Ruby on Rails.
