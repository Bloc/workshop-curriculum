# Content Organization

Workshop exercise content falls in two categories:

- Language exercise: an exercise based on a specific programming language, like Ruby, JavaScript, or Clojure.
- Repo exercise: an exercise based on a framework or markup language, like HTML, CSS, Rails, or Angular.

The content for the different exercise types is tracked in the following locations:

- Language exercises are tracked in the [`/courses`](https://github.com/Bloc/workshop-curriculum/tree/master/courses) directory of this repository
- Repo exercises are tracked in standalone repositories, which are automatically cloned when users start these courses.

> For example, the Introduction to HTML and CSS Workshop course is tracked in the [`workshop-html-css`](https://github.com/Bloc/workshop-html-css) repository.

All exercises are deployed to the [Workshop app](https://workshop.bloc.io) and the code for Workshop can be found in the [`Workshop`](https://github.com/Bloc/workshop) application repository.

# Language Exercises

Language exercises are comprised of five files:
- `body.md` (required): this is where the exercise objectives and examples are written. There should be two headers for each `body.md` file:
    - `### Objectives`: state the learning objectives for the exercise using [Bloom's Taxonomy](https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/) and our [approved action words](https://docs.google.com/spreadsheets/d/1yy7IwVvNZoPNb-u-HTYwg4tIStg4z6oSmhRMsHWTerc/edit#gid=350932233).
    - `### Example`: provide context and examples that will help the student complete the exercise. Do not give away the answer.
- `instructions.md` (required): this is where the exercise instructions are written. Instructions should be numbered, brief, and explicit. See the [Exercise Instructions](https://github.com/Bloc/workshop-curriculum/blob/master/CONTRIBUTING.md#exercise-instructions) section for a detailed example.
- `solution.rb` (required, file extension depends on the language): this is where the canonical solution (as deemed by the exercise's author) is written. The solution must pass all of the specs for the exercise.
- `spec.rb` (required, file extension depends on the language): this is where the specs for the exercise are written. The specs should cover every case for the exercise, and when passed, should ensure a working solution.
- `starting_code.rb` (optional, file extension depends on the language): this is used for providing students with default code to start the exercise.

# Repo Exercises

Standalone repositories contain exercises, specs, and other content for Repo Exercises. [Snoop](https://github.com/Bloc/snoop) automatically clones these repos when a student starts one of these courses.

Repo courses require the following:

- An open-source repository created under the Bloc GitHub account.
    > Ask [Mike](mailto:mike@bloc.io) to create a new repository if you want to start a new course.
- A [`/body`](https://github.com/Bloc/workshop-html-css/tree/master/body) directory which tracks Markdown files. A Markdown file represents one exercise.
    - A Markdown file in the `/body` directory should have the following:
        - `### Objectives`: state the learning objectives for the exercise using [Bloom's Taxonomy](https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/) and our [approved action words](https://docs.google.com/spreadsheets/d/1yy7IwVvNZoPNb-u-HTYwg4tIStg4z6oSmhRMsHWTerc/edit#gid=350932233).
        - `### Example`: provide context and examples that will help the student complete the exercise. Do not give away the answer.
        - `### Exercise`: this is where the exercise instructions are written. Instructions should be numbered, brief, and explicit. See the [Exercise Instructions](https://github.com/Bloc/workshop-curriculum/blob/master/CONTRIBUTING.md#exercise-instructions) section below for a detailed example.
- A [`/spec`](https://github.com/Bloc/workshop-html-css/tree/master/spec) directory which tracks spec files. A spec file cooresponds to a specific exercise.
- A [Docker file](https://github.com/Bloc/workshop-html-css/blob/master/Dockerfile) which builds a container for the user.
- A [`LICENSE`](https://github.com/Bloc/workshop-html-css/blob/master/LICENSE.md). A repo course repository should have an MIT license.
- A [`README`](https://github.com/Bloc/workshop-html-css/blob/master/README.md) which provides a brief description of the course and where to find it in the Workshop platform.
- A [`workshop.json`](https://github.com/Bloc/workshop-html-css/blob/master/workshop.json) file which specifies the directories that a user should _not_ see in their file navigator in the Workshop platform.

# Exercise Instructions

The following structure should be used for Exercise Instructions ([see example](https://github.com/Bloc/curriculum/blob/master/workshop-curriculum/courses/ruby-primer/03-level-conditionals/01-if/body.md#exercise):

1. State the method / function to be defined
2. State the arguments the method should take
3. State what the method / function should return
4. Add details for the method's / function's implementation, as necessary
5. Show an example of the implemented method / function being called.
6. Add any notes, if necessary.

## Exercise Example 1

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
***

## Exercise Example 2

1. Define a method named `reverse_me`.
2. The method should take a string as an argument.
3. The method should return the string in reverse order.

The completed method can be called like this:

```ruby
puts reverse_me("Daenerys Targaryen")
=> "neyragraT syreneaD"
```

As a coder, a big part of your job is to read technical documentation, also known as APIs. The Ruby language – all of its data types and their methods – are documented. Even seasoned coders refer to documentation. To complete this exercise, view [Ruby's string methods](http://ruby-doc.org/core-2.2.0/String.html) and find one that will reverse a string. You can call this method inside of `reverse_me`. As a hint, Ruby methods are [very well-named](http://ruby-doc.org/core-2.2.0/String.html#method-i-reverse).
