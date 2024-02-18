const btn= document.querySelector('.btn');

btn.addEventListener('click', ()=> {
    const val= document.querySelector('.output').innerHTML;
    let start= 0;
    let end= val.length - 1;
    let ok= true;
    while(start< end){
        if(val[start]!= val[end]){
            ok= false;
            break;
        }
        start++;
        end--;
    }
    
    if(ok){
        document.querySelector('.output').innerHTML= "Palindrome";
    }
    else{
        document.querySelector('.output').innerHTML= "Not Palindrome";
    }

})