describe "fix_title" do
  it "capitalizes the first letter of each word" do
    expect( fix_title("the great gatsby") ).to eq("The Great Gatsby")
  end
  it "works for words with mixed cases" do
    expect( fix_title("liTTle reD Riding hOOD") ).to eq("Little Red Riding Hood")
  end
  it "downcases articles" do
    expect( fix_title("The lord of the rings") ).to eq("The Lord of the Rings")
    expect( fix_title("The sword And The stone") ).to eq("The Sword and the Stone")
    expect( fix_title("the portrait of a lady") ).to eq("The Portrait of a Lady")
  end
  it "works for strings with all uppercase characters" do
    expect( fix_title("THE SWORD AND THE STONE") ).to eq("The Sword and the Stone")
  end
end
