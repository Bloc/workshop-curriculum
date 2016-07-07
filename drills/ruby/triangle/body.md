> This exercise was inspired by [Ruby Koans](http://rubykoans.com/).

Write a program with a `triangle`method that accepts three numbers as arguments. The program should return a symbol to represent whether the three lengths form an equilateral, isosceles, or scalene triangle. If you're not familiar with these terms, here are definitions:

* equilateral: all sides are equal
* isosceles: exactly 2 sides are equal
* scalene: no sides are equal

Keep in mind that not all combinations of three numbers make valid triangles. For example, (2,2,8) does not make a triangle. The general rule is that if one side is at least as long as the other two combined, the lengths do not form a triangle. In this case, return `:invalid`.

> This is a practice problem for working with symbols. You will not need a hash in your solution.
