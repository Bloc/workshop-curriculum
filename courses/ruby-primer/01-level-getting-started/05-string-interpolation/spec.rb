describe "say_my_name" do
  it "states my name in the correct format" do
    expect( say_my_name("John", "Adams") ).to eq("My name is John Adams.")
  end
end
