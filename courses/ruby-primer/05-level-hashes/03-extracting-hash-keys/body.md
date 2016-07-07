<!-- { ids:[90], language:'Ruby', type:'workshop', order: 2, name:'Extracting Hash Keys', description:'Learn how to extract a key from a hash.' }-->

### Objectives

After this exercise you should be able to:

- Explain the hash keys method.
- Apply the hash keys method.

### Example

Review the [hash keys](http://ruby-doc.org/core-2.3.0/Hash.html#method-i-keys) method in the Ruby documentation.

### Exercise

1. Define a method named `my_keys`.
2. The method should take a hash argument.
3. The method should return an array of the hash's keys.

The completed method can be called like this:

```ruby
puts my_keys( { name: "Computer", cost: "$1,000" } )
=> [:name, :cost]
```
