var a = 'abc'

if (true) {
  if (true){
  var b = 'i am B'
  }
}

console.log(b)


function x(){
  function y(){
    var a = 10
    console.log(a)
  }
  y()
}
x()


function x(){
  function y() {
    var a = 10 
    console.log(a)
  }
  console.log(a)
  y()
}
x()


function x(){
  var a = 20 
  function y(){
    var a = 10 
    console.log(a)
  }
  console.log(a)
  y()
}
x()


function x() {
  var a = 20 
  function y(){
    // var a = 10 
    console.log(a)
  }
  console.log(a)
  y()
}
x()


function x(){
  // var a = 20 
  function y (){
    var a = 10 
    // console.log(a)
  }
  console.log(a)
}
x()

function test (n){
  function a(){
    return n % 3 === 0
  }
  function b () {
    return n%5 ===0
  }
  if (a() && b()){
    console.log(n + ' is divisible by booth 3 and 5 ')
  }
  else{
    console.log(' Not a valid Number')
  }
}


test(10)
test(30)
test(15)