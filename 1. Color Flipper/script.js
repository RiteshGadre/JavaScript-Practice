const btn= document.querySelector('.btn');
const bgColor= document.querySelector('#bgColor');
bgColor.innerHTML= `rgb(223, 34, 252)`;

btn.addEventListener('click', ()=>{
    const red= Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue= Math.floor(Math.random()*256);

    const randomColor= `rgb(${red}, ${green}, ${blue})`;
    bgColor.innerHTML= randomColor;
    document.body.style.backgroundColor= randomColor;
})
