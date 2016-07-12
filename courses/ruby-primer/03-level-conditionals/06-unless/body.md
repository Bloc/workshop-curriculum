<!-- { ids:[71], language:'Ruby', type:'workshop', order: 5, name:'Unless Expression', description:'Learn how to evaluate arguments and determine values with unless statements.' }-->

### Objectives

After this exercise you should be able to:

- Describe an `unless` expression.
- Apply an `unless` expression to evaluate a method's argument.
- Apply an `unless` expression to determine a method's return value.

### Example

The `if` statement is common in programming, but Ruby offers an alternative to it. Depending on the condition you're evaluating, the inverse of `if` _might_ make your code more readable. For these special situations, we can use the `unless` statement.

We've come a long way with our apple stand, and we've made trillions of dollars selling the best apples in the world. We no longer care about money, but still enjoy providing apples to hungry customers. While we no longer care about money, we still have a problem with people who use checks. We'll modify our apple stand program to be simpler, and account for only one condition.

```ruby
def can_buy_apple_with(payment_type)
  unless payment_type == "check"
    "Here's your delicious apple!"
  else
    "I don't need your money and I won't take your check on principle. Find your apples elsewhere you check monger."
  end
end
```

Using the `unless` statement makes our conditional intention more explicit. We'll literally take _any_ payment method (even no payment at all!) before we take a check.

Let's call this method and see what happens:

```ruby
# Paying with a credit card? No problem!
can_buy_apple_with("credit")
=> "Here's your delicious apple!"

# Not paying at all? No problem!
can_buy_apple_with("")
=> "Here's your delicious apple!"

# You insult me and everyone at the apple stand. Leave now.
can_buy_apple_with("check")
=> "I don't need your money and I won't take your check on principle. Find your apples elsewhere you check monger."
```
