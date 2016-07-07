describe "One more" do
  it "takes the last element in an array and returns an array with that element repeated" do
    one_more([1,2,3,4,5]).should eq([1,2,3,4,5,5])
  end
end
