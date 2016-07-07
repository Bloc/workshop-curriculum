<!-- { ids:[66], language:'Ruby', type:'workshop', order: 5, name:'Unexpected End Error', description:'Debug your code when a method is implemented with incompatible data types.' }-->

### Objectives

After this exercise you should be able to:

- Remember what an Unexpected End error is.
- Identify an Unexpected End error.

### Example

As a Ruby coder, you will write `end` many times — but it can still be easy to forget. Fortunately, Ruby  lets you know when you forget something. The trick with this type of error is to look for every key word that requires an `end`.

You should see some code in your editor:

```ruby
def hello
  "Hello World!"
```

Click **Run**. You should see the following error:

```bash
syntax error, unexpected end-of-input, expecting keyword_end (SyntaxError)
```

A missing `end` is one type of syntax error, but there are others. For example, missing quotation marks or closing parentheses are common causes. Any time you see a `SyntaxError` it's because you're either missing or have an extra keyword or character somewhere.

### Exercise

1. Correct the Unexpected End error and ensure that the specs pass.

The completed method can be called like this:

```ruby
puts hello
=> "Hello World!"
```
