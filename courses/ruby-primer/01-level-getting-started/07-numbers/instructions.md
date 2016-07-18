### Exercise

In this challenge, you get to implement the [Pythagorean theorem](https://en.wikipedia.org/wiki/Pythagorean_theorem)! We can practically hear your "yays" from across the Internet!

If you don't recall, the Pythagorean theorem allows us to calculate the length of a right-sided triangle as long as we know _two_ of the three sides. The theorem looks like this:

> a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>

![Right-Sided Triangle](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Pythagorean.svg/260px-Pythagorean.svg.png "A right-sided triangle with an A, B, and C section")

Your job is to calculate the missing side!

- Define a function named `pythagorean_theorem`
- It must accept three arguments: a, b, and c
- One of the arguments will always be `0` - this is the missing side!
- The other arguments are valid lengths that correspond to their side of a triangle (either a, b, or c)
- Return the length of the missing side!

> Hint: to get the square root of a number, `4` for example, calculate its `0.5` exponent, `4 ** 0.5`

Given this triangle:

![](http://www.platinumgmat.com/global/images/study_guide/pythagorean_theorem3.gif?v=1)

A is `12`, B is `5`, and C is `13`. In use:

```ruby
# calculates C
puts pythagorean_theorem(12, 5, 0)
=> 13

# calculates B
puts pythagorean_theorem(12, 0, 13)
=> 5

# calculates A
puts pythagorean_theorem(0, 5, 13)
=> 12
```