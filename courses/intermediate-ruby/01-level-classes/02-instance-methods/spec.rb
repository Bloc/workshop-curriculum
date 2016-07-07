describe "Book" do
  describe "setters" do
    it "responds to #set_title" do
      expect(Book.new).to respond_to(:set_title)
    end

    it "sets @title" do
      book = Book.new
      book.set_title("Z for Zachariah")
      expect(book.instance_variable_get(:@title)).to eq("Z for Zachariah")
    end

    it "responds to #set_author" do
      expect(Book.new).to respond_to(:set_author)
    end

    it "sets @author" do
      book = Book.new
      book.set_author("Robert C. O'Brien")
      expect(book.instance_variable_get(:@author)).to eq("Robert C. O'Brien")
    end

  end

  describe "#description" do
    it "returns the correct title and author" do
      book = Book.new
      book.set_title("Railsea")
      book.set_author("China Miéville")

      expect(book.description).to eq("Railsea was written by China Miéville")
    end

    it "returns the correct title and author" do
      book = Book.new
      book.set_title("The Tombs of Atuan")
      book.set_author("Ursula Le Guin")

      expect(book.description).to eq("The Tombs of Atuan was written by Ursula Le Guin")
    end
  end
end
