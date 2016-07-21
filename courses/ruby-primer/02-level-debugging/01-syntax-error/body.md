<!-- { ids:[62], language:'Ruby', type:'workshop', order: 0, name:'Syntax Error', description:'Debug your code when you have a typo.' }-->

### Objectives

After this exercise you should be able to:

- Identify a syntax error.

### Example

Don't type anything in your code editor, just click **Run**. You should see an error:

```bash
syntax error, unexpected keyword_end, expecting end-of-input (SyntaxError)
```

This output is part of Ruby's stack trace. A stack trace is a list of things that happen when you run code.

The top of this stack trace tells us that we have an unexpected keyword. Ruby doesn't understand our method definition because of a typo (a syntax error). This code has more than one syntax error, fix them all and your code will pass the tests!
