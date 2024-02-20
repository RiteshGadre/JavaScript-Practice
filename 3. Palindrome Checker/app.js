const input= document.querySelector('#val');
const btn= document.querySelector('.btn');
const output= document.querySelector('.output');

btn.addEventListener("click", ()=>{
    inputValue= input.value;
    

    let start= 0;
    let end= inputValue.length - 1;
    let ok= true;
    while(start<end){
        if(inputValue[start]!== inputValue[end]){
            ok= false;
            break;
        }
        start++;
        end--;
    }

    if(ok) output.innerHTML= "Palindrome";
    else output.innerHTML= "Not Palindrome";
})