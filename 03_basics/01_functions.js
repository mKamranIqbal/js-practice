// functions

function AddTwoNumber(num1,num2){ // logis will apply later.  we should check the datatype of num1,num2
    return num1 + num2
}

const res = AddTwoNumber(2,5)

// console.log(res)

function loginUserMessage(username){
    // if(username === undefined){
        if(!username){
        return `please enter user name`
        }
    return `${username} just logged in !`
}

let loginMessage = loginUserMessage();
// console.log(loginMessage)

function calculateCartPrice(...num1){   // rest opreator depends on use case. packed multiple 
    // values and return the all values in an Array.
    return num1
}

// console.log(calculateCartPrice(200,400,500,100)) // output rest operator [ 200, 400, 500, 100 ]

function calculateCartPrice1(val1, val2, ...num1){   // rest opreator depends on use case. packed multiple 
    // values and return the all values in an Array.
    return num1
}

// console.log(calculateCartPrice1(200,300,440,500,201)) // rest operator output [ 440, 500, 201 ]

const user = {
    name:"kamran",
    price:200
}

function handleObject(anyObject){
    console.log(`UserName is ${anyObject.name} and price is ${anyObject.price}`)
}

// handleObject(user)
// handleObject({
//     name:"sam",
//     price:222
// })


const myArr = [200,300,500,60]

function returnSecondValue(getArr){
return getArr[1]
}

// console.log(returnSecondValue(myArr))
console.log(returnSecondValue([200,300,500,60]))
