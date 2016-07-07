describe InWords do
  it "has an in_words method" do
    class TestClass
      include InWords
    end
    TestClass.new.should respond_to(:in_words)
  end
end

describe Fixnum do
  describe "in_words" do
    it "translates numbers less than ten" do
      4.in_words.should eq("four")
    end
    it "translates the teens" do
      17.in_words.should eq("seventeen")
    end
    it "translates numbers 20 through 99" do
      47.in_words.should eq("forty seven")
    end
    it "translates numbers 100 through 999" do
      206.in_words.should eq("two hundred six")
      613.in_words.should eq("six hundred thirteen")
      992.in_words.should eq("nine hundred ninety two")
    end
  end
end
