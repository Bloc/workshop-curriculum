module Owner
  def set_new_balance(balance, months, interest_amount)
    balance += months*interest_amount
  end
end

class BankAccount
  include Owner

  attr_accessor :balance

  def initialize(balance)
    @balance = balance
  end

end

class CheckingAccount < BankAccount
  ACCRUAL_PERIOD_IN_MONTHS = 3
  INTEREST_AMOUNT = 10

  def simple_interest
    @balance = set_new_balance(@balance, ACCRUAL_PERIOD_IN_MONTHS, INTEREST_AMOUNT)
  end
end

class SavingsAccount < BankAccount
  ACCRUAL_PERIOD_IN_MONTHS = 6
  INTEREST_AMOUNT = 5

  def simple_interest
    @balance = set_new_balance(@balance, ACCRUAL_PERIOD_IN_MONTHS, INTEREST_AMOUNT)
  end
end
