// createTask();
// renderTask();
// updateTask();
// deleteTask();

const totalTasks= [];
var input= document.querySelector("input");
var tasks= document.querySelector(".tasks");
tasks.classList.add("my-2")
var button= document.getElementById("clickButton");

button.addEventListener("click", () =>{ 
    var inputValue= input.value;
    var dateValue= new Date()
    var newTask= document.createElement("div");
    
    
    var taskDescription= document.createElement("p");
    taskDescription.classList.add("taskdescription");
    taskDescription.textContent= inputValue;

    var op= document.createElement("p");
    op.classList.add("flex");

    var edit= document.createElement("p");
    edit.classList.add("edit");
    edit.classList.add("cursor-pointer");
    edit.textContent= "Edit"

    var del = document.createElement("p");
    del.classList.add("del");
    del.classList.add("cursor-pointer");
    del.textContent= "Delete"

    op.appendChild(edit);
    op.appendChild(del);  
    op.classList.add("flex");
    op.classList.add("gap-3")
    op.classList.add("justify-between");

    newTask.appendChild(taskDescription);
    newTask.appendChild(op);
     
    totalTasks.push(newTask);

    // Tailwind design class
    newTask.classList.add("flex");
    newTask.classList.add("justify-between");
    newTask.classList.add("bg-[#011627]")
    newTask.classList.add("px-3");
    newTask.classList.add("py-1");
    newTask.classList.add("rounded");
    newTask.classList.add("my-1");

    
    tasks.appendChild(newTask);
    input.value= "";
    
})

function createTask(){

}