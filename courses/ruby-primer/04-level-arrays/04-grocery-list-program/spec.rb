describe "add_item" do
  it "adds an item to the end of the list" do
    expect( add_item("banana", ["orange"]) ).to eq(["orange", "banana"])
  end
  it "doesn't add an item if the list already has it" do
    expect( add_item("orange", ["orange"]) ).to eq(["orange"])
  end
end

describe "remove_item" do
  it "removes an item if it's in the list" do
    expect( remove_item("orange", ["banana", "orange"]) ).to eq(["banana"])
  end
  it "removes an item if it's in the list" do
    expect( remove_item("banana", ["banana", "orange"]) ).to eq(["orange"])
  end
  it "doesn't remove an item if it's not in the list" do
    expect( remove_item("apple", ["banana", "orange"]) ).to eq(["banana", "orange"])
  end
end

describe "show_list" do
  it "returns a list sorted" do
    list = %w{3 1 2}
    list_sorted = %w{1 2 3}
    expect( show_list(list) ).to eq(list_sorted)
  end
  it "doesn't modify the original list" do
    list = %w{banana orange apple}
    duplicate = list.dup
    list_sorted = %w{apple banana orange}

    expect( show_list(list) ).to eq(list_sorted)
    expect( list ).to eq( duplicate )
  end
  it "returns a list sorted without duplicates" do
    list = %w{banana orange apple orange}
    list_sorted = %w{apple banana orange}
    expect( show_list(list) ).to eq(list_sorted)
  end
end
