<!-- { ids:[89], language:'Ruby', type:'workshop', order: 1, name:'Merging Hashes', description:'Learn how to merge two hashes.' }-->

### Objectives

After this exercise you should be able to:

- Explain the hash merge method.
- Apply the hash merge method.

### Example

Review the [hash merge](http://ruby-doc.org/core-2.3.0/Hash.html#method-i-merge) method in the Ruby documentation.

### Exercise

1. Define a method named `merge_us`.
2. The method should take two hash arguments.
3. The method should combine the two hash arguments and return a single hash.

The completed method can be called like this:

```ruby
puts merge_us( { name: "Computer", cost: "$1,000" }, { first_name: "Bob", age: 34 } )
=> { name: "Computer", cost: "$1,000", first_name: "Bob", age: 34 }
```
