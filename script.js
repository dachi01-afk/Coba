const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = taskText;

    taskList.appendChild(li);
    newTaskInput.value = '';
});