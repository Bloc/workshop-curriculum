<!--{ ids:[129], language:'JavaScript', type:'workshop', order: 5, name:'Escape Character', description:'Some characters are more special than others' }-->

### Objectives

After this exercise, you should be able to:

- Recognize the escape character
- Demonstrate how to use the escape character

### Example

There are limitations to swapping single quotation marks for double quotation marks, and vice versa. Errors will still occur in certain situations. For example:

```
"I said, "I'm learning JavaScript.""
'I said, "I'm learning JavaScript."'
```

Neither line is a valid string, and there's no combination of quotation marks that will make it a valid string. Instead, we can use the __escape character__, a backward slash (`\`), to tell the JavaScript interpreter to treat a character in a special way.

By preceding a quotation mark with the escape character, we tell the JavaScript interpreter to treat the mark as part of the string:

```
"I said, \"I'm learning JavaScript.\""
'I said, "I\'m learning JavaScript."'
```

These revised strings won't throw errors because the escape characters tell the JavaScript interpreter that the quotation marks are part of the string.

### Exercise

Edit the string to use the escape character where necessary. Depending on the size of your screen, you may need to scroll the editor horizontally to see all of the text.
