describe "Favorite number" do
  it "tells if the number is too low" do
    favorite(12).should eq("Little higher...")
  end
  it "tells if the number is too high" do
    favorite(14).should eq("Little lower...")
  end
  it "tells if the number is right" do
    favorite(13).should eq("That's my favorite number!")
  end
end
