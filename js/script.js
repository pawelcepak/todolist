let addTaskText = document.querySelector('#ati');
const btnAddTask = document.querySelector('#addTITask');
const taskProducts = document.querySelector('.taskProducts');

const errorAddTask = document.querySelector('.errorAddTask');

btnAddTask.addEventListener('click', () => {
    errorAddTask.style.display = 'none';

    // create div element (addTask)
    let newTaskItem = document.createElement('div');
    newTaskItem.setAttribute('class', 'taskProduct');
    // create p element (addTask)
    let newPItem = document.createElement('p');
    newPItem.setAttribute('class', 'taskProductP');

    if (addTaskText.value === "") {
        errorAddTask.style.display = 'block';
    } else {
        // add element to html
        newPItem.innerText = addTaskText.value;
        newTaskItem.appendChild(newPItem);
        taskProducts.appendChild(newTaskItem);
    }

    addTaskText.value = "";
});