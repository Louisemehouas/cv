const call = require(`./information.js`);

var cowsay = require("cowsay");

console.log(
    cowsay.say({
        text: `Im ${call.name}, from ${call.campus}`,
    })
);














