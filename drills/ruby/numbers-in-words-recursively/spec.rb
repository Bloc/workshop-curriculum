describe Integer do
  describe "in_words" do
    it "translates numbers less than ten" do
      4.in_words.should == "four"
    end
    it "translates the teens" do
      17.in_words.should == "seventeen"
    end
    it "translates numbers 20 through 99" do
      47.in_words.should == "forty seven"
    end
    it "translates numbers 100 through 999" do
      100.in_words.should == "one hundred"
      206.in_words.should == "two hundred six"
      613.in_words.should == "six hundred thirteen"
      992.in_words.should == "nine hundred ninety two"
    end
    it "translates one thousand up to one million" do
      1_000.in_words.should == "one thousand"
      1_849.in_words.should == "one thousand eight hundred forty nine"
      15_937.in_words.should == "fifteen thousand nine hundred thirty seven"
      352_947.in_words.should == "three hundred fifty two thousand nine hundred forty seven"
    end
    it "translates numbers one million up to one billion" do
      1_000_000.in_words.should == "one million"
      573_917_408.in_words.should == "five hundred seventy three million nine hundred seventeen thousand four hundred eight"
    end
    it "translates numbers one billion up to one trillion" do
      1_000_000_000.in_words.should == "one billion"
      719_471_920_483.in_words.should == "seven hundred nineteen billion four hundred seventy one million nine hundred twenty thousand four hundred eighty three"
    end
    it "translates one trillion" do
      1_000_000_000_000.in_words.should == "one trillion"
    end
  end
end
