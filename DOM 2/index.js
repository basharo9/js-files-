// let h1 = document.getElementById('h1')
// // h1.textContent = 'hi'
 
// console.log(h1.textContent);
// console.log(h1.innerText)


function styling() {
   let h1 = document.getElementById('h1')
   h1.style.color = 'red';
   h1.style.fontSize = '40px';
}

function styling2() {
   let h1 = document.getElementById('h1')
   h1.style.color = '#ff9';
   h1.style.fontSize = '40px';
}


document.getElementById('h1').innerHTML = 'It\'s Saimun'

function myMove(){
   const animate = document.getElementById('animate');
   let pos = 0;

   const interval = setInterval(frame , 50);

   function frame(){
      if(pos < 350){
         pos++
         animate.style.top = pos + 'px';
         animate.style.left = pos + 'px'
      } else {
         clearInterval(interval);
      }
   }
}

 
function cText(id){
    id.innerHTML = " Its change";
}


function  displayDate(){
   document.getElementById('time').innerHTML = Date()
}
 

function mOver (obj) {
   obj.innerHTML = 'A yellow container'
}

function mOut (obj){
   obj.innerHTML = 'I am  '
}


function mDown (obj) {
   obj.style.background = '#1ec5e5'
   obj.innerHTML = 'ছেড়ে দিন'
}

function mUp (obj){
   obj.style.background = 'yellow'
   obj.innerHTML = 'চেপে ধরুন'
   
}

function mFo(obj){
   obj.style.background ='#1ec5e5'
}