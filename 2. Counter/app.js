const increaseBtn= document.querySelector('.increase');
const decreaseBtn= document.querySelector('.decrease');
let value= parseInt(document.querySelector('.val').innerHTML);

increaseBtn.addEventListener('click', ()=>{
    value++;
    document.querySelector('.val').innerHTML= value;
})

decreaseBtn.addEventListener('click', ()=>{
    value--;
    document.querySelector('.val').innerHTML= value;
})