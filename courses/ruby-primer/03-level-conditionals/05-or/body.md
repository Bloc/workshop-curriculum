<!-- { ids:[70], language:'Ruby', type:'workshop', order: 4, name:'Or Operator', description:'Learn how to refine a condition using the or operator.' }-->

### Objectives

After this exercise you should be able to:

- Describe the `or` operator.
- Apply the `or` operator in an `if` expression.

### Example

In the previous exercise, you learned how to check for multiple conditions and whether both evaluated to `true`. In some cases, our code only needs _one_ of the conditions to evaluate to `true` before we execute it. Let's toss those moldy apples into the trash and talk about television!

```ruby
def should_i_watch_tv?(im_bored, my_show_is_on, the_tv_is_posessed)
  if im_bored
    true
  elsif my_show_is_on
    true
  elsif the_tv_is_posessed
    true
  else
    false
  end
end
```

In this example, three conditions result in the same return statement (the same work), so we can shorten the whole method using the "or" operator:

```ruby
def should_i_watch_tv?(im_bored, my_show_is_on, the_tv_is_posessed)
  if im_bored || my_show_is_on || the_tv_is_posessed
    true
  else
    false
  end
end
```

If you're bored, or if your favorite show is on, or if the tv is posessed by demons and you can't turn it off, then you should watch the TV. Otherwise, you don't watch because you have better things to do. The or operator (`||`) evaluates to `true` as long as either the left or right statement is true.

| Left | Right | Or Result |
| :-- | :-- | :-- |
| False | False | False |
| False | True | True |
| True | False | True |
| True | True | True |