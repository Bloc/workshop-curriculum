<!-- { ids:[122], language:'Ruby', type:'workshop', order: 2, name:'Elsif Expression', description:'Learn how to evaluate arguments and determine values with the elsif expression.' }-->

### Objectives

After this exercise you should be able to:

- Describe an `elsif` expression.
- Apply an `elsif` expression to evaluate a method's argument.
- Apply an `elsif` expression to determine a method's return value.

### Example

Our apple stand program provides two different responses based on the amount of money a customer pays us. Our customers seem to fall into three groups though: the swindler who pays too little, the flaunter who pays too much, and the lover of fair trade who pays us what the apple costs. We can account for all three customer types with an `elsif` expression:

```ruby
def can_buy_apple_with(money)
  if money == 2
    "Here's your delicious apple!"
  elsif money < 2
    "I'm sorry, this apple costs $2.00, you swindler!"
  else
    "I'm sorry, this apple costs $2.00. Go flaunt your money elsewhere!"
  end
end
```

We used `elsif` (note that there's no "e") to create another condition. We could've used an `elsif` to assess if `money` is greater than `2` (the "flaunter" condition), but we used `else`. We used `else` because it's the only other condition that could be met in this program – that is, if `money` is not equal to 2, and it is not less than 2, it must be greater than 2.

Let's call this method and see what happens:

```ruby
# The customer tries to swindle us, so NO APPLE FOR YOU!
can_buy_apple_with(1)
=> "I'm sorry, this apple costs $2.00, you swindler!"

# the customer is flaunting their money, so NO APPLE FOR YOU!
can_buy_apple_with(5)
=> "I'm sorry, this apple costs $2.00. Go flaunt your money elsewhere!"

# the customer believes in fair trade!
can_buy_apple_with(2)
=> "Here's your delicious apple!"
```

Our apple program certainly has some _byte_, doesn't it?

### Exercise

1. Define a method named `tweet_length`.
2. The method should take a string argument.
3. The method should return a string that reads `"You tweeted a perfect tweet!"` if the argument is exactly 140 characters.
4. If the argument is longer than 140 characters, return a string that tells the user how many characters they were over the limit. If the argument is 145 characters the message should read `"You are 5 characters over your limit of 140!"`.
5. If the argument is less than 140 characters, return a string that tells the user how many characters they were under the limit. If the argument is 135 characters the message should read `"You can use 5 more characters if you want!"`.

The completed method can be called like this:

```ruby
puts tweet_length("X"*145)

=> "You are 5 characters over your limit of 140!"

puts tweet_length("Y"*135)
=> "You can use 5 more characters if you want!"

puts tweet_length("Z"*140)
=> "You tweeted a perfect tweet!"
```

> We used a trick in the method calls above. Ruby allows us to multiple a string by a number. For example "A"*3 will return "AAA".
