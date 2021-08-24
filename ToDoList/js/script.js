const addTaskText = document.querySelector('#ati');
const btnAddTask = document.querySelector('#addTITask');
const errorWrapper = document.querySelector('.errorWrapper');
const productsList = document.querySelector('.productsList');

const edit = document.querySelector('.taskEdit');;
const accept = document.querySelector('.taskAccept');;
const trash = document.querySelector('.taskTrash');;

let taskProductsP = document.querySelector('.taskProductP');
let taskProduct = document.querySelector('.taskProduct');


// Errors handling functions
function showError(content) {
    errorWrapper.innerText = content;
    errorWrapper.style.display = 'block';
}
function clearError() {
    errorWrapper.style.display = 'none';
}

// A function that adds objects
function addTask(content) {
    clearError();

    if (addTaskText.value === '') {
        showError('Nie można dodać pustego zadania');
    }

    if (addTaskText.value.length > 0) {
        // Creating a 'div' element and adding a class
        let newTaskItem = document.createElement('div');
        newTaskItem.setAttribute('class', 'taskProduct');
        // Creating a 'p' element and adding a class
        let newPItem = document.createElement('p');
        newPItem.setAttribute('class', 'taskProductP');

        // Creating elements for handling tasks
        // Creating 'div' elements and adding a class 
        let optionsTasks = document.createElement('div');
        optionsTasks.setAttribute('class', 'optionsTasks');
        // Create options to handle events
        // Editing a task
        let taskEdit = document.createElement('p');
        taskEdit.setAttribute('class', 'taskEdit');
        // Editing the task
        let taskAccept = document.createElement('p');
        taskAccept.setAttribute('class', 'taskAccept');
        // Deleting a task
        let taskTrash = document.createElement('p');
        taskTrash.setAttribute('class', 'taskTrash');

        // Add element to html
        newPItem.innerText = addTaskText.value;
        optionsTasks.appendChild(edit);
        optionsTasks.appendChild(accept);
        optionsTasks.appendChild(trash);
        newTaskItem.appendChild(newPItem);
        newTaskItem.appendChild(optionsTasks);
        productsList.appendChild(newTaskItem);

        addTaskText.value = '';
    }
}

// Options that support the task
function editTask() {
    addTaskText.value = taskProductsP.innerText;
    addTaskText.focus();
    // alert('Edycja taska');
}
function acceptTask() {
    taskProductsP.style.color = '#b1a5a2';
    taskProductsP.style.textDecoration = 'line-through';
    productsList.appendChild(taskProduct);
    addTaskText.value = '';
    // alert('Zakończenie taska');
}
function trashTask() {
    taskProduct.remove();
    addTaskText.value = '';
    // alert('Skasowanie taska');
}



addTaskText.addEventListener('keydown', function (e) {
    e = e || window.event;
    var key = e.which || e.keyCode; // keyCode detection
    // enter
    if (key == 13) {
        addTask(); //co ma byc contentem?????
        e.preventDefault();
    }
}, false);

btnAddTask.addEventListener('click', () => {
    addTask(); //co ma byc contentem?????
});

edit.addEventListener('click', () => {
    editTask();
});
accept.addEventListener('click', () => {
    acceptTask();
});
trash.addEventListener('click', () => {
    trashTask();
});