> This exercise was adapted from [TestFirst.org](http://testfirst.org/).

RPN stands for Reverse Polish Notation. Instead of using normal "infix" notation, e.g. `2 + 2`, RPN uses "postfix" notation, e.g. `2 2 +`. For example:

```
1 + 2 * 3 # what is the proper order of operations here?
(1 + 2) * 3 # is this correct?
1 + (2 * 3) # or is this correct?

1 2 + 3 * => (1 + 2) * 3 # by using RPN, the order of operations is explicit
1 2 3 * + => 1 + (2 * 3) # another example
```

The advantage of RPN is that you never need to use parentheses, since it is always clear what order to perform operations in. In the case of subtraction and division, the right number is subtracted from or divided into the left number:

```
3 2 - => 1
6 3 / => 2
```

* Create an `RPNCalculator` class. Create a `push` method that lets you put another number into the calculator.
* Create `plus`, `minus`, `times`, and `divide` methods that remove the last two items in the calculator, operate on them, and insert the result as the new last item.
* Create a `value` method that returns the current value in the calculator.
