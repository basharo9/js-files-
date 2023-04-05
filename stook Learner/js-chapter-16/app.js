// Error Handling 

// function changeToInt(v) {
//   let result = Number.parseInt(v)
//   if(!result) {
//     console.log('Please Provide a value which is able to convert in Integer')
//     return
//   }
//   return result 
// }

// let result = changeToInt('42.5')
// console.log(result)


// function changeToInt(v) {
//   let result = Number.parseInt(v)
//   if(!result) {
//     return 'Please Provide a value which is able to convert in Integer'
   
//   }
//   return result 
// }

// let result1 = changeToInt('44')
// console.log(result)

// let result4 = changeToInt(54.65)
// console.log(result)


// try catch


function makeWorlds(text){
  try {
    let str = text.trim ()
    let words = str.split(' ')
    return words
  } catch(e) {
    console.log('Please Provide a Valid Text')
  }
}

let words = makeWorlds(49)
console.log(words)