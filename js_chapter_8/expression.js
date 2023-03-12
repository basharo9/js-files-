var addition = function(a, b){
  return (a + b)
}
addition(10 ,20)



// setTimeout(function(){
//   console.log('I will call After 5 second')
// },5000)

// setTimeout(function(){
//   console.log('hello')
// },1000)

// setTimeout(function(){
//   console.log('saimun')
// },2000)

// setTimeout(function(){
//   console.log('all')
// },3000)
// setTimeout(function(){
//   console.log('bashar')
// },4000)


// var another = addition
// console.log(another())


// Inner Function in Javascript

function something( greet , name){
  function sayHi(){
    console.log(greet ,name)
  }
  sayHi()
}

something('Good Morning' , 'HM Nayem')

function something ( greet, name){
  function getFirstName(){
    if(name){
      return name.split( ' ')[0]
    }
  }
  var message = greet + ' ' +getFirstName()
  console.log(message)
}

something('Good Morning' ,'Hasan Mahud')


function something ( greet, name){
  function getFirstName(){
    if(name){
      return name.split( ' ')[0]
    }
  }
  var message = greet + ' ' +getFirstName()
  console.log(message)
}

something('Good Morning' )


function something ( greet, name){
  function getFirstName(){
    if(name){
      return name.split( ' ')[0]
    } else{
      return ' '
    }
  }
  var message = greet + ' ' +getFirstName()
  console.log(message)
}

something('Good Morning' )
