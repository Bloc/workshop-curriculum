<!--{ ids:[], language:'JavaScript', type:'workshop', order: 7, name:'Escape Sequences', description:'Use escape sequences to display special characters in a string.' }-->

### Objectives

After this exercise, you should be able to:

- Explain what the escape character does
- List some escape sequences
- Describe the output of various escape sequences
- Use escape sequences to display special characters in a string

### Example

To treat quotation marks as string characters, we used the escape character to create two characters sets: `\'` and `\"`. These are known as __escape sequences__ that output a single quotation mark and a double quotation mark, respectively.

Likewise, because a backslash is a special character, we can't use `\` on its own if we need to print a backslash. Instead, we must type `\\`, which is an escape sequence that outputs a single backslash.

Another common escape sequence is `\n`, which outputs a new line. To demonstrate, the following string

```
"I hear and I forget.\nI see and I remember.\nI do and I understand."
```

will print as

```
I hear and I forget.
I see and I remember.
I do and I understand.
```

Here are some common escape sequences:

| Escape Sequence | Output       |
| --------------- | ------------ |
| `\'`            | single quote |
| `\"`            | double quote |
| `\\`            | backslash    |
| `\n`            | new line      |
| `\t`            | tab          |

### Exercise

Assign `myString` a string value that uses the escape sequences `\\`, `\n,` and `\t` least once.
