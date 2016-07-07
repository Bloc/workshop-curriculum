describe "Pig Latin translator" do
  it "translates a simple word" do
    s = translate("nix")
    s.should == "ixnay"
  end

  it "translates a word beginning with a vowel" do
    s = translate("apple")
    s.should == "appleay"
  end

  it "translates a word with two consonants" do
    s = translate("stupid")
    s.should == "upidstay"
  end

  it "counts 'qu' as a single phoneme" do
    s = translate("quiet")
    s.should == "ietquay"
  end

  it "counts 'sch' as a single phoneme" do
    s = translate("school")
    s.should == "oolschay"
  end
end
