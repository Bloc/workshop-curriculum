There's a concept in programming called Don't Repeat Yourself, or DRY. The idea is that in a case like this, we'd extract the common code and put it in one place. By doing this, we can change common code in one place and be confident that it will be consistent throughout the program. It also saves us a lot of time. There's a saying that great programmers are lazy. This means that they try to be as efficient as possible, and minimize their workload by writing reusable code.

Create a method named `output` that you can call from your other methods.  Here's an example what the `output` method should do:

```
def add(num1, num2)
  result = num1 + num2
  output(num1, num2, result, "sum")
end

def subtract(num1, num2)
  result = num1 - num2
  output(num1, num2, result, "difference")
end
```

Complete a DRY calculator program by using an `output` method in all four operator methods.
