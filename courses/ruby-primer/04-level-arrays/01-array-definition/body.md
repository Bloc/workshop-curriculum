<!-- { ids:[74], language:'Ruby', type:'workshop', order: 0, name:'Array Definition', description:'Learn how to identify an array and use it in a method.' }-->

### Objectives

After this exercise you should be able to:

- Describe an array.
- Apply an array based on a method's arguments.
- Apply an array as the return value in a method.

### Example

As a coder you'll work with many different types of data. These types of data, also known as objects, come in different forms and have different capabilities. Strings and numbers represent a single object. An array represents a collection of objects stored in specific order. The following is an array of fruits:

![Array](https://bloc-global-assets.s3.amazonaws.com/screencaps/array.png)

When we're referring to objects in an array, we call them elements, and each element in an array has an index. The index represents the element's position. To retrieve an element we use brackets to specify the position.

> Remember that counting starts at 0 in coding, so the first element of an array would have an index of 0.

```ruby
fruits = ["apple", "banana", "orange"]

# return the first element of the fruits array.
fruits[0]
=> "apple"

# return the third element of the fruits array.
fruits[2]
=> "orange"
```

Ruby provides a variety of array methods, some of which can be used in place of an index:

```ruby
fruits = ["apple", "banana", "orange"]

# return the first element of the fruits array.
fruits.first
=> "apple"

# return the last element of the fruits array.
fruits.last
=> "orange"
```

We can build an array from scratch:

```ruby
# create an empty array.
fruits = []

# add an element
fruits[0] = "grapes"

# add another element
fruits[1] = "watermelon"

# add an element using the "shovel" operator. Note that we do not need to specify the index, because the shovel appends the element to the end of the array by default.
fruits << "blueberry"

# print the array we just created
puts fruits
=> ["grapes", "watermelon", "blueberry"]
```

Arrays can mix object types. For example, an array can hold a combination of strings, numbers and even other arrays:

```ruby
multi_object_collection = []
multi_object_collection[0] = "apple"
multi_object_collection[1] = 17
multi_object_collection << ["hello", 3]

multi_object_collection
=> ["apple", 17, ["hello", 3]]
```
