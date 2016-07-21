<!--{ ids:[127], language:'JavaScript', type:'workshop', order: 3, name:'Primary Data Types', description:'A data type is a particular representation of information' }-->

### Objectives

After this exercise, you should be able to:

- Recognize a number data type
- Recognize a string data type
- Recognize a boolean data type

### Example

Consider the following conversation between a coffee shop barista and a customer:

>__Customer:__ Excuse me, how much does a small chai tea latte cost?<br>
>__Barista:__ Three twenty-five.<br>
>__Customer:__ Oh, that's expensive. Are refills free?<br>
>__Barista:__ No, I'm sorry.<br>
>__Customer:__ Is it possible to add extra cinnamon?<br>
>__Barista:__ Yes.

Now consider various ways the barista could have answered these questions. The barista could have said the cost was "three dollars and twenty-five cents", which is a numeric value with a specific format. When asked if refills are free, the barista could have just said "no". For each question, the barista chose to answer in a particular way.

When writing code, you must also choose how to represent certain information based on what you need to do with it. These different representations for information, or data, are known as __types__. JavaScript has seven data types to represent values. The three primary data types are __number__, __string__, and __boolean__.

| Data Type | Example            | Used for...      |
| --------- | ------------------ | ---------------- |
| number    | `3.25`             | math operations  |
| string    | `"No, I'm sorry."` | printing text    |
| boolean   | `true`             | making decisions |

A number is either an integer (a whole number, like `99`) or a float (a number with a decimal, like `3.14`).

A string is text enclosed in single or double quotation marks:

```
'I am a string'
"I, too, am a string"
```

A boolean is either `true` or `false` – always written in lowercase because JavaScript is case sensitive.
