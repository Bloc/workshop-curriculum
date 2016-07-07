describe Integer do
  describe "fibonacci" do
    it "returns the value of the Fibonacci sequence corresponding to the integer it was called on" do
      8.fibonacci.should eq(21)
    end
  end
end
