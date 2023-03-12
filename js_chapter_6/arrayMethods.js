// join Methods 
var arr = [4, 5, 9 ,6]
console.log(arr.join(' '))

console.log(arr.join(' , '))

console.log(arr.join(' | '))

// fill Methods 


arr.fill(0)
console.log(arr)
console.log(arr.fill(1))

console.log(arr.fill(true))


var arr = [ 4 , 5 , 6 , 7 ]
var arr2 = [ 3 , 5 , 7 ,8]

var arr3 = arr.concat(arr2)
console.log(arr3)

console.log(Array.isArray(arr))
 
var arr4 = Array.from(arr)
console.log(arr)

var a =[1, 2]
var b = a 
b[0] = 5
console.log(a)

var a = [1, 2]
var b = Array.from(a)
b[0] = 5
console.log(a)
console.log(b)
