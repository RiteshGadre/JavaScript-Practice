var input= document.querySelector("input");
var tasks= document.querySelector(".tasks")

document.addEventListener("click", () =>{
    var inputValue= input.value;
    var newTask= document.createElement("p");
    newTask.innerHTML= inputValue;
    newTask.id= "task";
    tasks.appendChild(newTask);
    input.value= "";
})