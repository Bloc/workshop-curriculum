In the previous factorial example, we returned an `:invalid` symbol if the method was called on a negative number. It would be better to raise an error, like this:

```
if self < 0
  raise "You can't take the factorial of a negative number."
...
```

This is different than simply returning a symbol, because it tells Ruby that an error has occurred and stops running the program (unless you've specifically anticipated and "caught" the error in your code).

Implement a factorial method yourself without looking at the previous example. Instead of returning a string for a negative number, raise an error that reads "You can't take the factorial of a negative number."
