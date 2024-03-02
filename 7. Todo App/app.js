// {
//     desccription: "",
//     update(),
//     delete()

// }

const totalTasks= [];
var input= document.querySelector("input");
var tasks= document.querySelector(".tasks")
var button= document.getElementById("clickButton");

button.addEventListener("click", () =>{
    var inputValue= input.value;
    var newTask= document.createElement("p");
    newTask.innerHTML= inputValue;
    newTask.id= "task";
    var deleteButton= document.createElement("button");
    deleteButton.textContent= "Delete";
    deleteButton.classList.add("delete-button");
    newTask.appendChild(deleteButton);
    totalTasks.push(inputValue);
    tasks.appendChild(newTask);
    input.value= "";
    
})