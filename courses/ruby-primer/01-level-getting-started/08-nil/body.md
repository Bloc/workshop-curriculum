<!-- { ids:[60], language:'Ruby', type:'workshop', order: 7, name:'Nil', description:'Learn the concept of nothingness in programming.' }-->

### Objectives

After this exercise you should be able to:

- Understand `nil`.
- Describe whether an object is `nil`.

### Example

`nil` is a special data type that represents nothingness and helps us determine whether an operation is valid.

Consider the following method (defined in section 1):

```ruby
def capitalize_me(string)
  string.capitalize
end
```

If we invoke this method with a string, we get the result you expect:

```ruby
puts capitalize_me("hello!")
#=> "Hello!"
```

But if we pass _nothing_, (`nil`), we get an error:

```ruby
capitalize_me(nil)

#=> undefined method 'capitalize' for nil:NilClass
#=> in 'capitalize_me'
```

Try it yourself! In section 2 of your sample code, call `capitalize_me` with `nil` as the argument, then run the code.

_What's happened?_ In most programming languages we cannot call methods on non-existent values. `nil` isn't a string, it's _nothing_.

The Ruby interpreter claims the method named, `capitalize`, does not exist for `nil`, which is correct. `capitalize` exists for [String](http://ruby-doc.org/core-2.2.3/String.html#method-i-capitalize) objects, but not for `nil`.

To keep our `capitalize_me` from crashing our program, we can check for `nil` before we capitalize it:

```ruby
def capitalize_me(string)
  if string.nil?
    return ""
  end
  string.capitalize
end
```

> `return` stops execution and jumps back to where the method was called.

The `.nil?` method returns `true` if the value is `nil`, and in that case, our method will return an empty string ("").

If the argument is `nil`, `capitalize_me` exits early with a `return` statement. This prevents the method from trying to capitalize a non-existent value.

Add the `nil` check to `capitalize_me` in section 1 and run your code again; it won't crash this time, we promise!