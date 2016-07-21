<!-- { ids:[122], language:'Ruby', type:'workshop', order: 2, name:'Elsif Expression', description:'Learn how to evaluate arguments and determine values with the elsif expression.' }-->

### Objectives

After this exercise you should be able to:

- Describe an `elsif` expression.
- Apply an `elsif` expression to evaluate a method's argument.
- Apply an `elsif` expression to determine a method's return value.

### Example

Our apple stand program provides two different responses based on the amount of money a customer pays us. Our customers seem to fall into three groups though: those who pay too little, those who overpay, and those that pay the exact price. We can account for all three customer types with an `elsif` expression:

```ruby
def can_buy_apple_with?(money)
  if money == 2
    1
  elsif money < 2
    0
  else
    (money / 2.0).floor
  end
end
```

We used `elsif` (no "e") to create another condition, and it checks if `money` is less than 2. We used `else` for the greater condition because it's the only other option available – that is, if `money` is _not equal to 2_, and it is _not less than 2_, then it must be _greater than 2_.

In our `else` option, we divide `money` by `2.0` and call `floor` on the result to determine how many apples the customer can afford. Let's call this method and see what happens:

```ruby
can_buy_apple_with?(1)
=> 0

can_buy_apple_with?(5)
=> 2

can_buy_apple_with?(2.57)
=> 1

can_buy_apple_with?(2)
=> 1
```

Our apple program certainly has some _byte_, doesn't it?

> We're sorry, please forgive us.
