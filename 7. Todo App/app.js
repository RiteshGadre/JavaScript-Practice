// createTask();
// renderTask();
// updateTask();
// deleteTask();

const totalTasks= [];
var input= document.querySelector("input");
var tasks= document.querySelector(".tasks")
var button= document.getElementById("clickButton");

button.addEventListener("click", () =>{ 
    var inputValue= input.value;
    var dateValue= new Date()
    var newTask= document.createElement("div");
    
    
    var taskDescription= document.createElement("p");
    taskDescription.classList.add("taskdescription");
    taskDescription.textContent= inputValue;

    var status= document.createElement("p");
    status.classList.add("status");
    status.textContent= "Not Completed"

    newTask.appendChild(taskDescription);
    newTask.appendChild(status);
   
    totalTasks.push(newTask);
    tasks.appendChild(newTask);
    input.value= "";
    
})

function createTask(){

}