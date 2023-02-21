document.addEventListener('DOMContentLoaded', ()=>{
    const bur = document.querySelector('.burger');
   
    const menu = document.querySelector('.menu');
    bur.addEventListener('click', (e) =>{
        menu.classList.toggle('active');
        
        
    })
})