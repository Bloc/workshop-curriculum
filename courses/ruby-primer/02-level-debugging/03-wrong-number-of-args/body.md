<!-- { ids:[63], language:'Ruby', type:'workshop', order: 2, name:'Wrong Number of Arguments Error', description:'Debug your code when a method is called with unexpected arguments.' }-->

### Objectives

After this exercise you should be able to:

- Remember what a Wrong Number of Arguments error is.
- Identify a Wrong Number of Arguments error.

### Example

You should see some code in your editor:

```ruby
def hello
  ""
end
```

Click **Run**. You should see the following error:

```bash
wrong number of arguments (2 for 0)
```

The method is being called with two arguments in the specs, but our method doesn't define any arguments.

### Exercise

1. Update the `hello` method to take the proper number of arguments.
2. The method should return a string that reads "Hello", followed by the two arguments.

The completed method can be called like this:

```ruby
puts hello("Ruby", "Rails")
=> "Hello Ruby Rails!"
```
