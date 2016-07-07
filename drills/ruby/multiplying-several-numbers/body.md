Here's another way to call the `each` method. The stuff inside of the curly brackets `{ }` represents a **block** of code. We'll learn more about blocks later. For now, know that stuff between a `do` and `end` is treated the same as inside curly brackets` { }`.

```
sum = 0
nums = [1,2,3,4,5]
nums.each { |num| sum += num }
puts sum
```    

You can also think of it this way: The first curly bracket means `do` and the second curly bracket means `end`. It's conventional in Ruby to use curly brackets for one-line code blocks and to use `do` and `end` for multi-line blocks.

<br>

Write a program to multiply several numbers using a `multiply` method. Use curly brackets with your method.
