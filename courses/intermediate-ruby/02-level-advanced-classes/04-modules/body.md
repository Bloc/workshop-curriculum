Ruby provides **modules** as a way to group methods for use across classes. Modules are useful when a group of methods apply generically to classes that are otherwise unrelated.

Consider the following module:

```ruby
module Location
  attr_accessor :x, :y

  def set_location(x,y)
    @x, @y = x, y
  end

  def distance_to(other)
    dx = self.x - other.x
    dy = self.y - other.y
    Math.sqrt(dx ** 2 + dy ** 2)
  end

  def wurr_u_at
    puts "#{self.name} is at (#{x},#{y})"
  end
end
```

Location data may apply to people or places, so we can use the `Location` module in the following classes:

```ruby
class Person
  attr_accessor :name

  include Location
end

class City
  include Location
end
```

In the `Person` and `City` classes above, we `include` the `Location` module. This is known as a **mixin** and is one of the two primary advantages of using modules. By mixing in the `Location` module, the `Person` and `City` classes gain access to the methods defined in the `Location` module:

```ruby
a = Person.new
a.name = "Georgia"
a.set_location(2,3)

b = City.new
b.x = 5
b.y = 7

a.distance_to(b)
#=> 5.0

a.wurr_u_at
#=> "Georgia is at (2,3)"

b.wurr_u_at
#=> NoMethodError: undefined method `name' for #<City:0x007fdc23981b90>
```

> Does it seem like a good idea that our `Location` module relies on a specific attribute (`name`) in every class into which it is included? Why or why not?

The `Person` and `City` classes otherwise have nothing in common, that is, they do not inherit from one or the other. They are simply two classes that need to access the same location-specific methods.

***

Let's build upon the solution from the Super exercise. Create a module called `Owner`. `Owner` should have a method `set_new_balance(balance, months, interest_amount)` that sets the new balance of the account. It multiples the number of months that have accrued by the interest amount, adds it to the balance, and returns the new balance.

Let's also create a method `simple_interest` that takes no parameters. Both `SavingsAccount` and `CheckingAccount` should implement `simple_interest`. Interest on a `CheckingAccount` is $10 each month and accrues every three months. Interest on a `SavingsAccount` is $5 each month and accrues every six months.  Use `set_new_balance` (the method you defined in your `Owner` module) in your `simple_interest` methods to set the new balance on the account.
