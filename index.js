let toDoList =[];

function addTask(){
  let taskInput = document.querySelector("#myInput");
  let taskText = taskInput.value;
  toDoList.push(taskText);

  let newTask = document.createElement("li");
  newTask.textContent = taskText;

  let list = document.querySelector("#myList");
  list.appendChild(newTask);


  newTask.addEventListener("click", taskCompleted);
  function taskCompleted(){
   newTask.style.textDecoration = "line-through";
  };

  
  let removeButton = document.createElement("button");
  removeButton.textContent = "DELETE";

  removeButton.addEventListener("click", function(){
  newTask.remove();
  })
  
  newTask.appendChild(removeButton);
    
  taskInput.value = "";
}
