// var rect = {
//   width : 100 ,
//   height : 50,

//   draw : function(){
//     console.log('I am a rectangle')
//     console.log('My  Width is '+ this.width)
//     console.log('My Hight is '+ this.height)
//   }
// }

// rect.draw()
// rect.height = 100
//  rect.draw()



// var rect = {
//   width : 100 ,
//   height : 50,

//   draw : function(){
//     console.log('I am a rectangle')
//     this.printProperties()
//   } ,

//   printProperties : function(){
//     console.log('My  Width is '+ this.width)
//     console.log('My Hight is '+ this.height)
//   }
// }

// rect.draw()
 

// function myFunc() {
//   console.log(this)
//   rect.printProperties()
// }

// new myFunc()

// var another = {
//   width : 47,
//   height: 56,
//   print : rect.printProperties
// }

// console.log(another.print)
// another.print()



// Factory Pattern 


// var createRect = function ( width, height){
//   return {
//     width : width,
//     height: height,

//     draw : function () {
//       console.log( 'I am a rectangle')
//       this.printProperties()
//       console.log(this)
//     },

//     printProperties: function () {
//        console.log('My Width is ' + this.width)
//        console.log('My Height is ' + this.height)
//     }
//   }
// }


// var rect1 = createRect(10, 34)
// rect1.draw()

// var rect2 = createRect(29 ,30)
// rect2.draw()


// Constructor pattern 

// var Rectangle = function (width, height){
//   this.width = width
//   this.height = height

//   this.draw = function (){
//     console.log('I am a rectangle')
//     this.printProperties()
//     console.log(this)
//   }

//   this.printProperties = function () {
//     console.log('My width is ' + this.width)
//     console.group('My height is ' + this.height)
//   }

// }




// var rect3 =  Rectangle(10 ,20)
// rect3.draw()

// var rect3 = new Rectangle(10 ,20)
// rect3.draw()


// Private Properties 

// var rectangle = function (width , height){
//   this.width = width 
//   this.height = height

//   var position = {
//     x : 56 ,
//     y : -100
//   } 

//   var printProperties = function (){
//     console.log('My width is ' + this.width)
//     console.log('My height is '+ this.height)
//   }.bind(this)

//   this.draw = function (){
//     console.log('I am  rectangle')
//     printProperties()
//     console.log('position: x=' + position.x + 'y='+ position.y)
//   }
// }

// var rect7 = new rectangle(45,30)
// rect7.draw()



function Square (width) {
  this.width = width
  this.getWidth = function (){
    console.log('width is ' + this.width)
  }
}

Square.prototype = {
 draw: function () {
  this.getWidth()
  console.log('Draw')
 },
 toString: function () {
  return 'My width is = ' + this.width
  }
}

var sqr1 = new Square(10)
var sqr2 = new Square(5)