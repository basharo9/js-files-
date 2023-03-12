 function sample (a, b, cd) {
  var c = a + b       
  var d = a - b
  var result = cd(c , d)
  return result 
 }

 function sum (a , b){
  return a + b
}
// console.log(sample(5, 8))

var result = sample(5, 8, sum)
console.log(result)
// 5+8 = 13
// 5-8 = -3


var result2 = sample (5, 8 ,function( c, d ){
  return  c - d
})

console.log(result2)
// 5+8 = 13
// 5-8 = -3
//13 - (-3) = 16


var result3 = sample (5, 8, function (c , d){
  return c * d
})
console.log(result3)