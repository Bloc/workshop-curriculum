describe "fun_with_math" do
  it "returns 0 when provided with 1,2,3,4" do
    expect( fun_with_math(1,2,3,4) ).to eq(0)
  end

  it "returns 5 when provided with 4,3,2,1" do
    expect( fun_with_math(4,3,2,1) ).to eq(5)
  end

  it "returns 0 when provided with 0,0,0,0" do
    expect( fun_with_math(0,0,0,0) ).to eq(0)
  end

  it "returns 1 when provided with 1,1,1,1" do
    expect( fun_with_math(1,1,1,1) ).to eq(1)
  end
end
