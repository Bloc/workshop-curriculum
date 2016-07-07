describe Integer do
  describe "factorial" do
    it "computes the factorial of an integer" do
      5.factorial.should eq(120)
    end
    it "returns 1 if it takes the factorial of 0" do
      0.factorial.should eq(1)
    end
    it "returns an error if it takes the factorial of a negative number" do
      lambda { -1.factorial }.should raise_error("You can't take the factorial of a negative number.")
    end
  end
end
