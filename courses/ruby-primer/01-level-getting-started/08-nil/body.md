<!-- { ids:[60], language:'Ruby', type:'workshop', order: 7, name:'Nil', description:'Learn the concept of nothingness in programming.' }-->

### Objectives

After this exercise you should be able to:

- State the concept of nil.
- Describe if an object is nil.

### Example

There's a special data type in Ruby known as `nil`. Nil is a representation of nothingness. Nil is important in programming because it helps programmers determine the validity of an operation. Review the following statement:


```ruby
puts "Bloc"[7]
```

We are using bracket notation to refer to a character in the string "Bloc". This – `[7]` tells Ruby to return the 8th character in the string.

> It's asking for the 8th, not the 7th, because counting in programming starts at `0`. For example, `"Bloc"[0] would return "B"`.

But there is no 8th character in the string "Bloc" – that particular string only has four characters. Since we are asking Ruby to return a value for which nothing exists, the result in `nil`.

`nil` is different than `0` or a blank string (`""`). `nil` represents nothingness.
