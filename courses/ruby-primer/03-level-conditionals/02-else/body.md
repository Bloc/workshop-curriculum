<!-- { ids:[68], language:'Ruby', type:'workshop', order: 1, name:'Else Expression', description:'Learn how to evaluate arguments and determine values with the else expression.' }-->

### Objectives

After this exercise you should be able to:

- Describe an `else` expression.
- Apply an `else` expression to evaluate a method's argument.
- Apply an `else` expression to determine a method's return value.

### Example

Our apple stand returns `true` to customers who pay us at least $2.00, but `nil` to those who don't. We can handle the customers who pay us less than $2.00 with an `else` expression:

```ruby
def can_buy_apple_with?(money)
  if money >= 2
    return true
  else
    return false
  end
end
```

> Challenge: the logic in this method is relatively simple, can you think of a way to shorten it to a single line?

Let's call this method and see what happens:

```ruby
can_buy_apple_with?(1)
=> false

can_buy_apple_with?(5)
=> true

can_buy_apple_with?(2)
=> true
```

We used an `else` to handle the condition where `money` is not greater than or equal to 2. We didn't need to specify a conditional statement for `else` because it executes as long as the `if` conditional is `false`.

Semantically, it's like saying, "if the customer has two or more dollars, they receive an apple, otherwise they do not."