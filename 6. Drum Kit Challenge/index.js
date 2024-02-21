const btns= document.querySelectorAll(".drum").length;
for (var i = 0; i < btns; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert("I got Clicked");
        var audio= new Audio('./sounds/tom-1.mp3');
        audio.play();
        
    
    });

}


