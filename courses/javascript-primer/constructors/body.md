### Create a Stark

Implement a function that inherits from `Stark` and sets a name in the object constructor.

```js
function Stark() {}
Stark.prototype.getName = function() {
  return this.name;
};

// Implement a function that inherits from `Stark`
// and sets a name in the object constructor.

var arya = new Arya();
arya.getName();
```
