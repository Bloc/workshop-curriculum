In this exercise we'll create classes to represent a square, rectangle and circle. Since all three classes are different types of shapes, we'll define a parent class because we assume that they'll share some similar properties. Let's start by defining a parent class and three children:

```ruby
class Shape
end

class Rectangle < Shape
end

class Square < Shape
end

class Circle < Shape
end
```

We need to be able to **get** and **set** the color of each shape. Let's use our parent class to do this efficiently:

```ruby
class Shape
  attr_accessor :color
end

class Rectangle < Shape
end

class Square < Shape
end

class Circle < Shape
end
```

We also want to be able to calculate the area of each shape. Rectangles and squares share the same formula for area (`width * height`), but a circle's area is calculated as `Pi * (radius*radius)`. Since our shapes share two different area formulas amongst them, we can't define an area method in the `Shape` parent class. We'll want to refactor our code, but let's start by defining `area` methods for each child:

```ruby
class Shape
  attr_accessor :color
end

class Rectangle < Shape
  def area
    # width * height
  end
end

class Square < Shape
  def area
    # width * height
  end
end

class Circle < Shape
  def area
    # Pi * (radius*radius)
  end
end
```

The area methods we defined above will require attributes. Let's create getter and setter methods for the attributes needed for the `area` methods:

```ruby
class Shape
  attr_accessor :color
end

class Rectangle < Shape
  attr_accessor :width, :height

  def area
    # width * height
  end
end

class Square < Shape
  attr_accessor :width, :height

  def area
    # width * height
  end
end

class Circle < Shape
  attr_accessor :radius

  def area
    # Pi * (radius*radius)
  end
end
```

We'll also need to `initialize` each class. Remember that each shape must be initialized with a color, which is why we created a `color` getter and setter in the `Shape` class. Let's start with the `initialize` method for `Shape`:

```ruby
class Shape
  attr_accessor :color

  def initialize(color = nil)
    @color = color || 'Red'
  end  
end
```

This allows us to initialize an instance of shape with a defined color. If the color is not provided, we'll default the color to red with a conditional assignment.

Next we'll want to define `initialize` methods for the child classes.

> We use `super` to keep our code DRY.

```ruby
class Shape
  attr_accessor :color

  def initialize(color = nil)
    @color = color || 'Red'
  end  
end

class Rectangle < Shape
  attr_accessor :width, :height

  def initialize(width, height, color = nil)
    @width, @height = width, height
    super(color) # this calls Shape#initialize
  end

  def area
    # width * height
  end
end

class Square < Shape
  attr_accessor :width, :height

  def initialize(width, height, color = nil)
    @width, @height = width, height
    super(color) # this calls Shape#initialize
  end

  def area
    # width * height
  end
end

class Circle < Shape
  attr_accessor :radius

  def initialize(radius, color = nil)
    @radius = radius
    super(color) # this calls Shape#initialize
  end

  def area
    # Pi * (radius*radius)
  end
end
```

Let's review our code. The `Rectangle` and `Square` classes look awfully similar. This is a bad "code smell."

> A code smell is something that just "feels" wrong in its implementation.

Earlier we questioned the relationship between a square and a rectangle, so let's figure out a DRYer way to structure these classes. A square is a more specific type of rectangle (one with equal width and height). This represents a prime candidate for classical inheritance.

Let's make `Square` inherit from `Rectangle`:

```ruby
...

class Square < Rectangle
  def initialize(side, color = nil)
    super(side, side, color) # calls `Rectangle#initialize`
  end
end

...
```

> The `width` and `height` `attr_accessor`s, and the `area` method, are all inherited from `Rectangle` now.

As you can see this is a much DRYer implementation of `Square`.

We've set up a solid class structure for our program, now here's a challenge for you.

We should be able to call a `larger_than?` method on each shape. This method should evaluate two shapes and return `true` or `false` depending on one shape's `area` being larger than the other. In other words, the `larger_than?` method should return `true` if the _receiving object_ is larger than the _argument object_:

```ruby
square.larger_than?(rectangle)
#=> true if the square is larger than the rectangle, false if not
```

> Hint: To find the area of a circle, you can use `Math::PI`. Remember that the area of a circle is calculated as Pi multiplied by the square of the radius. `Math::PI` evaluates to Pi and can be used like any other number in a calculation.

`Math` is actually a module, with `PI` "namespaced" under it. We could `include` Math and reference `PI` directly, or just call `Math::PI` to return the value of Pi. If you're curious, talk to your mentor about using modules for namespaced functionality.
