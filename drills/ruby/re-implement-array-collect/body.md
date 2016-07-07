Open the Array class and create a `new_collect` method. This method should do the same thing as the original `collect` method.

As a point of reference, here's how we re-implemented the `each`method:

```
class Array
  def new_each
    0.upto(self.length - 1) do |index|
      yield self[index]
    end
  end
end
```
