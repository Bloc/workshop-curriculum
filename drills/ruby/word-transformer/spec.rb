describe "Word transformer" do
  describe "echo" do
    it "repeats a string twice" do
      echo("hello").should eq("hello hello")
    end
  end

  describe "shout" do
    it "makes a string uppercase" do
      shout("hello").should eq("HELLO")
    end
  end

  describe "reverse" do
    it "makes a string backwards" do
      reverse("hello").should eq("olleh")
    end
  end
end
