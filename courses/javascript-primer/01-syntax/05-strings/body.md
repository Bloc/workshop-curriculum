<!--{ ids:[128], language:'JavaScript', type:'workshop', order: 4, name:'Strings', description:'Strings are text enclosed in quotation marks' } -->

### Objectives

After this exercise, you should be able to:

- Recognize when quotation marks are misused in a string
- Demonstrate how to correctly use single and double quotation marks in a string

### Example

When writing a string, there is no difference between using single or double quotation marks except in certain semantic situations. For example:

```
"I'm learning JavaScript."
'I'm learning JavaScript.'
```

These strings are not equal. The first string is valid, but the second string will throw an error. The apostrophe in `I'm` closes the string prematurely while the remaining text becomes a fragment that the JavaScript interpreter doesn't know how to handle:

| `'I'`  | `m learning JavaScript.'` |
| :----: | :-----------------------: |
| string | fragment                  |

Here's another example:

```
"I said, "Hello world!""
'I said, "Hello world!"'
```

Here, the first line is not valid and the second one is. The first line, in fact, creates two strings and a fragment:

| `"I said, "` | `Hello World!` | `""`   |
| :----------: | :------------: | :----: |
| string       | fragment       | string |
