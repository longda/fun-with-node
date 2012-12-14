var assert = require('assert');

var actual = 3;
var expected = 3;

console.log("starting up...");


assert.equal(actual, expected, "These better be equal... you won't see this get printed.");


try {
  actual = 4;
  assert.equal(actual, expected, "These better not be equal...");  // throws an AssertionError
}
catch(e) {
  console.log("Here was that exception: ", e);
}


actual = "3";
assert.equal(actual, expected, "Hmm... equal/true because you can coerce the string to a number and those values pass the assertion.");


try {
  actual = "three";
  assert.equal(actual, expected, "These will not be equal even with coercion...");
}
catch(e) {
  console.log("Here's another exception: ", e);
}


try {
  actual = "3";
  assert.strictEqual(actual, expected, "These will not be equal because the types do not match.");
}
catch (e) {
  console.log("Here's this exception: ", e);
}



console.log("winding down...");