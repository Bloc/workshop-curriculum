describe Array do
  describe "#new_count" do
    let(:array) { [1,2,3,4,5] }

    it "counts the elements in an array which result in true from a block" do
      proc = Proc.new { |item| item > 3 }
      array.new_count(&proc).should eq(array.count(&proc))
    end

    it "returns 0 for an empty block" do
      array.new_count {}.should eq(0)
    end

    it "returns 0 if the block yields false" do
      array.new_count { false }.should eq(0)
    end

    it "returns the size of the array if the block yields true" do
      array.new_count { true }.should eq(array.length)
    end

    it "doesn't call Array#count" do
      array.should_not_receive(:count)

      array.new_count {}
    end

    it "doesn't call the block for an empty array" do
      expect {
        [].new_count { raise "BOOM" }
      }.to_not raise_error
    end
  end
end
