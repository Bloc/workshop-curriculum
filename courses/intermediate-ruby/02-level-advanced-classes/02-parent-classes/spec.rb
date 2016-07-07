describe Apple do
  describe '#tasty?' do
    it "is based on ripeness" do
      expect( Apple.new(false).tasty? ).to eq("Not yet")
      expect( Apple.new(true).tasty? ).to eq("Yes")
    end
  end
end

describe Fuji do
  describe '#tasty?' do
    it "inherits from Apple" do
      expect( Fuji.new(false).tasty? ).to eq("Not yet")
      expect( Fuji.new(true).tasty? ).to eq("Yes")
    end
  end

  describe "#flavor" do
    it "is based on ripeness" do
      expect( Fuji.new(false).flavor ).to eq("Tart!")
      expect( Fuji.new(true).flavor ).to eq("Sweet")
    end
  end

  describe "#color" do
    it "is based on ripeness" do
      expect( Fuji.new(false).color ).to eq("Green")
      expect( Fuji.new(true).color ).to eq("Yellowish red")
    end
  end
end
