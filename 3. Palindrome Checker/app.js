const btn= document.querySelector('.btn');

btn.addEventListener('click', ()=> {
    let val= document.querySelector('#output').value;
    let start= 0;
    let end= val.length - 1;
    console.log(val);
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