Let's re-implement the `each` method. To re-implement means to re-create the original method and it's functionality. Re-implementation is a great exercise that will help you truly understand how the method works.

```
class Array
  def new_each
    0.upto(self.length - 1) do |index|
      yield self[index]
    end
  end
end

["peanut", "butter"].new_each do |element|
  puts element
end
```

This might take some time to understand. Make sure you review this with a mentor if you have trouble understanding how this works.
