describe "String smoosher" do
  it "smooshes two strings into one" do
    smoosh("delicious", "bananas").should eq("deliciousbananas")
  end
end
