<!-- { ids:[21], language:'Ruby', type:'workshop', name:'Getters and Setters', description:'Set and retrieve attributes from a class instance using convenience methods.' }-->

As we learned in the checkpoint, **getter** and **setter** methods can access attributes of a class instance.

Let's explore another example as a refresher. Below we define two methods in the `Car` class. The `color=(c)` method **sets** the `@color` instance variable, and the `color` method **gets** the `@color` instance variable. The last two lines of code below demonstrate how the getter and setter methods are used on the `ferrari` instance of the `Car` class:

```ruby
class Car
  def color=(c)
    @color = c
  end

  def color
    @color
  end
end

ferrari = Car.new

ferrari.color = "Red" # setter
ferrari.color         # getter
#=> "Red"
```

The `=` in `color=(c)` makes the setter method more idiomatic. The Ruby interpreter lets you put a space between the equal sign and the method. The following two lines are equivalent.

```ruby
ferrari.color=("Red")
ferrari.color = "Red"
```

> Most Rubyists prefer the latter syntax with the extra spaces.

To complete this exercise, rewrite your `Book` class from the previous exercise. The new `Book` class should have attributes to describe its `title`, number of `pages`, and `author`.

These instance variables should be settable and gettable.
