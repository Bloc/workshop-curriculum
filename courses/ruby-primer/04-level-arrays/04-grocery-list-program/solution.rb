def add_item(item, list)
  list << item unless list.include?(item)
  list
end

def remove_item(item, list)
  list.delete(item)
  list
end

def show_list(list)
  list.uniq.sort
end
