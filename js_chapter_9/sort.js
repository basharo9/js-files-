var person = [
  { name : 'A', age : 20},
  { name : 'B', age : 19},
  { name : 'C', age : 26},
  { name : 'D', age : 21},
]

var arr = [ 4, 8, 6, 3, 87 ,9,-1 , -4, -6 ,2, 4, 6 ,7]

// arr.sort()
// console.log(arr)

// person.sort()
// console.log(person)


arr.sort(function(a, b){
  if(a > b){
    return 1
  }else if (a < b) {
    return -1
  } else {
    return 0
  }
})

console.log(arr)



arr.sort(function(a, b){
  if(a > b){
    return -1
  }else if (a < b) {
    return 1
  } else {
    return 0
  }
})

console.log(arr)


person.sort(function(a, b){
  if (a.age > b.age){
    return 1
  }else if(a.age < b.age) {
  return -1
  } else {
    return 0
  }
})

console.log(person)


// every

var res1 = arr.every(function(value){
  return value % 2 === 0
})
 console.log(res1)
  
var res2 = arr.every(function(value){
  return value > 0
})
console.log(res2)


var res3 = arr.some(function(value){
  return value % 2 === 0
})
console.log(res3)

var res4 = arr.some(function(value){
  return value > 0
})
 console.log(res4)