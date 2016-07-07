<!-- { ids:[], language:'Ruby', type:'workshop', order: 0, name:'Class Definition', description:'Learn how to define a class.' }-->

### Objectives

After this exercise you should be able to:

- Understand that a class is a blueprint for an object type.
- Understand that a class defines the behavior and properties for an object type.
- Define a class.

### Example

Strings, numbers, booleans, and arrays are all objects in Ruby. We can create many different strings, numbers, booleans, and arrays, and while they may be quite different in appearance, they also have a lot in common. Let's look at the following strings:

```ruby
my_favorite_superhero = "Wonder Woman"
my_second_favorite_superhero = "Batman"
```

The two strings above are different in their value, but they are very much alike in terms of their behavior. For example, we can call the `length` method on both of them:

```ruby
my_favorite_superhero.length
=> 12

my_second_favorite_superhero.length
=> 6
```

The reason the two different strings can share the same behavior is because they belong to the same class – the String class. Classes are blueprints that define the behavior and properties for an object. Strings, booleans, numbers, and arrays are all classes. When we work with a specific string, boolean, number, or array, we are working with an **instance** of the class. The blueprint defines the behavior and properties that will be common to all instances of the class.

Classes are defined like this:

```ruby
class Car

end
```

We can add a method to a class:

```ruby
class Car
  def axels(num_of_wheels)
    num_of_wheels / 2
  end
end
```

The `axels` method will always return the number of wheels divided by two. We could create many instances of `Car`, but they would all share the same `axels` method.

### Exercise

1. Define a class named `Dog`.
2. Define a method in `Dog` named `bark`.
3. The method should return the string `"RUFF RUFF!"`.

The completed method can be called like this:

```ruby
my_dog = Dog.new
my_dog.bark
=> "RUFF RUFF!"
```
