const score = 400

// console.log(typeof(score))   //output     400

const balance = new Number(100);

let date = new Date();


// console.log(typeof balance);    //output object
// console.log(balance);       //output     [Number: 100]

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// console.log(balance.toExponential(5)); // output balance is 2 -> 2.00000e+0

// console.log(date.toLocaleDateString('pk')) // output 4/4/2024
// console.log(date.toLocaleString('PK')) // output 4/4/2024, 10:27:09 AM

// console.log(date.getDay('pk'));     // output 4
// console.log(date.getMonth('pk'));   // output 3
// console.log(date.toTimeString());   // output 10:29:41 GMT+0000 (Coordinated Universal Time)

const otherNumber = 23.345534

// console.log(otherNumber.toPrecision(1))         // output 2e+1      wrong output.
// console.log(otherNumber.toPrecision(2))         // output 23
// console.log(otherNumber.toPrecision(3))         // output 23.3
// console.log(otherNumber.toPrecision(4))         // output 23.34

// console.log(typeof otherNumber);

const hundreds = 100000000

// console.log(hundreds.toLocaleString('en-Pk'));      // output 100,000,000


// +++++++++++++++++++++   Maths ++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));                  // output 4
// console.log(Math.round(3.67));              // output 4
// console.log(Math.ceil(4.2));                // output 5
// console.log(Math.floor(4.2));               // output 4
// console.log(Math.PI);                       // output 3.141592653589793
// console.log(Math.max(3,12,43,54,876));      // output 876
// console.log(Math.min(3,12,43,54,876));      // output  3

// console.log(Math.SQRT2);

// console.log(Math.random());
// console.log((Math.random()*10) +1);


const min = 10
const max = 20

// console.log(Math.floor((Math.random()*min)) + 1);

console.log(Math.floor(Math.random() * (max-min + 1)) + min) 





