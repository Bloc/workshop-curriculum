describe "Calculator" do
  it "should have an output method" do
    output(1,2,3,"sum").should eq("The sum of 1 and 2 is 3.")
  end
  it "should add two numbers" do
    add(2,3).should eq("The sum of 2 and 3 is 5.")
  end
  it "should subtract two numbers" do
    subtract(3,2).should eq("The difference of 3 and 2 is 1.")
  end
  it "should multiply two numbers" do
    multiply(3,2).should eq("The product of 3 and 2 is 6.")
  end
  it "should divide two numbers" do
    divide(9,2).should eq("The quotient of 9 and 2 is 4.5.")
  end
end
