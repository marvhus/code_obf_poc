const rot18 = require('./rot18.js');

var run_stuff = (str) => {eval(str)};

var stuff = "" +
"console.log('HELLO WORLD');"
;

var stuff = rot18.encode(stuff);
console.log(stuff);

var stuff = rot18.decode(stuff);
console.log(stuff);

//run_stuff(stuff);
