<!-- { ids:[], language:'Ruby', type:'workshop', order: 1, name:'Instance Methods', description:'Learn how to create methods for an instance of a class.' }-->

### Objectives

After this exercise you should be able to:

- Explain the scope of an instance method.
- Explain the scope of an instance variable.
- Define an instance method.
- Declare an instance variable.
- Use an instance variable in an instance method.

### Example

[WIP]

The `numbers` and `names` arrays are objects, and they are also **instances** of the `Array` class. In this section, let's focus on the concept of **instances**, rather than the more generic term of object.

Here is a simple example of a class named `Person`. Let's define a `Person` class and then create an instance of it named `arya_stark`:

```ruby
class Person
end

arya_stark = Person.new
```

> Class names in Ruby always start with a capital letter and are [CamelCased](https://en.wikipedia.org/wiki/CamelCase).

An instance is a unique manifestation of a class. For example, `arya_stark` is a type of `Person`, and `arya_stark` is therefore unique. There are other people (i.e. instances of `Person`) that could be created from the `Person` class, but there's only one `arya_stark`.

That's not to say there couldn't be another instance of `Person` with the same name, just as there are surely multiple people named Arya Stark in the world. The important thing is that each instance is unique. For example:

```ruby
class Person
end

arya_stark = Person.new
p arya_stark
#=> #<Person:0x104375690>

arya_stark = Person.new
p arya_stark
#=> #<Person:0x104375618>
```

> The object ID (`#<Person:0x....`) is different each time we create a new `Person` using `Person.new`. That's because each instance of the `Person` class is unique.

When we have an instance of the `Person` class, we can call **instance methods** on this instance. For example, `eat` and `sleep` might be methods we could call on a `Person` instance. Let's define an instance method on our `Person` class, and call it on an individual person instance:

```ruby
class Person
  def eat
    "nom nom nom"
  end
end

arya_stark = Person.new
arya_stark.eat
#=> "nom nom nom"

sansa_stark = Person.new
sansa_stark.eat
#=> "nom nom nom"
```

When an instance of `Person` receives the `eat` message, the `eat` _method_ returns the answer. Because the `eat` method is simple, its instructions are the same regardless of the instance. That is, it instructs every instance that receives it to say, "nom nom nom."


### Exercise

Create a `Book` class with three instance methods:

`set_title(title)` should take an argument and use it to set the `@title` instance variable.

`set_author(author)` should take an argument and use it to set the `@author` instance variable.

Finally, `description` should accept no arguments and return a string formatted as: "Title was written by author" using the `@title` and `@author` instance variables.
