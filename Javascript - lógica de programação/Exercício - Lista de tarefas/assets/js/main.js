const inputNewTask = document.querySelector('.input-new-task');
const task = document.querySelector('.task');

function creatList() {
    const list = document.createElement('li');
    return list;
}

function creatButtonDelete(list) {
    list.innerText += ' ';
    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Apagar';
    buttonDelete.setAttribute('class', 'delete');
    buttonDelete.setAttribute('title', 'Apagar essa tarefa');
    list.appendChild(buttonDelete);
}

function creatTask(textInput) {
    const list = creatList();
    list.innerHTML = textInput;
    task.appendChild(list);
    clearInput();
    creatButtonDelete(list);
    saveTask();
}

function clearInput() {
    inputNewTask.value = '';
    inputNewTask.focus();
}

function saveTask() {
    const listTask = task.querySelectorAll('li');
    const listOfTask = [];

    for (let task of listTask){
        let taskText = task.innerText;
        taskText = taskText.replace('Apagar', '');
        listOfTask.push(taskText);
    }

    const taskJson = JSON.stringify(listOfTask);
    localStorage.setItem('task', taskJson);
}

function readTaskSave(){
    const task = localStorage.getItem('task');
    const listOfTask = JSON.parse(task);
    
    for(let task of listOfTask){
        creatTask(task);
    }
}

inputNewTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputNewTask.value) return;
        creatTask(inputNewTask.value);
    }
});

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('delete')) {
        el.parentElement.remove();
        saveTask();
    }

    if (el.classList.contains('btn-add-task')) {
        if (!inputNewTask.value) return;
        creatTask(inputNewTask.value);
    }

    if (el.classList.contains('btn-read-task')) {
        readTaskSave();
    }
});