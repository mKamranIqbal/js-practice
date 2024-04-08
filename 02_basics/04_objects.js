// singleton object

// const skypeUser = new Object();

// object literals. // non singleton object

const skypeUser = {}

skypeUser.name = "kamran"
skypeUser.Email = "sample@gmail.com"
skypeUser.Id = "abc123"

// console.log(skypeUser)

const regularUser = {
    email:"kamran@gmail.com",
    fullName: {
        userFullName: {
            firstName:"Kamran",
            lastName:"Iqbal"
        },
        fatherName: {
            firstName:"Malik",
            lastName: "Iqbal"
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userFullName)
// console.log(regularUser.fullName.userFullName.firstName)
// console.log(regularUser.fullName?.userFullName.firstName) // for the check if value has then work

// const obj1 = {1 : "a", 2: "b"}
// const obj2 = {3 : "b", 4: "c"}

const obj1 = {1 : "a", 2: "b"}
const obj2 = {3 : "a", 4: "b"}

// const obj3 = {obj1, obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'b', '4': 'c' } }

// const obj3 = Object.assign(obj1, obj2) //output { '1': 'a', '2': 'b', '3': 'b', '4': 'c' }
// const obj3 = Object.assign({}, obj1, obj2) // output same but best practice { '1': 'a', '2': 'b', '3': 'b', '4': 'c' }
// const obj3 = Object.assign({}, obj1, obj2) // output { '1': 'a', '2': 'b', '4': 'c' }

// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const multiObj = [

    {
        id:"123abc",
        name:"Kamran"
    },
    {
        id:"123abc",
        name:"Ali"
    },
    {
        id:"123abc",
        name:"Asad"
    }

]

// console.log(multiObj[1].name)

// console.log(skypeUser)

// console.log(Object.keys(skypeUser))
// console.log(Object.values(skypeUser))
// console.log(Object.entries(skypeUser))

// console.log(Object.hasOwnProperty("name"))
// console.log(skypeUser.hasOwnProperty("Id"))

const cource = {
    courseName: 'Js in Urdu',
    price : 34500,
    courceInstructor:'hitest'
}
// console.log(cource.courceInstructor) // output hitest

const {courceInstructor} = cource; // 1-way destructuring the object.
const {courceInstructor : Instrcutor} = cource; // 2-way destructuring the object.
// console.log(courceInstructor) // output hitest
// console.log(Instrcutor)

//React code example to destructing the object. {compnay.}
// const navbar = ({company})=>{

// }

// navbar(company="Kamran")

// Json Syntax
// {
//     "name":"Kamran",
//     "Id": 132,
//     "age": 32,
//     "email": "kamran@gmail.com"
// }

const myUser ={
    name : "Ali",
    age: 32,
    email:"ali@gmail.com"
}

const {name : n, email: e, age: a} = myUser

console.log(n)
console.log(e)
console.log(a)