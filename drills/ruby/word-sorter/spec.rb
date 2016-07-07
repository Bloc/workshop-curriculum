describe "Word sorter" do
  it "returns a list of words in alphabetical order" do
    word_sort(["dog", "cat", "mouse", "house"]).should eq(["cat", "dog", "house", "mouse"])
  end
end
