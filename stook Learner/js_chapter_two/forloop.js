//  For loop

for (var i = 0 ; i < 30 ; i++) 
{
  console.log( 'Muhmmed')
}

for (var i = 0 ; i < 30 ; i++) 
{
  console.log((i+1) +' Muhmmed')
}

for (var i = 0 ; i < 30 ; i+=10) 
{
  console.log((i+1) + ' Muhmmed')
}

for (var i = 0 ; i < 30 ; i+=10) 
{
  console.log(i + ' Muhmmed')
}



// for (initializer ; condition ; increment) {

// }

//  initializer => var i = __
//  condition => i > 30
//  increment => i++ , i+=10


for ( var i = 1 ; i <= 30 ; i++) {
  if ( i % 2 == 1) {
    console.log(i)
  }
}


for ( var i = 1 ; i <= 30 ; i++) {
  if ( i % 2 == 0) {
    console.log(i)
  }
}



var sum = 0 ;
for (var i = 1 ; i <= 10 ; i++) {
  sum += i
  console.log(sum)
}



var sum = 0 ;
for (var i = 1 ; i <= 10 ; i++) {
  console.log(sum + '+' + i + '=' + (sum+i))
  sum += i
}
 
console.log('result = ' + sum)

//  exam
// odd number sum
// 