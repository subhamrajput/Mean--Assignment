const mod1 = require("./modules/module1");
const mod2 = require("./modules/module2");
const mod3 = require("./modules/module3");
const mod4 = require("./modules/module4");
/*
// log from module 1
console.log(mod1);

const total = mod1.sum(10, 20);
console.log(total);

// log module 2
console.log(mod2);
let x = mod2.MY_ARR_STR[1];
console.log(x);6+
let x1 = mod2.MY_ARR;
console.log(x1);
let x2 = mod2.list;
console.log(x2);
*/

// perfrom logic
const sumTotal = mod3.sum(20, 25);
console.log("SUM", sumTotal);

const product = mod3.multiply(20, 25);
console.log("Product", product);


// log modul4
console.log(mod4.sum(10, 20));