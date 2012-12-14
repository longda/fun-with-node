//var buffer = require('buffer');  // don't do this, it's global...

//var buff = new Buffer(4);

var buf = new Buffer(256);
var len = buf.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + " bytes: " + buf.toString('utf8', 0, len));