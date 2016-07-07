describe "any_strings_or_numbers?" do
  it "returns true with an array of only numbers" do
    a = [ 1, 2, 3 ]
    expect(any_strings_or_numbers?(a)).to be true
  end

  it "returns true with an array of only strings" do
    a = [ "no numbers" ]
    expect(any_strings_or_numbers?(a)).to be true
  end

  it "returns true with an array of numbers and strings" do
    a = [ 1, "number" ]
    expect(any_strings_or_numbers?(a)).to be true
  end

  it "returns true if a it has a floating point number only" do
    a = [ 1.0 ]
    expect(any_strings_or_numbers?(a)).to be true
  end

  it "returns false if a string or number is not in the array" do
    a = [ ]
    expect(any_strings_or_numbers?(a)).to be false
  end

  it "returns false if there are hashes in the array" do
    a = [ {}, {} ]
    expect(any_strings_or_numbers?(a)).to be false
  end
end
