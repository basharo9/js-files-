
// Template String in JavaScript
let s = "saimun "
let a = ' all'
let b = ` bashar`
let d = `  uhhfeiu m
ow9fifshfidskhvb 
kihbdskvhbds  `
let age = 22
console.log(d)
console.log('My name is ' + s + a+ b +'. and I am '+ age + 'years old.')
console.log(`My name is ${s} ${a} ${b} and I am ${age} years old .`) 
console.log(`My name is ${s} ${a} ${b} and I am ${age} years old . I am ${age < 18 ? 'not':''}adult`) 


console.log(s.padStart(15))
console.log(s.padStart(15 ,'* '))
console.log(s.padEnd( 29))
console.log(s.padEnd( 29 , '# '))
console.log(a.repeat( 20))


// Arrow Function 

function add(a, b ){
  return a + b
}

// let sum = function (a, b) {
//   return a + b
// }  


let add1 = (a, b) => {
  return a + b
}
console.log(add1(3,5))

let add2 = (a , b) =>  a + b
console.log(add2 (3,5))


let sqr2 = x => x*x
console.log(sqr)
console.log(sqr2(4))


// Default Parameters

function sqr(n){
  return n*n
}

console.log(sqr())
// NaN


function sqr1(m){
  m = m || 0
  return m*m
}

console.log(sqr1())


function sqr(n = 0){
  return n*n
}

console.log(sqr(5))
console.log(sqr())

// skip video num 144


// Rest & spread Operator

function sum (...rest){
  return rest.reduce((a,b) => a + b)
}

console.log(sum(1,2,3,4,5,7))

// SPREAD  (ছরিয়ে দেয়া)

let c = [1, 2, 3, 4]
console.log(c)
console.log(...c)



let obj = {
  a: 10,
  b:20,
  c:30
}

let obj2 = {
  ...obj
}
console.log(obj2)

// Enhance Object 

let f = 10 , g = 20
let obj4 = { f, 
  g ,
  print: function ()
   { console.log( this) } 

}
 obj4.print() 

 let obj5 = { f, 
  g ,
  print()
   { console.log( this) } 

}
obj5.print() 

// Destructuring

var person = {
  name : 'HM Nayem',
  email:'aaa@gmail.com ',
  address :{
    city :'Dhaka',
    country : 'Bangladesh'
  }
}

let { name , email, address, address:{city ,country} } = person
console.log(name ,email, city, country)

let arr = [1,2,3,4,5]
let [first, second, , , last] = arr
console.log(first, second, last )


// Object From Entries 

// obj => arr
let obj6 = {
  a : 10 ,
  b : 20
}

console.log(Object.entries(obj6))


let objArr = [
  ['a', 10],
  ['b', 20]
]

 console.log(Object.fromEntries(objArr))


//  symbols 
let s1 = Symbol()
let s2 = Symbol('text symbol')

console.log(s1)
console.log(s2)
console.log(s1 === s2)

let toss = {
  HEAD : Symbol('HEAD'),
  TAIL : Symbol('TALE')
}
