var arr = [1 , 2, 3, 4, 5]
arr.forEach(function(value , index, arr){
  console.log(value, index, arr)
})


var sum = 0
arr.forEach(function(value, index, arr){
  sum += value
})

console.log(sum)

var sum = 0
arr.forEach(function(value, index, arr){
  sum =+ value
})

console.log(sum)


function forEach(arr){
  for(var i = 0; i < arr.length ; i++ ){
    console.log(arr[i])
  }
}
forEach(arr)


// problem........
// function forEach(arr , cd){
//   for(var i = 0 ; i < arr.length ; i++){
//     cd(arr[i])
//   }
// }

// forEach(arr , function(value){
//   console.log(value)
// })


var sum = 0 
forEach(arr ,function(value){
  sum += value
})
console.log(sum)



