# Content Organization

Workshop exercise content falls in three categories:

- Language exercise: an exercise based on a specific programming language, like Ruby, JavaScript, or Clojure.
- Framework exercise: an exercise based on a framework or markup language, like HTML, CSS, Rails, or Angular.
- Session exercise: an exercise that requires the student to have a terminal session, like Unix or Git.

The content for the different exercise types is tracked in the following locations:

- Language exercises are tracked in this repository, in the [`workshop-curriculum`](https://github.com/Bloc/curriculum/tree/master/workshop-curriculum) directory.
- Framework exercises are tracked in a standalone repository, where the exercise's framework is tracked. For example, the Introduction to HTML and CSS Workshop course is tracked in the [`workshop-html-css`](https://github.com/Bloc/workshop-html-css) repository.
- Session exercises are tracked in this repository, in the [`workshop-curriculum`](https://github.com/Bloc/curriculum/tree/master/workshop-curriculum) directory.

Regardless of where the exercise and its content is tracked, the exercise itself is deployed in the [Workshop app](https://workshop.bloc.io). The code for Workshop can be found in the [`Workshop`](https://github.com/Bloc/workshop) repository.

# Language Exercises

Language exercises are comprised of four files:
- `body.md` (required): this is where the exercise objectives and examples are written. There should be two headers for each `body.md` file: ([see complete example](https://github.com/Bloc/curriculum/blob/master/workshop-curriculum/courses/ruby-primer/03-level-conditionals/01-if/body.md)
    - `### Objectives`: state the learning objectives for the exercise using [Bloom's Taxonomy](https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/) and our [approved action words](https://docs.google.com/spreadsheets/d/1yy7IwVvNZoPNb-u-HTYwg4tIStg4z6oSmhRMsHWTerc/edit#gid=350932233).
    - `### Example`: provide instruction and examples that will help the student complete the exercise. Do not give away the answer.
- `instructions.md` (required): this is where the exercise instructions are written. Instructions should be numbered, brief, and explicit. See the Exercise Instructions example below.
- `solution.rb` (required, file extension depends on the language): this is where the canonical solution (as deemed by the exercise's author) is written. The solution must pass all of the specs defined for the exercise.
- `spec.rb` (required, file extension depends on the language): this is where the specs for the exercise are written. The specs should cover every case for the exercise, and when passed, should ensure a working solution.
- `starting_code.rb` (optional, file extension depends on the language): this is used for providing students with defauly code to start the exercise.

# Framework Exercises

TODO

# Session Exercises

TODO

# Exercise Instructions

The following structure should be used for Exercise Instructions ([see example](https://github.com/Bloc/curriculum/blob/master/workshop-curriculum/courses/ruby-primer/03-level-conditionals/01-if/body.md#exercise):

1. State the method / function to be defined
2. State the arguments the method should take
3. State what the method should return
4. Add details for the method's implementation, as necessary
5. Show an example of the implemented method being called.
6. Add any notes, if necessary.

Here's an example for a Numbers exercise in the Ruby Primer course:

1. Define a method named `fun_with_math`.
2. The method should take four number arguments.
3. The method should return a number that has been calculated as follows:

    - Add the first argument to the second argument.
    - Subtract the third argument from the sum of the first two arguments.
    - Multiply the result of the two operations above by the fourth argument.

The completed method can be called like this:

```ruby
puts fun_with_math(4,3,2,1)
=> 5
```

Here's an example for a Strings exercise in the Ruby Primer course:

1. Define a method named `reverse_me`.
2. The method should take a string as an argument.
3. The method should return the string in reverse order.

The completed method can be called like this:

```ruby
puts reverse_me("Daenerys Targaryen")
=> "neyragraT syreneaD"
```

As a coder, a big part of your job is to read technical documentation, also known as APIs. The Ruby language – all of its data types and their methods – are documented. Even seasoned coders refer to documentation. To complete this exercise, view [Ruby's string methods](http://ruby-doc.org/core-2.2.0/String.html) and find one that will reverse a string. You can call this method inside of `reverse_me`. As a hint, Ruby methods are [very well-named](http://ruby-doc.org/core-2.2.0/String.html#method-i-reverse).
