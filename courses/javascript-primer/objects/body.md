Before working on the exercises below, read our [About Objects](https://www.bloc.io/resources/about-objects) resource.

1. Create a function named `createCourse`. This function should:
    - take three arguments that will define course properties:
        - `title` (string).
        - `duration` (string).
        - `students` (array).
    - return an object that has each property assigned its proper value.

    For example:

    ```js
    createCourse('Bloc Frontend Engineering', '4 weeks', ['Carol', 'Jan', 'Cindy']);
    // returns {title: 'Bloc Frontend Engineering', duration: '4 weeks', students: ['Carol', 'Jan', 'Cindy']}
    ```

2. Create a function named `formLetter`. This function should:
    - take one argument, a letter, which has three properties: `recipient`, `sender`, and `msg`.
    - combine the three properties into a single string with an additional greeting and closing.
    - insert additional new lines between the greeting, message, and signature.

    For example:

    ```js
    formLetter({ recipient: "Hermione", sender: "Luna", msg: "How are you?" });
    // returns "Hello Hermione,\n\nHow are you?\n\nSincerely,\nLuna"
    ```

3. Create a function named `canIGet`. This function should:
    - take two arguments:
        - `item`: represents what the user wants to buy.
        - `money`: represents how many dollars a user has.
    - return `true` if a user can afford a given item according to the price chart below, and `false` otherwise:
        - 'MacBook Air' - $999
        - 'MacBook Pro' - $1299
        - 'Mac Pro' - $2499
        - 'Apple Sticker' - $1
    - return `false` if the `item` is not in the above list of Apple products.

    > Do this with no `if` conditions! (Hint: Place the above price table in an object.)

    For example:

    ```js
    canIGet('MacBook Air', 100);  // returns false
    canIGet('MacBook Air', 1000); // returns true
    ```
