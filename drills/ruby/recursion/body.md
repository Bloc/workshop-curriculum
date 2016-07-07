You've learned how to call a global method, an instance method and a class method. You've also called a method on another method when you used **method chaining**. What would happen if we called a method __within__ a method? There's actually a term for this in programming, it's called **recursion**. Recursion happens when a method calls itself. A classic example of a recursive program is one that computes factorials. We already wrote a program to do this using ranges. Now let's implement it using recursion. Think about the following logic:

* If the number is 0, return 1.
* Otherwise:
* multiply the number by the factorial of (itself minus 1).

Here's a possible solution for a recursive factorial method. Type it yourself:

```
class Fixnum
  def factorial
    if self < 0
      :invalid
    elsif self == 0
      1
    else
      self * (self - 1).factorial
    end
  end
end

puts 5.factorial
```

>"To iterate is human, to recurse...divine" ~Socrates
