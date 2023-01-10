var addition = function(a, b){
  return (a + b)
}
addition(10 ,20)



setTimeout(function(){
  console.log('I will call After 5 second')
},5000)

setTimeout(function(){
  console.log('hello')
},1000)

setTimeout(function(){
  console.log('saimun')
},2000)

setTimeout(function(){
  console.log('all')
},3000)
setTimeout(function(){
  console.log('bashar')
},4000)


var another = addition
console.log(another())
