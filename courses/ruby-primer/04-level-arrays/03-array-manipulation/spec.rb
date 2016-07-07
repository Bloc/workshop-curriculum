describe "countries_visited" do
  it "returns a unique list of sorted countries if the array has elements" do
    arr = ["USA", "USA", "France", "Scotland"]
    expect( countries_visited(arr) ).to eq(["France", "Scotland", "USA"])
  end

  it "returns a string telling the user to travel more if the array is empty" do
    arr = []
    expect( countries_visited(arr) ).to eq("You really need to travel more!")
  end
end
