describe "sort_by_length" do
  it "sorts an array of strings by length from shortest to longest" do
    a = ["z", "yyyy", "xxx", "ww"]
    sorted = ["z", "ww", "xxx", "yyyy"]
    expect( sort_by_length(a) ).to eq(sorted)
  end
end
