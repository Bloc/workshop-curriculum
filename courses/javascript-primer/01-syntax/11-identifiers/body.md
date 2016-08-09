<!--{ ids:[136], language:'JavaScript', type:'workshop', order: 10, name:'Identifiers', description:'Identifiers are unique names' } -->

### Objectives

After this exercise, you should be able to:

- State the rules for creating identifiers
- Describe style guidelines for creating identifiers

### Example

All JavaScript variables must be given unique names. These unique names are called __identifiers__. Some identifiers we've used in these exercises so far are: `numberOfOceans`, `confuciusQuote`, and `bestActor`.

JavaScript has some rules for creating identifiers:

- They must begin with a letter, underscore (`_`), or dollar sign (`$`)
- They can contain letters, numbers, underscores, and dollar signs
- They cannot contain whitespace
- They can be of any length (`x` is a valid identifier)
- They are case sensitive (`x` and `X` are different identifiers)
- They cannot use reserved words (like JavaScript keywords) as names

In addition to these rules, there are some style guidelines to follow. Variable names should (usually):

- Begin with a lowercase letter
- If a name is more than one word, capitalize each word after the first (don't use hyphens or underscores to separate words)
- Be descriptive of the value that they hold

Capitalizing each word is known as __camel case__, or camelCase. The visual effect of the lowercase letters with intermittent uppercase letters resembles a camel's back.

Variable names should be descriptive. Identifiers like `someVar23` and `myVariable` are not good choices because it's difficult to tell what data they represent. Variable names should be descriptive so that you or another developer can easily discern what information the variable holds.
