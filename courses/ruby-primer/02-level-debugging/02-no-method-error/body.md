<!-- { ids:[62], language:'Ruby', type:'workshop', order: 1, name:'No Method Error', description:'Debug your code when it doesn't recognize a method.' }-->

### Objectives

After this exercise you should be able to:

- Remember what a No Method error is.
- Identify a No Method error.

### Example

Don't type anything in your code editor, just click **Run**. You should see an error:

```bash
NoMethodError: undefined method 'hello'
```

This means that your specs tried to call the `hello` method but couldn't find the method definition. It couldn't find the method because we haven't defined it yet!

### Exercise

1. Define a method named `hello`. Run your code again, before completing the next steps. Note that the `NoMethodError` is gone, but the specs fail. This is because you've properly _defined_ the method, but have not _implemented_ it yet.
2. The method should take a `name` argument.
3. The method should return a string that reads "Hello", followed by the `name` argument and an exclamation point ("!").

The completed method can be called like this:

```ruby
puts hello("Ruby")
=> "Hello Ruby!"
```
