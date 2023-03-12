 let li = document.createElement('li')
 li.className = 'list-group-item'
 li.setAttribute('title', 'I am fourth Item')
 li.innerHTML = 'Four'

//  console.log(li)

let list = document.getElementById('list')
list.appendChild(li)
