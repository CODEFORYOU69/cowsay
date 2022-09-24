const cow = require('./information');



const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${cow.name} and I'm from ${cow.campus}`,
    e : "oO",
    T : "U "
}));


