There's a special object in Ruby named `nil`. Nil is a representation of nothingness. Nil is important in programming because it helps programmers determine the validity of an operation. Type the following:

```ruby
p "Bloc"[7]
```

You should see `nil` returned.

Now try:

```ruby
p "Bloc"[2]
```

You should see `o` returned. To understand these returns, consider two new concepts.

* Square brackets (`[]`) are used in Ruby to reference locations. When you typed `"Bloc"[7]` you instructed Ruby to return the 7th character in the `"Bloc"` string. As you know, this operation returned `nil` because there is no 7th character in the `"Bloc"` string.
* `"Bloc"[2]` returned `o`. You instructed Ruby to return the 2nd character in the `"Bloc"` string, so why didn't it return `l`? The reason is that counting starts at `0` in programming languages. `"Bloc"[0]` would return `B`.

`nil` is different from `0` or a blank string (`""`). `nil` is an object in Ruby that represents nothingness. You can prove that `nil` is an object by assigning it to a variable:

```ruby
nilly = nil

p nilly
```

When you print `nilly`, you should see `nil` as the result.
