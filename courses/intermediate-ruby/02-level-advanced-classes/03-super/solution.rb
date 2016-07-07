class BankAccount
  attr_accessor :balance

  def initialize(balance)
    @balance = balance
  end

  def deposit(amount)
    @balance += amount
    @balance
  end

  def withdraw(amount)
    @balance -= amount
    @balance
  end
end

class CheckingAccount < BankAccount
  OVERDRAFT_FEE = 50

  def withdraw(amount)
    super(amount)
    if @balance < 0
      @balance -= OVERDRAFT_FEE
    end
    @balance
  end

end

class SavingsAccount < BankAccount

  def withdraw(amount)
    super(amount)
    if @balance < 0
      @balance += amount
      puts "You cannot overdraft your savings account"
    end
    @balance
  end
end
