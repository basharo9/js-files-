var arr = [
  [78 , 71 , 80 , 90 ],
  [80 , 75 , 90 , 88 ],
  [71 , 75 , 79 , 80 ]
]

console.log(arr)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

console.log(arr[0][0])
console.log(arr[1][2])
console.log(arr[2][4])
console.log(arr[2][3])

for (var i = 0 ; i < arr.length ; i++ ){
  console.log(arr[i])
}



for( var i = 0 ; i < arr.length ; i++){
  for(var j = 0 ; j < arr[i].length ; j++){
    console.log(arr[i][j])
  }
}

for( var i = 0 ; i < arr.length ;i++){
  for(var j = 0 ; j < arr[i].length ; j++){
    console.log(arr[i][j])
  }
}



for (var i = 0 ; i < arr.length ; i++){
  for( var j = 0 ; j < arr[i].length ; j++){
    console.log( 'Element ' + i + ':' + arr[i][j])
  }
}