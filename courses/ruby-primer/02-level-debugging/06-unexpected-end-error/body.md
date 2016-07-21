<!-- { ids:[66], language:'Ruby', type:'workshop', order: 1, name:'Unexpected End Error', description:'Debug your code when a method is implemented with incompatible data types.' }-->

### Objectives

After this exercise you should be able to:

- Recognize an Unexpected End error.

### Example

As a Ruby coder, you will write `end` many times — but it can still be easy to forget. Fortunately, Ruby lets you know when you forget something.

The trick with this type of error is to look for every key word that requires an `end`.

You should see this code in your editor:

```ruby
def hello
  "Hello World!"
```

Click **Run**. The following error appears:

```bash
syntax error, unexpected end-of-input, expecting keyword_end (SyntaxError)
```

A missing `end` is another type of syntax error, but there are more. For example, missing quotation marks or closing parentheses are common causes. Any time you see a `SyntaxError`, it's because you're missing some important code, or have an extra keyword (like `end`) somewhere. You might even have accidentally typed an extra character at the end of a line. 
