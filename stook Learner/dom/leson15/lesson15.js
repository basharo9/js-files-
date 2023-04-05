let btn =document.getElementById('btn')


// btn.onclick = function (e) {
//    console.log (e)
// }

// btn.addEventListener('click', function(e){
//    alert('I am clicked')
// })

// let box = document.getElementById('box')
// box.addEventListener('mousemove', function (e){
//    document.getElementById('x-value').innerHTML = e.offsetX
//    document.getElementById('y-value').innerHTML = e.offsetY
//    if (e.offsetY === 50 && e.offsetX ){
//       alert('50 50')
//    }
// })


let list = document.getElementById('list')

btn.addEventListener('click', function(e){
   let item = list.lastElementChild.cloneNode(true)
   item.innerHTML = 'Newly Created Item'
   list.appendChild(item)
})
 


 list.addEventListener('click', function (e){
   if (this.contains(e.target)){
      e.target.remove()
   }
 })