### Exercise

1. Create a program that allows you to manage a grocery list. The program will consist of three methods.
2. The `add_item` method should take two arguments. The first argument is the item you want to add to the grocery list and the second argument is the array (i.e. grocery list) to which the item will be added. The method should not add duplicates.
3. The `remove_item` method should take two arguments – and item and a list. The method should remove the given item from the given list.
4. The `show_list` method should take an array argument and return it as an array with elements sorted in alphabetical order. If there are two of the same items in the list, remove one of the duplicates.

The completed `add_item` method can be called like this:

```ruby
# add a new item (turkey) to a grocery list
add_item("turkey", ["bread", "mustard", "chips"])
=> ["bread", "mustard", "chips", "turkey"]

# try to add an existing item (pickles) to a grocery list
add_item("pickles", ["bread", "pickles", "mustard", "chips", "turkey"])
=> ["bread", "pickles", "mustard", "chips", "turkey"]
```

The completed `remove_item` method can be called like this:

```ruby
# remove an item (mustard) a grocery list
remove_item("mustard", ["bread", "mustard", "chips", "turkey"])
=> ["bread", "chips", "turkey"]
```

The completed `show_list` method can be called like this:

```ruby
puts show_list(["bread", "pickles", "mustard", "chips", "turkey"])
=> ["bread", "chips", "mustard", "pickles", "turkey"]
```
