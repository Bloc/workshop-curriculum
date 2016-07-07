<!-- { ids:[65], language:'Ruby', type:'workshop', order: 4, name:'Type Error', description:'Debug your code when a method is implemented with incompatible data types.' }-->

### Objectives

After this exercise you should be able to:

- Remember what a Type error is.
- Identify a Type error.

### Example

You should see some code in your editor:

```ruby
def add(a,b)
  a + " + " + b + " = " + (a + b)
end
```

Click **Run**. You should see the following error:

```bash
String can't be coerced into Fixnum
```

When Ruby tells you it can't coerce one type into another, it means the code expected one type, received a different one, and wasn't able to convert (or "coerce") the wrong type into the new type.

> In this example we are trying to add a string to a number (Fixnum). Ruby does not understand this, so an error is raised.

### Exercise

1. Correct the type error and ensure that the specs pass.

The completed method can be called like this:

```ruby
puts add(1,2,3)
=> "1 + 2 = 3"
```
