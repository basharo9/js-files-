// In Returns the same result if given the same argument .
// It does not cause any observable side  effects

function sqr(n){
  return n*n 
}
console.log(sqr(3))
console.log(sqr(3))
console.log(sqr(3))



// ↓ is not a pure function 
var n = 10 
 function change(){
  n = 100
 }

 change()
 console.log(n)


 var point = {
  x : 45,
  y : 23
 }

function printPoint(point) {
point.x = 100
point.y = 200
console.log(point)
}
printPoint(point)


