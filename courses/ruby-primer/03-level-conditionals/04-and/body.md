<!-- { ids:[69], language:'Ruby', type:'workshop', order: 3, name:'And Operator', description:'Learn how to refine a condition using the and operator.' }-->

### Objectives

After this exercise you should be able to:

- Describe the `and` operator.
- Apply the `and` operator in an `if` expression.

### Example

Our apple stand is successful, but some customers can't carry all the apples they're buying; some customers want bags. We'll add a parameter that tracks a customer's desire for a bag and include it in our conditional statements. Our fancy custom bags cost $1.00, so they'll need to afford at least one bag and one apple.

We can check for multiple conditions at once using the AND operator (`&&`):

```ruby
def can_buy_apple_with?(money, wants_a_bag)
  if money == 3 && wants_a_bag
    1
  elsif money > 3 && wants_a_bag
    ((money - 1) / 2.0).floor
  elsif money < 3 && wants_a_bag
    0
  elsif money == 2
    1
  elsif money > 2
    (money / 2.0).floor
  elsif money < 2
    0
  end
end
```

We used the "and" (`&&`) operator to check for `money` _and_ whether the customer wanted a bag. Let's call this method and see what happens:

```ruby
can_buy_apple_with?(1, true)
=> 0

can_buy_apple_with?(4, true)
=> 1

can_buy_apple_with?(2, false)
=> 1

can_buy_apple_with?(1, false)
=> 0
```

> Challenge: This method is a bit contrived for the purpose of this lesson; most developers would not write such an impractical method
>
> Can you think of a way to simplify it?