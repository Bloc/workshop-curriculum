<!-- { ids:[75], language:'Ruby', type:'workshop', order: 2, name:'Array Manipulation', description:'Learn how to manipulate arrays with methods.' }-->

### Objectives

After this exercise you should be able to:

- Define a method that takes an array as an argument.
- Understand the difference between calling and receiving a method.
- Understand how to read Ruby documentation.
- Understand how to chain method calls.
- Apply a method that changes an array.

### Example

There are a [variety of array methods](http://ruby-doc.org/core-2.2.0/Array.html) available in Ruby. Once you become comfortable using a few, you'll be able to use them all. Instead of explicitly teaching you methods, we'll teach you how to read the Ruby documentation, and you can practice calling methods in the exercise.

Let's look at the [`delete` method](http://ruby-doc.org/core-2.2.0/Array.html#method-i-delete).

The first thing we see in the documentation for the `delete` method is this: `delete(obj) → item or nil`. This tells us that the `delete` takes an object as an argument, and returns an item, or nothing at all (`nil`). That's a decent start, but that explanation alone doesn't provide the context we need to understand how `delete` works. Take a look at the explanation:

```
Deletes all items from self that are equal to obj. Returns the last deleted item, or nil if no matching item is found.
```

> You'll learn about the concept of "self" soon. For now you can accept that "self" represents the array in which we are calling `delete` on. Another way to say this is that "self" represents the array that is _receiving_ the `delete` method.

From the explanation above we understand that the `delete` method will delete at item (i.e. element) from an array if it is equal to the object (argument) that we passed to it. It will return `nil` if there is no item in the array that matches the object that we passed to it.

Finally, the documentation provides us with a helpful example:

```ruby
a = [ "a", "b", "b", "b", "c" ]
a.delete("b")                   #=> "b"
a                               #=> ["a", "c"]
a.delete("z")                   #=> nil
a.delete("z") { "not found" }   #=> "not found"
```

This example shows us the `delete` method in action. You should recognize the format in this example because it's the same format we use to show you how your exercises should work, once implemented.

Now that we're learning more methods, you should know about **chaining**. In Ruby, we can call multiple methods on the same line of code. Let's look at an example with the `reverse` and `delete` method. If we wanted to reverse an array, and then delete elements from it we could call both methods on separate lines:

```ruby
a = [1,2,3,4]

a.reverse!
=> [4,3,2,1]

a.delete(1)
=> [4,3,2]
```

We called the `reverse` method, received a return, then called the `delete` method on the array returned from `reverse`. We could accomplish the same thing on one line of code:

```ruby
a = [1,2,3,4]

a.reverse.delete(1)
=> [4,3,2]
```

### Exercise

To complete this exercise you'll need to research a few methods in the [Ruby documentation]((http://ruby-doc.org/core-2.2.0/Array.html)). Remember that Ruby is a readable language, and as such many of its methods are common-sensibly named. For example, if you wanted to delete an element from an array, as we discussed above, you'd be wise to search the Ruby documentation for a `delete` method. And of course you know now that Ruby provides such a method. You'll use a few array methods in this exercise – try chaining them to keep your code brief.

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
