<!-- { ids:[56], language:'Ruby', type:'workshop', order: 2, name:'Method Arguments', description:'Learn what an argument is, how to name it, and how to use it in a method.' }-->

### Objectives

After this exercise you should be able to:

- Define a method argument.
- Understand how to use an argument in a method.

### Example

You can interact with methods by providing them with information. Consider these two terms:

- Argument: A variable provided to a method.
- Pass: The act of providing a variable to a method.

There are two arguments passed to the `add` method below. The arguments are named `a` and `b`:

```ruby
def add(a, b)
  a + b
end
```

Arguments are external variables that we may use within a method. A method can request any number of arguments, or none at all.

In the `add` method above, we calculate the sum of `a` and `b`. We can call the `add` method with different arguments:

```ruby
puts add(1, 2)
=> 3

puts add(4, 5)
=> 9

puts add(7, 7)
=> 14
```

We surround arguments with parenthesis `(…)` when passing data to methods, e.g. `do_work(arg1, arg2, …)`. If we choose not to pass arguments, or if the method does not require them, we can exclude the parenthesis: `do_work`.

> **Caution**: When providing arguments, the parenthesis must immediately follow the name of the method - _no spaces allowed_.
> _Good:_ `do_work(arg1, arg2, …)`
> _Bad:_ `do_work (arg1, arg2, …)`