### Know Your Scope

Study the given code and fill in the blanks ( `___` ) with the correct value of the variable so that the console prints `true` three times.

```js
var a = 9;

function outsideRun(a) {
  console.log(a === ___);

  function insideRun() {
    console.log(b === ___);
    console.log(c === ___);
  }

  var b = 7;
  insideRun();
  var c = 6;
}

outsideRun(8);
```

### Gimme Some Closure

Mistakes are commonly made when creating closures in loops and when dealing with asynchronous callbacks. In this exercise, when the script runs, `false` is logged to the console three times because the value of the variable `i` does not equal the value of the variable `count` when the boolean is logged to the console.

Fix the code so that the closures are no longer broken in the loop and `true` is logged to the console three times.

```js
var count = 0;
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i === count);
    count++;
  }, 300);
}
```

> Hint: The solution is simple. Understanding the problem is the difficult part.

| Description | Code |
| ----------- | ---- |
| the starting value of `count`         | `0` |
| the `for` loop expressions            | `var i = 0; i < 3; i++` |
| the callback function of `setTimeout` | `console.log(i === count); count++` |
| the `setTimeout` delay                | `300` |

__Understanding the Problem__

[`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout) calls a function after a specified delay (in milliseconds). In this exercise, the delay is `300` milliseconds. The callback function runs asynchronously from the rest of the script. This diagram illustrates what happens when the above script runs:

<center>![asynchronous](https://bloc-global-assets.s3.amazonaws.com/images-frontend/screenshots/scopes-closures%20checkpoint/async.jpg)</center>

> This diagram does not depict the exact timing of this script. It's only meant to provide an approximation of the script's timeline of events.

The script enters the loop and `setTimeout` executes, but the callback function of `setTimeout` has a delay of 300 milliseconds and the loop does not "wait" for that function to execute before entering the start of the loop again. The callback is asynchronous.

In effect, the script reaches the end of the `for` loop (where `i` is equal to 3)  before the delay of the first `setTimeout` ends. Because the size of this script is so small, we're dealing with milliseconds, so it's hard to visualize just how quickly these processes are running.

Imagine the loop takes one millisecond to execute. It calls `setTimeout`, increments `i`, then repeats. In that scenario, three loops only take three milliseconds to complete. That means the script will do nothing for another 297 milliseconds (300 - 3) after the `for` loop is finished.

If the loop ran a million times or the delay of the callback function was different, the results might be different as well. But in this case, there is enough of a difference in processing time that the loop reaches an end before the variable `count` has a chance to increase by one for the first time.

Learn more about asynchronous scriptming at [Egghead.io](https://egghead.io/series/mastering-asynchronous-scriptming-the-end-of-the-loop).
