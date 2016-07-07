describe Dictionary do
  before do
    @english = Dictionary.new
  end

  it 'is empty when created' do
    @english.entries.should eq({})
  end

  it 'can add whole entries with keyword and definition' do
    @english.add('fish' => 'aquatic animal')
    @english.entries.should eq({'fish' => 'aquatic animal'})
    @english.keywords.should eq(['fish'])
  end

  it 'add keywords (without definition)' do
    @english.add('fish')
    @english.entries.should eq({'fish' => nil})
    @english.keywords.should eq(['fish'])
  end

  it 'can check whether a given keyword exists' do
    @english.include?('fish').should be_false
  end

  it "counts nil entries when checking for inclusion" do
    @english.include?('fish').should be_false # if the method is empty, this test passes with nil returned
    @english.add('fish')
    @english.include?('fish').should be_true # confirms that it actually checks
    @english.include?('bird').should be_false # confirms not always returning true after add
  end

  it "doesn't include a prefix that wasn't added as a word in and of itself" do
    @english.add('fish')
    @english.include?('fi').should be_false
  end

  it "doesn't find a word in empty dictionary" do
    @english.find('fi').should be_empty
  end

  it 'finds nothing if the prefix matches nothing' do
    @english.add('fiend')
    @english.add('great')
    @english.find('nothing').should be_empty
  end

  it "finds an entry" do
    @english.add('fish' => 'aquatic animal')
    @english.find('fish').should eq({'fish' => 'aquatic animal'})
  end

  it 'finds multiple matches from a prefix and returns the entire entry (keyword + definition)' do
    @english.add('fish' => 'aquatic animal')
    @english.add('fiend' => 'wicked person')
    @english.add('great' => 'remarkable')
    @english.find('fi').should eq({'fish' => 'aquatic animal', 'fiend' => 'wicked person'})
  end

  it 'lists keywords alphabetically' do
    @english.add('zebra' => 'African land animal with stripes')
    @english.add('fish' => 'aquatic animal')
    @english.add('apple' => 'fruit')
    @english.keywords.should eq(["apple", "fish", "zebra"])
  end
end
