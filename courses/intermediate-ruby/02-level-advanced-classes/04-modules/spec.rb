describe BankAccount do
  describe "initialization" do
    it "takes an initial balance" do
      acc = BankAccount.new(283)
      expect(acc.balance).to eq(283)
    end
  end

  describe "#new" do
    it "returns the balance" do
      acc = BankAccount.new(283)
      expect(acc.balance).to eq(283)
    end
  end
end

describe CheckingAccount do
  it "has BankAccount as its parent class" do
    expect(CheckingAccount.superclass).to eq(BankAccount)
  end

  it "includes the module Interest" do
    expect(CheckingAccount.ancestors).to include(Owner)
  end

  describe "#simple_interest" do
    it "increases the balance by the specified interest rate" do
      acc = CheckingAccount.new(283)
      acc.simple_interest
      expect(acc.balance).to eq (283 + 3 * 10)
    end
  end
end

describe SavingsAccount do
  it "has BankAccount as its parent class" do
    expect(SavingsAccount.superclass).to eq(BankAccount)
  end

  it "includes the module Interest" do
    expect(SavingsAccount.ancestors).to include(Owner)
  end

  describe "#simple_interest" do
    it "increases the balance by the specified interest rate" do
      acc = SavingsAccount.new(283)
      @balance = acc.simple_interest
      expect(acc.balance).to eq (283 + 6 * 5)
    end
  end
end
