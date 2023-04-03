let name2 = document.getElementById('name2')
 
name2.addEventListener('keypress', function (event){
   if (event.key === 'Enter'){
      document.getElementById('showName').innerHTML = `Your Name is ${event.target.value}`
      event.target.value = ''
   }

})

// let skills = document.getElementsByName('skills')

// let checkedSkills =[] ;

// [ ...skills].forEach(skill => {
//    skill.addEventListener('change', function (event){
//       if (event.target.checked) {
//          checkedSkills.push(event.target.value)
//          console.log(checkedSkills)
//       } else{
//          let ind = checkedSkills.indexOf(event.target.value)
//          checkedSkills.splice(ind , i)
//          console.log(checkedSkills)
//       }
//    })
// })

let list = document.getElementById('list')
list.addEventListener('dblclick', function(event){
   if (this.contains(event.target)){
      let innerText = event.target.innerText
      event.target.innerHTML = ''
      let inputBox = createInputBox(innerText)
      event.target.appendChild(inputBox)

      inputBox.addEventListener('keypress', function(e) {
         if (e.key === 'Enter') {
            event.target.innerHTML = e.target.value
         }
      })
      
   } 
})

 function createInputBox(value) {
   let inp = document.createElement('input')
   inp.type = 'text'
   inp.className = 'from-control'
   inp.value = value

   return inp
 }

  