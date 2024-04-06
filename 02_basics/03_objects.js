//singleton
// Object.create

// objects literals

const mySym = Symbol("Key1")

const JsUser = {
    name : "Kamran",
    "full name": "Kamran Iqbal",
    [mySym] : "kamranIqbal",            // use symbol syntax
    age : 32,
    location: "Lahore",
    email : "kamran@gmail.com",
    isLoggedId : false,
    lastLoginDays: ["Monday", "Saturaday"]
}

const User1 = {
    name : "irfan",
    age : 35,
    email : "irfan@gmail.com",
    isLoggedIn : true,
    lastLoginDays: ["Wednesday", "Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

// console.log(typeof JsUser[mySym]);
// console.log(JsUser);



//Object.freeze(JsUser);
JsUser.email = 'sample@gmail.com'
const User3 = Object.assign({}, JsUser, User1)
// console.log(User3)
const obj4 = { ...JsUser, ...User1}
// console.log(obj4)

// console.log(JsUser);
// console.log(User1)


JsUser.greeting = function(){
    console.log("Hi kamran how are you !");
}

// console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`hello my name is ${JsUser.name} and my age is ${JsUser.age} and my email address is ${JsUser.email}. Now I'm loggedin ${JsUser.isLoggedId} my last login day is ${JsUser.lastLoginDays[1]}`)
}

// console.log(JsUser.greeting2())
console.log(JsUser["age"])
console.log(JsUser["name"])
console.log(JsUser["isLoggedId"])