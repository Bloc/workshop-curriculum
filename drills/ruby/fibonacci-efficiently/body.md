Solving the Fibonacci sequence recursively for large numbers is very inefficient. This is what happens when you call `5.fibonacci`:

```
# you run 5.fibonacci, which runs:
  # 4.fibonacci, which runs:
    # 3.fibonacci, which runs:
        # 2.fibonacci, which runs:
          # 1.fibonacci
          # 0.fibonacci
        # 1.fibonacci
      # 2.fibonacci, which runs:
        # 1.fibonacci
        # 0.fibonacci
    # 3.fibonacci, which runs:
      # 2.fibonacci, which runs:
        # 1.fibonacci
        # 0.fibonacci
      # 1.fibonacci
```

While the recursive code is elegant, the performance is horrible. At every stage, the number of methods we're running doubles, and every time we call the method, a new copy gets loaded into memory. `100.fibonacci` would load the `fibonacci` method into memory close to 2^100 times. You could say this has "complexity of 2^n", because it doubles each time.

A better way to calculate the Fibonacci sequence is to start with the smallest values of the sequence and work your way up to the element you're
computing. To do this, you could call `each` on a range:

```
size = 5
(1..size).each do |counter|
  puts counter
end
```
