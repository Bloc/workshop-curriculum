describe "Book" do
  describe "should be able get/set attributes for Wool" do
    it "is able to get/set title" do
      b = Book.new
      b.title = "A Slight Trick of the Mind"
      expect(b.title).to eq("A Slight Trick of the Mind")
    end

    it "is able to get/set pages" do
      b = Book.new
      b.pages = 528
      expect(b.pages).to eq(528)
    end

    it "is able to get/set author" do
      b = Book.new
      b.author = "Hugh Howey"
      expect(b.author).to eq("Hugh Howey")
    end
  end

  describe "should be able get/set attributes for Station Eleven" do
    it "is able to get/set title" do
      b = Book.new
      b.title = "Station Eleven"
      expect(b.title).to eq("Station Eleven")
    end

    it "is able to get/set pages" do
      b = Book.new
      b.pages = 352
      expect(b.pages).to eq(352)
    end

    it "is able to get/set author" do
      b = Book.new
      b.author = "Emily St. John Mandel"
      expect(b.author).to eq("Emily St. John Mandel")
    end
  end
end
