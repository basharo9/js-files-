// console.log(parent)

// let children = list.children
// console.log(children)

// console.log(list.previousElementSibling)
// console.log(list.nextElementSibling)

// let li = document.querySelector('li')
// console.log(li.nextElementSibling)

// console.log(list.firstElementChild)
// console.log(list.listElementChild)

let listItem = document.getElementsByTagName('li')
// let listItems = Array.from(listItem)
// let listItems = Array.prototype.slice.apply(listItem)
let listItems = [...listItem]

// console.log(listItems)

listItems.forEach((li, ind) => {
  let text = li.innerHTML
  li.innerHTML = `(${ind + 1}) ${text}`
})


