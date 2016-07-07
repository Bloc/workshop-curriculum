describe "hours_to_minutes" do
  it "calculates the correct number of minutes in 1 hour" do
    expect( hours_to_minutes(1) ).to eq(60)
  end

  it "calculates the correct number of minutes in 7 hours" do
    expect( hours_to_minutes(7) ).to eq(420)
  end

  it "calculates the correct number of minutes in 10.3 hours" do
    expect( hours_to_minutes(10.3) ).to eq(618)
  end
end
