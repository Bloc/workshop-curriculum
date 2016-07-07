Let's create `BankAccount`, `CheckingAccount` and `SavingsAccount` classes. `CheckingAccount` and `SavingsAccount` should inherit from `BankAccount`.

Start by using the following code to stub your classes:

```ruby
class BankAccount
end

class CheckingAccount < BankAccount
end

class SavingsAccount < BankAccount
end
```

A `BankAccount` should have:

* an `initialize` method that takes an initial balance as the only parameter that should be assigned to an instance variable named `balance`
* a `deposit` method that increases the balance by the amount specified as the parameter
* a `withdraw` method that deducts the specified amount from the balance

A `CheckingAccount` should inherit from `BankAccount` and call `super(amount)` from its `withdraw` method. It should then charge an overdraft fee of $50 if the amount they withdrew exceeded the account's existing balance. A `SavingsAccount` should also inherit from `BankAccount` and call `super(amount)` from its `withdraw` method, but not charge an overdraft fee. If the amount attempted to withdraw is greater than the account's balance, cancel the transaction and add the amount back to the balance.
