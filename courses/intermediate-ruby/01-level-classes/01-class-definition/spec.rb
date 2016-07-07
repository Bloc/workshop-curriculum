describe Dog do
  describe "#bark" do
    it "returns RUFF RUFF" do
      expect( Dog.new.bark ).to eq("RUFF RUFF!")
    end
  end
end
