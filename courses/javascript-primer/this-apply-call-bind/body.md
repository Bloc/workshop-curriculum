### Name a Wizard

Add a method that gives a name to the wizard so that `true` is logged to the console twice.

```js
function Wizard(name) {
  // Add a method that gives a name to the wizard.
}

var wizard = new Wizard("Harry");
console.log(wizard.name === "Harry");

wizard.updateName("Hermione");
console.log(wizard.name === "Hermione");
```

### Joint Checking

Implement code so that the function `husbandAccessAccount` has a `this` value bound to `wife`. The boolean logged to the console should be `true`.

```js
var wife = {
  accountValue: 432,
  accessAccount: function() {
    return this.accountValue;
  }
};

// Implement code so that the function husbandAccessAccount()
// has a 'this' value bound to 'wife'.

husbandAccessAccount();
console.log(husbandAccessAccount() === 432);
```
