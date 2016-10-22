var locals = ["you", "me", "and everyone we know"];     // #1

var siliconValley = function() {
  var locals = ["start ups", "Google", "Facebook"];     // #2

  var goldenGatePark = function() {
    var locals = ["roller bladers", "frisbee golfers"]; // #3

    var botanicalGarden = function() {
      var locals = ["plants"];                          // #4
      return locals;
    };

    return locals;
  };

  goldenGatePark(); // What will goldenGatePark() return?

  return locals;
};
// Do not edit code above this line

var goldenGateParkReturns;
