// && = and 
// || = or
// ! = not

// true && true = true
// true && false = False
// false && true = false
// false && false = false


// A || B
// true || true = true
// true || false = true
// false || true =  true
// false || false = false


var a = 10 
var b = 20 
var c = 40
var d = 30

if (a > b && c > d) {
  console.log('a is greater than b and c is greater than d')
} else {
  console.log('At least one condition is false')
 }

if  (a > b || c > d) {
  console.log('a is greater than b or c is greater than d')
 } else {
  console.log('At least one condition is false')
 }


 var check = !( a > b)
 console.log(check)


 var check = !!( a > b)
 console.log(check)
 
