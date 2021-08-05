let addTaskText = document.querySelector("#addTaskText");
const addTask = document.querySelector(".addIcon");
let activeTask = document.querySelector(".activeTask");
let newDiv = null;

const addTaskFunction = () => {
    newDiv = document.createElement('div');
    newDiv.classList.add('tAT');
    newDiv.innerText = addTaskText.value;
    if (addTaskText.value === "") {
        alert("Nie możesz dodać pustego pola do zadań");
    } else {
        activeTask.appendChild(newDiv);
    }
    addTaskText.value = "";
}





addTask.addEventListener('click', addTaskFunction);