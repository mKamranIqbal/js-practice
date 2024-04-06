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
console.log(skypeUser.hasOwnProperty("Id"))
