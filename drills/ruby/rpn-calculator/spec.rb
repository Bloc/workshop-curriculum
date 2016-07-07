describe RPNCalculator do
  before do
    @calculator = RPNCalculator.new
  end

  it "adds two numbers" do
    @calculator.push(2)
    @calculator.push(3)
    @calculator.plus
    @calculator.value.should eq(5)
  end

  it "adds three numbers" do
    @calculator.push(2)
    @calculator.push(3)
    @calculator.push(4)
    @calculator.plus
    @calculator.value.should eq(7)
    @calculator.plus
    @calculator.value.should eq(9)
  end

  it "adds and subtracts" do
    @calculator.push(2)
    @calculator.push(3)
    @calculator.push(4)
    @calculator.minus
    @calculator.value.should eq(-1)
    @calculator.plus
    @calculator.value.should eq(1)
  end

  it "multiplies and divides" do
    @calculator.push(2)
    @calculator.push(4)
    @calculator.push(2)
    @calculator.divide
    @calculator.value.should eq(2)
    @calculator.times
    @calculator.value.should eq(4)
  end

  it "resolves operator precedence unambiguously" do
    #  1 2 + 3 * => (1 + 2) * 3
    @calculator.push(1)
    @calculator.push(2)
    @calculator.plus
    @calculator.push(3)
    @calculator.times
    @calculator.value.should eq((1+2)*3)

    #  1 2 3 * + => 1 + (2 * 3)
    @calculator.push(1)
    @calculator.push(2)
    @calculator.push(3)
    @calculator.times
    @calculator.plus
    @calculator.value.should eq(1+(2*3))
  end
end
