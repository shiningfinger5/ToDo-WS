let toDoList =[];

function addTask(){
  let inputElement = document.querySelector("#myInput");
  let taskText = inputElement.value;
  toDoList.push(taskText);

  let newTask = document.createElement("li");
  newTask.textContent = taskText;

  let list = document.querySelector("#myList");
  list.appendChild(newTask);

  inputElement.value = "";
}
