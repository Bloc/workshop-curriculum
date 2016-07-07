describe Die do
  before do
    @die = Die.new(6)
  end

  describe 'sides' do
    it 'tells you the number of sides the die has' do
      @die.sides.should eq(6)
    end
  end

  describe 'roll' do
    it 'returns a random number between 1 and the number of sides' do
      @die.roll.should >= 1
      @die.roll.should <= 6
    end
  end
end
