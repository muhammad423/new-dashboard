const menuEl = document.getElementById('menu');
const sideEl = document.getElementById('side-bar')
const middleEl = document.querySelector('.middle-container')
const closeEl = document.getElementById('close')


 menuEl.addEventListener('click', () =>{
    if(menuEl.id = 'menu'){
        sideEl.style.display = 'block'
    }
 })

 closeEl.addEventListener('click', () =>{
    if(menuEl.id = 'menu'){
        sideEl.style.display = 'none'
    }
 })