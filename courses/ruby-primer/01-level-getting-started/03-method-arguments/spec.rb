describe "hours_to_minutes" do
  it "converts 1 hour to 60 minutes" do
    expect( hours_to_minutes(1) ).to eq(60)
  end

  it "converts 7 hours to 420 minutes" do
    expect( hours_to_minutes(7) ).to eq(420)
  end

  it "converts 10.3 hours to 618 minutes" do
    expect( hours_to_minutes(10.3) ).to eq(618)
  end
end
