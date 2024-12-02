const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value;
  if (taskText !== '') {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}