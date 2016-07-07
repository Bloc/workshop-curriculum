describe Array do
  describe "new_collect" do
    it "collects the output of a block in an array" do
      my_friends = ["Sally", "Mary", "Joe"]
      expected_strings = ["I love Sally.", "I love Mary.", "I love Joe."]
      my_strings = my_friends.new_collect { |friend| "I love " + friend + "." }
      my_strings.should eq(expected_strings)
    end

    it "adds 1 to each element in an array" do
      [1,2,3].new_collect { |a| a + 1 }.should eq([2,3,4])
    end

    it "maps everything to nil" do
      [1,2,3].new_collect { nil }.should eq([nil, nil, nil])
    end

    it "maps classes" do
      [1, 'cat', 1..1].map { |e| e.class }.should eq([Fixnum, String, Range])
    end

    it "maps everything to nil if given an empty block" do
      [1,2,3].new_collect {}.should eq([nil, nil, nil])
    end

    it "doesn't call Array#map or Array#collect" do
      array = [1,2,3]

      array.new_collect { |a| a + 1 }
    end
  end
end
