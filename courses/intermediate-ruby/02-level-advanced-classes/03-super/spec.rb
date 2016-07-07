describe BankAccount do
  describe "initialization" do
    it "takes an initial balance" do
      acc = BankAccount.new(283)
      expect( acc.balance ).to eq(283)
    end
  end

  describe "#new" do
    it "returns the balance" do
      acc = BankAccount.new(283)
      expect(acc.balance).to eq 283
    end
  end

  describe "#deposit" do
    it "returns the new balance" do
      acc = BankAccount.new(283)
      acc.deposit(10)
      expect(acc.balance).to eq 293
    end
  end
end

describe CheckingAccount do
  it "has BankAccount as its parent class" do
    expect( CheckingAccount.superclass ).to eq(BankAccount)
  end

  describe "#withdraw" do
    it "returns the new balance" do
      acc = CheckingAccount.new(283)
      acc.withdraw(283)
      expect(acc.balance).to eq(0)
    end

    it "it charges an overdraft fee if you overdraw" do
      acc = CheckingAccount.new(283)
      acc.withdraw(284)
      expect(acc.balance).to eq(-51)
    end
  end
end

describe SavingsAccount do
  it "has BankAccount as its parent class" do
    expect( SavingsAccount.superclass ).to eq(BankAccount)
  end

  describe "#withdraw" do
    it "returns the new balance" do
      acc = SavingsAccount.new(283)
      new_balance = acc.withdraw(283)
      expect(new_balance).to eq 0
    end

    it "prevents overdrawing" do
      acc = SavingsAccount.new(283)
      new_balance = acc.withdraw(284)
      expect(new_balance).to eq(283)
    end
  end
end
