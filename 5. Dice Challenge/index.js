var randomNumber1= Math.floor(Math.random()*6) + 1;
var randomImage= "dice" + randomNumber1 + ".png";
var randomImageSource= "./images/" + randomImage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


