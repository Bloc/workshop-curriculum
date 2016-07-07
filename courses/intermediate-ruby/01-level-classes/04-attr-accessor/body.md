<!-- { ids:[22], language:'Ruby', type:'workshop', name:'Attr Accessor', description:'Use a single convenience method to create methods for setting and retrieving attributes from a class instance.'}-->

As you know from completing the previous exercise, it is tedious to write numerous getter and setter methods. Getter and setter methods are so common that Ruby provides a shortcut to create them. The `attr_accessor` method creates a getter and setter method based on an argument. You pass `attr_accessor` a `Symbol`:

```ruby
class Square
  attr_accessor :size
end

s = Square.new
s.size = 10   # This is the setter
s.size        #=> 10 # This is the getter
```

We now have getter and setter methods for `size`, because we called:

```ruby
  attr_accessor :size
```

The `size=()` and `size` methods are dynamically generated when we add
`attr_accessor :size` to `Square`.

> Behold the magic of Ruby! It's actually not magic but "dynamic programming", which we'll cover later.

To complete this exercise, create a `Playlist` class. It should have attributes for `name`, `author`, and `song_list`. These attributes should be readable and writable.
