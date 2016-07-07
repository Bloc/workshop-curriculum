A good place to start with a new programming language is to write a `hello world` program. The text area on this page is a console running a Ruby interpreter, which understands Ruby code.

To create a `hello world` program, you'll use a `String`. A `String` is declared by placing quotes around a word. Type the following and click the Run button (or `CTRL+R`):

```ruby
"hello world"
```

The Ruby interpreter just echoed what you typed in because you didn't instruct it to do anything. Computers will do exactly what they're told, and you didn't tell it to do anything specifically with the `"hello world"` string.

A command is needed to instruct the computer to do something with the `"hello world"` string. As we mentioned in the checkpoint, Ruby has a command called `p` which prints the value of an object. Run the following code:

```ruby
p "hello world"
```

You should see `hello world` printed in the results area below the console. This may appear to be similar to just typing in "hello world", but the difference is that you are explicitly **instructing** the interpreter to do something with "hello world".

You can also run the `p` command with a number:

```ruby
p 4
```

Strings and numbers are known as primitive data types. Primitive data types are basically the smallest building blocks for Ruby programs. In the next exercise, you'll work with more building blocks.
