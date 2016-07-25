### Exercise

To complete this exercise you'll need to research a few methods in the [Ruby documentation](http://ruby-doc.org/core-2.2.0/Array.html). Remember that Ruby is a readable language, and as such many of its methods are common-sensibly named. For example, if you wanted to delete an element from an array, as we discussed above, you'd be wise to search the Ruby documentation for a `delete` method. And of course you know now that Ruby provides such a method. You'll use a few array methods in this exercise – try chaining them to keep your code brief.

1. Define a method named `countries_visited`.
2. The method should take an array argument consisting of the countries you've visited. If you've visited a country more than once, you must repeat it in the array for as many times as you've been there. If you've never been outside your home country, the array argument should contain no elements.
3. The method should return an array which is a **unique** list of the countries you've visited in **alphabetical order**. No country in the return array should be repeated more than once.
4. The method should return a string that reads `"You really need to travel more!"` if you've never been outside of your home country.

The completed method can be called like this:

```ruby
puts countries_visited(["USA", "France", "Germany", "Poland", "South Korea", "Ghana", "Germany", "South Korea"])
=> ["France", "Germany", "Ghana", "Poland", "South Korea", "USA" ]

puts countries_visited([])
=> "You really need to travel more!"
```
