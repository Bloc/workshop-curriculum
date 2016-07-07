describe "Greeter" do
  describe "hello" do
    it "says hello to someone" do
      hello("Christina", "Aguilera").should eq("Hello Christina Aguilera.")
    end
  end
end
