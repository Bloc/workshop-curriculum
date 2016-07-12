<!-- { ids:[64], language:'Ruby', type:'workshop', order: 3, name:'Name Error', description:"Debug your code when a method is implemented with variables that don't exist." }-->

### Objectives

After this exercise you should be able to:

- Remember what a Name error is.
- Identify a Name error.

### Example

The `NameError` is very similar to the `NoMethod` error. The `NameError` is thrown when the interpreter can't find a declared variable or method that's being called in a program. Typos often cause this error.

You should see some code in your editor:

```ruby
def hello(first_name, last_name)
  "Hello #{firs_name} #{last_name}!"
end
```

Click **Run**. You should see the following error:

```bash
NameError
undefined local variable or method `firs_name'....
```

The error is telling us that it couldn't find a variable named "firs_name". This is because the variable we declared in the argument list is named "first_name", but we mistyped it as "firs_name" in the method body.
