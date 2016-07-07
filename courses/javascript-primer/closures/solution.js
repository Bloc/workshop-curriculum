// === Know Your Scope ===========================

var a = 9;

function outsideRun(a) {
  console.log(a === 8);

  function insideRun() {
    console.log(b === 7);
    console.log(c === undefined);
  }

  var b = 7;
  insideRun();
  var c = 6;
}

outsideRun(8);

// === Gimme Some Closure ========================

var count = 0;
for (var i = 0; i < 3; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i === count);
      count++;
    }, 300);
  })(i);
}
