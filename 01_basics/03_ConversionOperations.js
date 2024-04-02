let score  = 33
let score1  = "33"
let score2 = "33abc"


// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score1)
let valueInNumber2 = Number(score2)

// console.log(typeof valueInNumber);
// console.log(valueInNumber2);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = "kamran"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false; "Kamran"=> true;

let someNumber = 33

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber)

// ********************************Opreations *************************

let value = 3
let negValue = -value
// console.log(negValue)

//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2/2)
//console.log(2%2)

// console.log(2**3)

// basic conversions 

//console.log("1" + 2)  // output 12
//console.log(1 + 2) // output 12
//console.log("1" + 2 + 2) // output // 122
//console.log(1+2+ "2")  // 32 in this case first element is number so second element also treated as number and then string treated as string.
// console.log(3 + 4 * 5 % 3 )

// for further instructions see ECMA script documentation for more detials.

// ***************** Advance operations ****************************

// console.log(+true)
// console.log(+"")

// let num1 = num2 = num3  = 2+2;

// console.table([num1,num2,num3])

// precedence of operators
// Prefix and Postfix operators behaviors
// postFix
// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter)
//prefix
// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter)
// Example Of PreFix and PostFix reference MDN
let x = 3
const y = x++

console.log(`x:${x}, y:${y}`)

let a = 3
const b = ++a

console.log(`a:${a}, b:${b}`)
