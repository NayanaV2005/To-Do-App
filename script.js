const taskInput=document.getElementById('taskInput');
const taskList=document.getElementById('taskList');

// function to add task
function addTask(){
    const taskText=taskInput.value.trim();
    if(taskText==='')return;

    const li=document.createElement('li');
    li.innerHTML=`<span>${taskText}</span>
    <button onclick="doneTask(this)">Done</buton>
    <button onclick="editTask(this)">Edit</button>
    <button onclick="deleteTask(this)">Delete</button>`;

    taskList.appendChild(li);
    taskInput.value="";
}

// funcion for done ask
function doneTask(button){
    const task=button.parentElement;
    task.classList.toggle('completed');

}


// function to edit task
function editTask(button) {
    const task = button.parentElement;
    const span = task.querySelector('span');
    const newText = prompt("Edit your task:", span.innerText);
    if (newText !== "") {
        span.innerText = newText;
    }
}

// function to delete task
function deleteTask(button){
    const task=button.parentElement;
    task.remove();
}
