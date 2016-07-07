To this point, you've written code as individual and standalone lines of syntax. If you wanted to reuse a line of code in this respect, you'd have to type it in again. In programming, methods (often called functions) allow you to write code for reuse. To cause the same behavior, you "call" the method. Before exploring methods, note two common terms used around methods in programming:

* **Call** - run or execute a method.
* **Define** - compose or write a method.

Method definition requires a specific structure in Ruby. Write your first Ruby method by typing:

```ruby
def hello
  "Hello world"
end
```

> Indentation is __extremely__ important, and an early investment in practicing it will pay off quickly in code clarity and speed of bug-catching. Rather than enumerate rules, we'll model good indentation throughout the program. You should strive to follow suit.

In Ruby, a method definition begins with `def` and ends with `end`. `def` stands for "define" and initiates a section of code, which, in the case above is `"Hello world"`.

The name of our method is `hello`. The method name is whatever word is placed to the right of `def`. To call (i.e. execute) a method, you type the name of the method. By calling the method after `p` you are instructing the computer to execute the code written in the `hello` method, and print it to the screen with `p`.

```ruby
p hello
```

When you write in a professional code editor (like Atom, which we'll show you later) the lines of code will be numbered for you. When we refer to the length of a method, we calculate the lines between `def` and `end`. For example, the `return_three` method below contains three lines of code. Type the following method in the console:

```ruby
def return_three
  a = 1
  b = 2
  a + b
end
```

In this example `a = 1` is the first line of code and `a + b` is the last line of code. In Ruby, the last line of code in the method is automatically returned by the method. That is, when you call the method `return_three` it will return `3`. Try it out:

```ruby
p return_three
```

### Interacting with Methods

You can interact with methods by providing them with information. Consider two more method terms:

* **Argument** - information given to a method.
* **Pass** - provide a method with information (an argument).

There are two arguments passed to the method below. The arguments are named `a` and `b`. Type the following in the console:

```ruby
def add(a,b)
  a + b
end
```

Arguments are variables that can be used within the method. Notice how you used the `a` and `b` arguments in the method as variables. A method can have any number of arguments, or no arguments at all (as you've seen already).

### Naming Conventions

Methods and arguments, just like variables, can technically be named almost anything, though they must start with a letter. That being said, you should always strive to make your code easy to comprehend. You should therefore use method and argument names that provide a context of their purpose. For example, it's easy to understand what the `add` method's purpose is.

> Convention is extremely important in programming, and various languages have conventions for variable and method names. In Ruby, both are generally composed of lower-case words, connected with underscores: `my_method_or_variable_name`.

Long method names are fine (and are actually quite common in Rails), but you shouldn't go overboard. For example, it's probably not necessary to name the above `add` method `add_two_numbers_together`. The more you code, the better you will become at naming methods and arguments.

### More on Arguments

Try calling the `add` method a few times with arguments. Think about how the `a` and `b` arguments are replaced with the numbers specified as arguments.

```ruby
p add(1,2)
p add(4,5)
p add(7,7)
```

By passing numbers to `add` as arguments, you are dictating the return of the method. You can see how this is much easier than coding individual lines to add two numbers together. Once the method is written, it can be reused at any time with different arguments.

Arguments don't need to be of the same type. For example, the method below takes three different types of arguments. (`String`, `Integer`, `Float`)

```ruby
# num = number of times compounded
def compound_interest(name, principal, rate, years, num)
  amount = principal * (1 + rate/num) ** (num * years)
  "After #{years} years, #{name} will have #{amount} dollars!"
end

p compound_interest("Bob", 100, 0.05, 40, 12)
p compound_interest("Joe", 250, 0.06, 50, 12)
```

> Explicitly named variables make this method's parameters relatively easy to comprehend. That `num` variable isn't very helpful, though, necessitating the comment above the method. In Ruby, it's considered a "best practice" to use comments _only when necessary_, instead relying on clear method and variable names. How would you rename `num`?


### Practice

When you start building web apps, you'll use HTML to render information in a browser. For example, an HTML link to Google looks like this:

```html
<a href="http://google.com">Google</a>
```

The HTML code above will cause the browser to render a hyperlink that looks like this:

<a href="http://google.com">Google</a>

Create a method named `link` which takes two arguments named `address` and `text`. The method should use these two arguments to return the HTML code needed to render a clickable link.

> Hint: Your solution will look similar to the last line of code in the `compound_interest` method definition where we are "interpolating" variables into a string.

A properly implemented `link` method should be called like this:

```ruby
p link("https://www.mysite.com", "My Site!")
```

and would print this:

```html
"<a href='https://www.mysite.com'>My Site!</a>"
```

### Implied parentheses

Ruby syntax allows for "implied parentheses", meaning that the Ruby interpreter will assume that `method argument` means `method(argument)`. Remember how we said `p` is really just a Ruby method? That means that when you call `p "Something"`, you're really calling `p("Something")`.

In the console below your definition of the `link` method, print the result of the link method, using `p` and "explicit" parentheses.
