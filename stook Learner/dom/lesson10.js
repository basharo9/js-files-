//  let li = document.createElement('li')
//  li.className = 'list-group-item'
//  li.setAttribute('title', 'I am fourth Item')
//  li.innerHTML = 'Four'

//  console.log(li)

// let list = document.getElementById('list')
// list.appendChild(li)






// let li = createElement('li','list-group-item','Four')
// li.setAttribute('title', 'I am Fourth Item')

// let list = document.getElementById('list')
// list.appendChild(li)

// let p2 = createElement('p', 'lead' ,`Lorem ipsum dolor sit amet consectetur
// adipisicing elit. Dolorum quidem optio vitae atque, nisi at 
// tempora excepturi illum suscipit nesciunt in modi 
// molestiae autem dolorem beatae exercitationem praesentium 
// voluptates odio similique alias consectetur? Sed molestiae 
// voluptatum deserunt amet quasi tempora necessitatibus minus,
// incidunt voluptas? Ipsa quod a vel totam molestiae!`)


// let p3 = createElement('p', 'lead' ,`Lorem ipsum dolor sit amet consectetur
// adipisicing elit. Dolorum quidem optio vitae atque, nisi at 
// tempora excepturi illum suscipit nesciunt in modi 
// molestiae autem dolorem beatae exercitationem praesentium 
// voluptates odio similique alias consectetur? Sed molestiae 
// voluptatum deserunt amet quasi tempora necessitatibus minus,
// incidunt voluptas? Ipsa quod a vel totam molestiae!`)

// console.log(p2)
// let div = createElement('div')
// append(div ,[p2, p3])

// let container = document.getElementById('cont')
// console.log(container)
// container.appendChild(div)


// function createElement(tagName,className ,innerHTML) {
//   let tag = document.createElement(tagName)
//   tag.innerHTML = innerHTML  || ''
//   tag.className = className || ''
//   return tag
// }

// function append(parent, children){
//   children.forEach(child => parent.appendChild(child))
// }



// Remove Element and update

// let firstChild = list.firstElementChild
// console.log(firstChild)

// setTimeout(() => {
// firstChild.innerHTML = firstChild.innerHTML + ' (Modified)'
// firstChild.classList.add('text-light')
// firstChild.style.background = 'black'
// }, 5000)

// setTimeout(() => {
//    list.lastChild.remove()
// }, 3000)


// Clone Node 

let lastItem1 = list.lastElementChild.cloneNode(true)
list.appendChild(lastItem1)


let lastItem = list.lastElementChild.cloneNode()
lastItem.innerHTML = 'Five'
list.appendChild(lastItem)


// console.log(list.attributes)
// console.log(list.getAttributeNames( ))
// console.log(list.getAttributeNode('class'))
// console.log(list.getAttribute('id'))

// console.log(list.id)
// console.log(list.className)
// console.log(list.classList)

//  lastItem.id = 'lest-item'
// lastItem.setAttribute('id' ,'last-item')

let attr =document.createAttribute('title')
attr.value = 'I am Title'
lastItem.setAttributeNode(attr)
