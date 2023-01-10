// literal 

var obj = {}
console.log(obj)

console.log(typeof obj)

var obj = {}
obj.x = 10
console.log(obj)

var point = {
  x : 10 ,
  y : 20
}

console.log(point)


point.y = 30
console.log(point)

point.z = 40

console.log(point)

// Constructor

var obj = Object()
obj.a = 10
var obj2 = new Object()
obj2.b = 20 

console.log(obj)
console.log(obj2)

// Accessing Object Properties

var point = {
   x : 10, 
   y : 20 ,
   z : 15
}

// Doit notation

console.log(point.x)
console.log(point.y)
console.log(point.z)

// Array notation

console.log(point['x'])
console.log(point['y'])
console.log(point['z'])
 

var show = 'x'
console.log(point.show)
console.log(point[show])


// Setting Object Properties

var point = {
  x : 10 ,
  y : 20 ,
  z : 15
}

// #1
point.x = 45
console.log(point)

point.a = 16
console.log(point)

console.log(point.d)

// #2
point['y'] = 100
console.log(point)

// #3
var prop = 'z'
point[prop] = 55
console.log(point)


// Remove Object Properties

point.a = undefined
console.log(point)

delete point.a
console.log(point)


// Comparing Two Object in Javascript

var obj = {
  a : 20 ,
  b : 30 
}

var obj2 = {
  a : 20 ,
  b : 30 
}

console.log(obj === obj2)

if(obj.a === obj2.a && obj.b === obj2.b){
  console.log(true)
}else{
  console.log(false)
}


console.log(obj)
console.log(JSON.stringify(obj))

console.log(JSON.stringify(obj) === JSON.stringify(obj2))

// Iterate Object Proportion..............

var obj = {
  x : 10 ,
  y : 30 ,
  z : 40
}

console.log('x' in obj)
console.log('y' in obj)
console.log('z' in obj)
console.log('p' in obj)
console.log('a' in obj)

for(var i in obj){
  console.log(i)
}

for(var i in obj){
  console.log(obj[i])
}

for(var i in obj){
  console.log(i + ':' + obj[i])
}

for( var i in obj){
  console.log(obj)
}


// Object Methods In JavaScript 

var obj = {
  x : 10 ,
  y : 30 ,
  z : 40
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))



// var obj3 = obj
// obj3.x = 100
// obj3.y = 200
// console.log(obj)
// console.log(obj3)


var obj4 = Object.assign({} , obj)
obj4.x = 90
obj4.y = 40
 console.log(obj)
 console.log(obj4)