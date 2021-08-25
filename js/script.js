const addTaskText = document.querySelector('#ati');
const btnAddTask = document.querySelector('#addTITask');
const errorWrapper = document.querySelector('.errorWrapper');
const productsList = document.querySelector('.productsList');


// Errors handling functions
function showError(content) {
    errorWrapper.innerText = content;
    errorWrapper.style.display = 'block';
}
function clearError() {
    errorWrapper.style.display = 'none';
}

// A function that adds objects
function addTask() {
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
        taskEdit.innerText = 'E';
        // Editing the task
        let taskAccept = document.createElement('p');
        taskAccept.setAttribute('class', 'taskAccept');
        taskAccept.innerText = 'A';
        // Deleting a task
        let taskTrash = document.createElement('p');
        taskTrash.setAttribute('class', 'taskTrash');
        taskTrash.innerText = 'T';

        // Add element to html
        newPItem.innerText = addTaskText.value;
        optionsTasks.appendChild(taskEdit);
        optionsTasks.appendChild(taskAccept);
        optionsTasks.appendChild(taskTrash);
        newTaskItem.appendChild(newPItem);
        newTaskItem.appendChild(optionsTasks);
        productsList.appendChild(newTaskItem);

        addTaskText.value = '';
    }
}

// Options that support the task
function editTask(element) {
    // console.log(element, element.parentNode.parentNode.querySelector('p').innerText);
    addTaskText.value = element.parentNode.parentNode.querySelector('p').innerText;
    addTaskText.focus();
    // wrocic do edycji tekstu (oobecnie dodaje jako nowy task)
    // alert('Edycja taska');
}
function acceptTask(element) {
    element.parentNode.parentNode.querySelector('p').style.color = '#b1a5a2';
    element.parentNode.parentNode.querySelector('p').style.textDecoration = 'line-through';
    addTaskText.value = '';
    // dodawanie zakonczonych na sam koniec - Wrocic do tego jak ogarne petle for
    // alert('Zakończenie taska');
}
function trashTask(element) {
    element.parentNode.parentNode.remove();
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



document.addEventListener('click', function (e) {
    console.log(e);
    if (e.target && e.target.classList.contains('taskEdit')) {
        editTask(e.target);
    } else if (e.target && e.target.classList.contains('taskTrash')) {
        trashTask(e.target);
    } else if (e.target && e.target.classList.contains('taskAccept')) {
        acceptTask(e.target);
    }
});

// shift + alt + f

// e - PointerEvenet
//e.target.classList.contains - wywoluje na elemencie zdarzenie wyszukania celu, wyszukuje wszystkie class i czy jest element o class podanej w ()