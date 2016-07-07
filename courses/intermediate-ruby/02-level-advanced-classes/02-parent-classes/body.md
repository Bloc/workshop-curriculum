<!-- { ids:[10], language:'Ruby', type:'workshop', name:'Advanced Classes: Good Parents', description:'Practice writing super objects in Ruby.' }-->

Parent classes should be as generic as possible. That is, they should be able to describe a broad range of things. A simple example of a class that lends itself to parenthood is a class named `Dog`. The purpose of this class will be to define the general attributes and behavior that **all** dogs share, regardless of breed. Attributes like having a name, four legs, two eyes, and a tail are shared amongst all dog breeds. Behavior like eating, sleeping, and barking are also shared amongst all dog breeds.

Let's explore inheritance in action by defining a `Dog` class. First we'll initialize the `Dog` class with a `name` attribute:

```ruby
class Dog

  attr_accessor :name

  def initialize(name)
    @name = name
  end
end
```

Let's define a method in the `Dog` class named `speak`. It returns a string with the dog's name:

```ruby
class Dog

  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def speak
    "Ruff, my name is #{ @name }."
  end
end
```

> It's important to visualize relationships as we're defining classes. For example, we created the `Dog` class expecting to create child classes for different breeds of dogs. In this respect, the `name` attribute declared in the `Dog` class will make sense when applied to any child class. Our program is assuming that all dogs, regardless of breed, should have names.

Now let's create a child class of `Dog`:

```ruby
class Mutt < Dog
end
```

Because `Mutt` inherits from `Dog`, it automatically has _all_ functionality and attributes defined on `Dog`. This includes the `initialize` method we wrote. Unless we want to set additional attributes during initialization of a `Mutt`, `Mutt` will automatically use the `initialize` method from its "parent" class.

```ruby
# After our two class definitions

d = Dog.new('Johnny')
d.name
#=> 'Johnny'

m = Mutt.new('Jimbo')
m.speak
#=> "Ruff, my name is Jimbo."
```

***

Create a `Apple` class. It should take a single argument on initialization, a boolean value (`true` or `false`) asserting whether or not the `Apple` is `ripe`. `Apple` should define a `tasty?` instance method that returns "Yes" when ripe and "Not yet" when not.

Below it, create a `Fuji` class which inherits from `Apple` and adds two methods:

- `flavor` returns "Sweet" if ripe and "Tart!" if not.
- `color` returns "Yellowish red" if ripe and "Green" if not.

Your class should work like this:

```ruby
not_ready = Fuji.new(false)
not_ready.tasty?
#=> "Not yet"

not_ready.color
#=> "Green"

ready = Fuji.new(true)
ready.flavor
#=> "Sweet"
```

> Bonus - use `attr_accessor`, the inherited `initialize` method, and the implied `self` to avoid directly using any instance (`@`) variables in the `Fuji` class.
